import React from "react";
import "./order.scss";

const OrderTable = (props) => {
  const {index, name, email, des1, des2, date, price, account } = props;
  const rowClassName = index % 2 === 1 ? "bg-white" : "bg-fafafa";
  return (
    <>
      <tbody>
        <tr className={rowClassName}>
          <td className="bordered-cell">
            <div className="name">
              <h4>{name}</h4>
              <p>{email}</p>
              <button className="btn btn-success my-3">delivered</button>
            </div>
          </td>
          <td className="bordered-cell">
            <div className="content">
              <p>{des1}</p>
              <p>{des2}</p>
            </div>
          </td>
          <td className="bordered-cell">
            <div className="date">
              <p>{date}</p>
            </div>
          </td>
          <td className="bordered-cell">
            <div className="price">
              <h5>{price}</h5>
              <p>{account}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default OrderTable;
