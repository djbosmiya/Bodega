import React from 'react';
import './Item.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="feature-card col-md-4 ps-4 pe-4 mt-5">
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body className='ms-3 me-3'>
            <Card.Title as="h3">{props.name}</Card.Title>
            <Card.Subtitle className="card-desc text-justify">{props.category}</Card.Subtitle>
            <Card.Text>${props.price}</Card.Text>
            <Link to={`/product/${props.id}`}><button onClick={window.scrollTo(0,0)} class="offer-button">READ MORE</button></Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item