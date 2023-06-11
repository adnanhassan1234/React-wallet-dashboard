import React from "react";
import "./order.scss";
import filter from "../../Images/home/arrow (1).png";
import PageTitle from "Components/Pagetitle";
import OrderTable from "./OrderTable";

const tableContent = [
  {
    name: "Alexa Lacruz",
    email: "info@alexlaruz.me",
    des1: "932 Saint Marys Avenue",
    des2: "Syracuse, NY 13202",
    date: "24/5",
    price: "$875",
    account: "Paypal",
  },
  {
    name: "Alexa Lacruz",
    email: "info@alexlaruz.me",
    des1: "932 Saint Marys Avenue",
    des2: "Syracuse, NY 13202",
    date: "24/5",
    price: "$875",
    account: "Paypal",
  },
  {
    name: "Alexa Lacruz",
    email: "info@alexlaruz.me",
    des1: "932 Saint Marys Avenue",
    des2: "Syracuse, NY 13202",
    date: "24/5",
    price: "$875",
    account: "Paypal",
  },
  {
    name: "Alexa Lacruz",
    email: "info@alexlaruz.me",
    des1: "932 Saint Marys Avenue",
    des2: "Syracuse, NY 13202",
    date: "24/5",
    price: "$875",
    account: "Paypal",
  },
];

const Order = () => {
  return (
    <>
      <PageTitle title="Order" />
      <section className="order">
        <div className="complete d-flex justify-content-between">
          <h2>
            Orders <span className="complete">Completed</span>
          </h2>
          <div className="filter">
            <h4 className="mb-0">
              Filter by &nbsp; <img src={filter} alt="" />
            </h4>
            <span>&nbsp; Popular</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="my-4">
                  <tr>
                    <th className="my-2" style={{ display: "table-caption" }}>Orders</th>
                    <th className="p-3">Ship to</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Price</th>
                  </tr>
                </thead>
                {tableContent?.map((content, ind) => {
                  return <OrderTable key={ind} index={ind} {...content} />;
                })}
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;