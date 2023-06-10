import React from "react";
import "./inventory.scss";
import filter from "../../Images/home/arrow (1).png";
import Button from "react-bootstrap/Button";
import { Form, InputGroup, Card, Tabs, Tab, Dropdown } from "react-bootstrap";

const InventoryCard = (props) => {
  const { image, color, brand, name, size, stock, bgColor } = props;

  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="box mt-3">
          <Card className="p-0">
            <div className="card-image-wrapper">
              <Card.Img variant="top" src={image} />
            </div>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{brand}</Card.Text>
              <div className="colors d-flex justify-content-between">
                <img src={color} alt="" />
                <p>{size}</p>
              </div>
              <Button
                variant="success my-3"
                style={{ backgroundColor: bgColor }}
              >
                {stock}
              </Button>
              <span class="stock-button">
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </span>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default InventoryCard;
