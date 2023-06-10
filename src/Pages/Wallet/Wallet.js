import React from "react";
import PageTitle from "Components/Pagetitle";
import Slider from "react-slick";
import { BarChart } from "Components/Chart/BarChart";
import Tab from "react-bootstrap/Tab";
import { Tabs } from "react-bootstrap";
import circle from "../../Images/home/icon (4).png";
import bar from "../../Images/home/move.png";
import dot from "../../Images/home/more - Copy.png";
import color from "../../Images/wallet/color.png";
import icon1 from "../../Images/wallet/icon.png";
import icon2 from "../../Images/wallet/icon (1).png";
import "./wallet.scss";
import WalletCard from "./WalletCard";
import Barcharts from "./Barcharts";
import AreaCharts from "Components/Chart/AreaCharts";

const eventData = [
  {
    image1: icon1,
    image: dot,
    name: "Mcdonald’s",
    time: "Alllen Durss - 11:30 AM",
    earning: "+27.98",
  },
  {
    image1: icon2,
    image: dot,
    name: "Server Fees",
    time: "Alllen Durss - 11:30 AM",
    earning: "-34.58",
  },
];

const Wallet = () => {
  const expensesPercentage1 = [
    {
      image: circle,
      title: "67%",
      earning: "Income",
    },
    {
      image: circle,
      title: "33%",
      earning: "Expenses",
    },
  ];
  const expensesPercentage = [
    {
      image: color,
      title: "Income",
      earning: "+11%",
    },
    {
      image: color,
      title: "Expenses",
      earning: "-23%",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <>
      <PageTitle title={"Wallet"} />
      <section className="wallet">
        <h2 className="title">My Wallet</h2>
        <div className="row">
          {/* wallet slider */}
          <div className="col-lg-6 col-12">
            <div className="box p-4 mt-4">
              <div className="d-flex justify-content-between">
                <p>
                  <b>My Cards</b>
                </p>
                <img src={bar} alt="" />
              </div>
              <Slider {...settings}>
                <div>
                  <WalletCard />
                </div>
                <div>
                  <WalletCard />
                </div>
                <div>
                  <WalletCard />
                </div>
              </Slider>
              <div className="calender mt-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="ml-3 mb-0">$78.192</h6>
                    <p style={{ fontSize: "12px" }}>+12% last Month</p>
                  </div>
                  <input type="date" style={{ maxWidth: "175px" }} />
                </div>
              </div>
              <Barcharts />
              <Tabs
                defaultActiveKey="login"
                id="fill-tab-example"
                className="mb-3 mt-3 tabs_row"
                fill
              >
                <Tab eventKey="login" title="">
                  <div className="d-flex justify-content-between mt-5">
                    {expensesPercentage1?.map((content, ind) => (
                      <div className="circle d-flex" key={ind}>
                        <img src={content.image} alt="" />
                        <div className="content mx-2">
                          <h5 className="mb-0">{content.title}</h5>
                          <p>{content.earning}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="sign up" title="">
                  <div className="d-flex justify-content-between mt-5">
                    {expensesPercentage?.map((content, ind) => (
                      <div className="circle d-flex" key={ind}>
                        <img src={content.image} alt="" />
                        <div className="content mx-2">
                          <p>{content.earning}</p>
                          <h5 className="mb-0">{content.title}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          {/*  Area chart */}
          <div className="col-lg-6 col-12">
            <div className="box p-4 mt-3">
              <div className="d-flex justify-content-between">
                <p>
                  <b>Balance</b>
                </p>
                <img src={bar} alt="" />
              </div>
              <div className="calender mt-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="ml-3 mb-0">$372,941</h6>
                    <p style={{ fontSize: "12px" }}>+7% last week</p>
                  </div>
                </div>
              </div>
              <AreaCharts />
              <Tabs
                defaultActiveKey="login"
                id="fill-tab-example"
                className="mb-3 mt-2 tabs_row"
                fill
              >
                <Tab eventKey="login" title="">
                  <div className="d-flex justify-content-between mt-5">
                    {expensesPercentage?.map((content, ind) => (
                      <div className="circle d-flex" key={ind}>
                        <img src={content.image} alt="" />
                        <div className="content mx-2">
                          <h5 className="mb-0">{content.title}</h5>
                          <p>{content.earning}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="sign up" title="">
                  <div className="d-flex justify-content-between mt-5">
                    {expensesPercentage?.map((content, ind) => (
                      <div className="circle d-flex" key={ind}>
                        <img src={content.image} alt="" />
                        <div className="content mx-2">
                          <h5 className="mb-0">{content.title}</h5>
                          <p>{content.earning}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab>
              </Tabs>
            </div>
            <div className="box p-4 mt-3">
              <div className="d-flex justify-content-between">
                <p>
                  <b>Sales</b>
                </p>
                <img src={bar} alt="" />
              </div>
              {eventData?.map((content, ind) => {
                return (
                  <>
                    <div className="calenders my-4" key={ind}>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <img src={content.image1} alt="" />
                          <div className="mx-2">
                            <h6 className="ml-3  mb-0"> {content.name}</h6>
                            <p>{content.time}</p>
                          </div>
                        </div>
                        <div className="content_btn">
                          <h5
                            style={{
                              color:
                                ind === 1
                                  ? "red"
                                  : content.image1
                                  ? "#47B285"
                                  : "#EF436C",
                            }}
                          >
                            {content.earning}
                          </h5>
                          &nbsp;&nbsp; <img src={content.image} alt="" />
                        </div>
                      </div>
                    </div>{" "}
                    <hr style={{ maxWidth: "430px", margin: "auto" }} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wallet;
