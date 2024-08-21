import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="product-description-wrap my-5">
        <Tabs defaultActiveKey="review" id="product-description-tab" className="mb-3">
            <Tab eventKey="review" title="Review">
                <p>Review - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque.</p>
            </Tab>
            <Tab eventKey="description" title="Description">
                <p>Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque.</p>
            </Tab>
        </Tabs>
    </div>
  )
}

export default DescriptionBox