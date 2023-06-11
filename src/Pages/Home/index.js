import React from "react";
import { Col, Row, Form, InputGroup, Card, Tabs, Tab } from "react-bootstrap";
import PageTitle from "Components/Pagetitle";
import "./home.scss";
import home from "../../Images/home/icon.png";
import bar from "../../Images/home/move.png";
import arrow from "../../Images/home/go to.png";
import arrows from "../../Images/home/arrow.png";
import check from "../../Images/home/check.png";
import dot from "../../Images/home/more.png";
import dolor from "../../Images/home/icon (1).png";
import switchs from "../../Images/home/switcher.png";
import more from "../../Images/home/more (1).png";
import pie from "../../Images/home/pie.png";
import store from "../../Images/home/store (1).png";
import rightArrow from "../../Images/home/right.png";
import icon5 from "../../Images/home/icon (5).png";
import circle from "../../Images/home/icon (4).png";
import plus from "../../Images/home/icon (2).png";
import Settings from "../../Images/home/icon (3).png";
import downArrow from "../../Images/home/arrow (1).png";
import LineCharts from "Components/Chart/LineCharts";

const data = [
  {
    image: plus,
    title: "Add a title",
  },
  {
    image: Settings,
    title: "Settings",
  },
];

const expensesPercentage = [
  {
    image: circle,
    title: "+13%",
    earning: "Earnings",
  },
  {
    image: circle,
    title: "-28%",
    earning: "Expenses",
  },
];

const Home = () => {
  return (
    <>
      <PageTitle title={"Home"} />
      <section className="home">
        {/* <div className="container"> */}
        <h2 className="title">What’s new</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="box  p-4 mt-3">
              <div className="d-flex justify-content-between">
                <img src={home} alt="" />
                <img src={bar} alt="" />
              </div>
              <p className="des mb-0">
                Meet Mr. Raul Atwood in the office after{" "}
              </p>
              <h4 className="mt-2">1 Hour</h4>
              <div className="canlender_date d-flex justify-content-between">
                <div>
                  <h3 style={{ marginBottom: "-12px" }}>16 Apr</h3>{" "}
                  <span className="mb-3">Monday</span>
                </div>

                <div className="check">
                  <img src={arrow} alt="" />
                  <img src={check} alt="" />
                  <img src={dot} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            <div className="dollor_content  p-4 mt-3">
              <div className="d-flex justify-content-between">
                <img src={dolor} alt="" />
                <img src={bar} alt="" />
              </div>
              <div className="dollor">
                <div className="dolor_price">
                  <h4 className="mb-0">$12,487</h4>
                  <p>+864 Comp.</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <h3 style={{ fontSize: "14px" }}>
                    <img src={arrows} alt="" /> +24%
                  </h3>
                  <div className="check">
                    <img src={dot} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* dark_mode */}
            <div className="dark_mode  p-4 mt-3">
              <div className="enable">
                <h4 className="mb-0">Dark Mode</h4>
                <p>Enabled</p>
              </div>
              <div className="dollor">
                <div className="d-flex justify-content-between">
                  <div className="check">
                    <img src={dot} alt="" />
                  </div>
                  <h3 style={{ fontSize: "14px" }}>
                    <img src={switchs} alt="" />
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            <div className="desktop_user  p-4 mt-3">
              <div className="desktop">
                <div className="desktop_percentage">
                  <img src={bar} className="bar" alt="" />
                  <img src={pie} alt="" />
                </div>
                <div className="canlender_date d-flex justify-content-between">
                  <div className="users">
                    <h3 style={{ marginBottom: "-12px" }}>35%</h3>{" "}
                    <span className="mb-3">Desktop users</span>
                  </div>

                  <div className="check mt-3">
                    <img src={more} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* sale user */}
            <div className="sale_content  p-4 mt-3">
              <div className="d-flex justify-content-between">
                <img src={store} alt="" />
                <img src={bar} alt="" />
              </div>
              <div className="dollor">
                <div className="dolor_price">
                  <h4 className="mb-0"><b>New Sale!</b></h4>
                </div>
                <hr />
                <div className="canlender_date d-flex justify-content-between">
                  <div className="users">
                    <h3 style={{ marginBottom: "-23px" }}>Alexandria</h3>
                    <span className="mb-3">+24.68$</span>
                  </div>

                  <div className="check mt-3">
                    <img src={rightArrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* line graph */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="line_chart  p-4 mt-3">
              <div className="d-flex justify-content-between">
                <img src={icon5} alt="" />
                <img src={bar} alt="" />
              </div>
              <div className="calender mt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="ml-3">Funds Mngr. </h6>
                  <h5>
                    26 Oct &nbsp; <img src={downArrow} className="mt-2" />
                  </h5>
                </div>
              </div>
              {/* line chart */}
              <LineCharts />
              <div className="d-flex justify-content-between mt-2">
                {expensesPercentage?.map((content, ind) => {
                  return (
                    <>
                      <div className="circle d-flex" key={ind}>
                        <img src={content.image} alt="" />
                        <div className="content mx-2">
                          <h5 className="mb-0">{content.title}</h5>
                          <p>{content.earning}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="row mt-2">
              {data?.map((content, ind) => {
                return (
                  <>
                    <div className="col-md-6 col-12">
                      <div className="setting p-4 mt-2" key={ind}>
                        <img src={content.image} alt="" />
                        <h5 className="mt-2">{content.title}</h5>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Home;
