//File to write all backend code

//Define the port and include the dependencies
require('dotenv').config();
const port = process.env.PORT || 4000; //assign the port number
const baseUrl = process.env.BASE_URL || `http://localhost:${port}`; 
const express = require("express");//added the express
const app = express();
const mongoose = require("mongoose"); //added mongoose to use mongoDB 
const jwt = require("jsonwebtoken");//added jwt to generate the token and verify that token
const multer = require("multer");// to create image storing system so whenever we upload any image it will be stored in upload folder
const path = require("path");
const cors = require("cors"); //added to provide the access to react project
const { error, log } = require("console");

app.use(express.json())// using this whatever request we will get from response that will be automatically parsed to json
app.use(cors({
    origin: '*'
})); //using this our project will connect to express app on port 4000, connect frontend to backend

//Database connection with mongoDB(Connects the mongoDB with express.js using the connection string)
mongoose.connect("mongodb+srv://djbosmiyaBodega:bodegaadmin@cluster0.putogjq.mongodb.net/bodega", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 45000, // 45 seconds
    ssl: true 
});

//API Creation to check express is running when we go to port 4000 /
app.get("/",(req,res)=>{
    res.send("Express app is running");
})

//Image storage engine
const storage = multer.diskStorage({ // configuration of diskStorage
    destination: (req, file, cb) => {
        console.log(`Uploading to: ${path.join(__dirname, 'uploads/images')}`);
        cb(null, path.join(__dirname, 'uploads/images'));
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

//this is an upload function in which the above image storage congfiguration is passed
const upload = multer({storage: storage});//storage object is passed with above configuration

//Creating upload endpoint for getting the images
//app.use('/images', express.static('uploads/images'))
app.use('/images', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    console.log(`Serving image: ${req.url}`);
    next();
  }, express.static(path.join(__dirname, 'uploads/images')));
  
app.post('/uploads', upload.single('product'),(req, res) => {//'product is the fieldname'
    if (!req.file) {
        return res.status(400).json({ success: 0, message: 'No file uploaded' });
    }
    res.json({
        success: 1,
        image_url: `${baseUrl}/images/${req.file.filename}`
    });
})

//Schema for creating products in the mongoDB or created the model for the Product using mongoose library
const Products = mongoose.model("Product", {
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    },
})

//Creating API to add product in the database
app.post("/add-product",async(req,res) => {
    let product = await Products.find({}); //find all products from the above schema and stored in this product array
    let id;
    if (product.length > 0){ //product is there in the database
        let last_product_array = product.slice(-1); //to get the last product
        let last_product = last_product_array[0]; //index 0 is given because there will be only one product in an array and that is stored in the variable
        id = last_product.id + 1;
    }
    else{
        id = 1;
    }
    const products = new Products({
        id: id,
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
        price: req.body.price,
    });
    console.log(products);
    await products.save(); //this function saves the product in the mongoDB database and await is used to take some time
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
})

//Creating API to delete the product from the database by getting the product id
app.post("/delete-product",async(req,res) => {
    await Products.findOneAndDelete({id: req.body.id});
    console.log("Deleted");
    res.json({
        success:true,
        name: req.body.name
    })
})

//Creating API to fetch all products from the database
app.get("/all-products",async(req,res) => {
    let products = await Products.find({});
    console.log("All Products Fetched");
    res.send(products);
})

//Schema for creating user model in the MongoDB
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating endpoint for registring the user
app.post('/signup', async(req,res) => {

    //first check if user has already existing account
    let checkUser = await Users.findOne({email: req.body.email})
    if(checkUser){
        return res.status(400).json({success:false,errors:"Existing user with the same email Id"})
    }

    //if no existing user then we will create empty cart
    let cart = {}; // empty object
    //empty cart data
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;            
    }

    //And using that cart we will create the user
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })

    //after creating user, they will be saved in the database
    await user.save();

    //creating data object where user is the key containing
    //one object user id
    const data = {
        user:{
            id:user.id
        }
    }
    
    //Creating token after data object creation, and makes token 
    const token = jwt.sign(data, 'secret_ecom');//generates the token and will not be read, and send in the response
    res.json({success:true,token})//sending response with one object having success token
    })

//Creating endpoint for user login
app.post('/login', async(req,res) => {
    //finds the user
    let user = await Users.findOne({email: req.body.email});
    //check if user with that email address exits
    if(user){
        const pass_compare = req.body.password === user.password;
        //if password matches then generate the token
        if(pass_compare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong password!!!"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email ID!!!!"});
    }
})

//Creating endpoint for feature product data in home page
app.get('/featureproduct', async(req,res)=>{
    let products = await Products.find({}); //fetching all products from mongoDB and saving in one array
    let featureproduct = products.slice(1).slice(-3);//slicing the products array, we will get recently added 3 products
    console.log("Feature Product Fetched");
    res.send(featureproduct);
})

//creating middleware to fetch user for add to cart functionality, using this middleware auth-token is converted to user id
const fetchUser = async(req,res,next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try{
            const data = jwt.verify(token,'secret_ecom')
            req.user = data.user;
            next();
        } catch(error){
            res.status(401).send({errors:"Please authenticate using valid token"})
        }
    }
}

//creating endpoints for adding product in cartdata
app.post('/addtocart', fetchUser, async(req,res)=>{
    console.log("added",req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id})
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added");
})

//creating endpoints for removing product in cartdata
app.post('/removefromcart', fetchUser, async(req,res)=>{
    console.log("removed",req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id})
    if(userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed");
})

//creating endpoints to get the cart items
app.post('/getcart', fetchUser, async(req,res)=>{
    console.log("Get cart");
    let userData = await Users.findOne({_id:req.user.id})
    res.json(userData.cartData);

})

app.listen(port,(error) =>{
    if(!error){
        console.log("Server running on port" +port);
    }
    else{
        console.log("Error" +error);
    }
})