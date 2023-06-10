import React from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "Components/Pagetitle";
import "./inventory.scss";
import filter from "../../Images/home/arrow (1).png";
import InventoryCard from "./InventoryCard";
import image1 from "../../Images/wallet/2.webp";
import image3 from "../../Images/wallet/3.webp";
import image9 from "../../Images/wallet/9.jpeg";
import image4 from "../../Images/wallet/1.jpeg";
import image5 from "../../Images/wallet/5.jpeg";
import image6 from "../../Images/wallet/7.webp";
import image7 from "../../Images/wallet/8.webp";
import colors from "../../Images/wallet/colors.png";

const inventoryContent = [
  {
    image: image1,
    color: colors,
    brand: "Men, Pants",
    name: "Denim Jeans",
    size: "44- 52",
    stock: "in stock",
  },
  {
    image: image3,
    color: colors,
    brand: "Men, Shoes",
    name: "Chelsea Boots",
    size: "36 - 48",
    stock: "in stock",
  },
  {
    image: image9,
    color: colors,
    brand: "Men, Tops",
    name: "Colorful Shirt",
    size: "M, L, XL",
    stock: "in stock",
  },
  {
    image: image4,
    color: colors,
    brand: "Texture Shirt",
    name: "Men, Shirts",
    size: "M, L, XL, XXL",
    stock: "our of stock",
    bgColor: "#D8AF58",
  },
  {
    image: image5,
    color: colors,
    brand: "Men, Pants",
    name: "Denim Jeans",
    size: "44- 52",
    stock: "in stock",
  },
  {
    image: image6,
    color: colors,
    brand: "Men, Shoes",
    name: "Chelsea Boots",
    size: "36 - 48",
    stock: "in stock",
    bgColor: "#D8AF58", 
  },
  {
    image: image7,
    color: colors,
    brand: "Men, Tops",
    name: "Colorful Shirt",
    size: "M, L, XL",
    stock: "in stock",
  },
  {
    image: image4,
    color: colors,
    brand: "Texture Shirt",
    name: "Men, Shirts",
    size: "M, L, XL, XXL",
    stock: "our of stock",
    bgColor: "#D8AF58",
  },
];

const Inventory = () => {
  return (
    <>
      <PageTitle title={"Inventory"} />
      <section className="inventory">
        <div className="d-flex justify-content-between">
          <h2>My Products</h2>
          <div className="filter">
            <h4 className="mb-0">
              Filter by <img src={filter} alt="" />
            </h4>
            <span> &nbsp; Popular</span>
          </div>
        </div>
        <div className="row">
          {inventoryContent?.map((content, ind) => {
            return <InventoryCard key={ind} {...content} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Inventory;
