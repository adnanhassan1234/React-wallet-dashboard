import React from "react";
import "./dashboard.scss";
import circle from "../../Images/home/icon (4).png";
import bar from "../../Images/home/move.png";
import dot from "../../Images/home/more - Copy.png";
import Slider from "react-slick";
import { BarChart } from "Components/Chart/BarChart";
import Tab from "react-bootstrap/Tab";
import { Tabs } from "react-bootstrap";
import PageTitle from "Components/Pagetitle";

const Dashboard = () => {
  const expensesPercentage = [
    {
      image: circle,
      title: "76%",
      earning: "Organic",
    },
    {
      image: circle,
      title: "34%",
      earning: "Other Parts",
    },
  ];

  const eventData = [
    {
      name: "Sylvia",
      time: "Alllen Durss - 11:30 AM",
      earning: "+27.98",
    },
    {
      name: "Sylvia",
      time: "Alllen Durss - 11:30 AM",
      earning: "+31.06",
    },
    {
      name: "Sylvia",
      time: "Alllen Durss - 11:30 AM",
      earning: "+31.06",
    },
    {
      name: "Sylvia",
      time: "Alllen Durss - 11:30 AM",
      earning: "+31.06",
    },
    // {
    //   name: "Sylvia",
    //   time: "Alllen Durss - 11:30 AM",
    //   earning: "+27.98",
    // },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <PageTitle title="Dashboard" />
      <section className="dashboard">
        <h2 className="title">Dashboard</h2>
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="box p-4 mt-3">
              <div className="d-flex justify-content-between">
                <p>
                  <b>Store Stats</b>
                </p>
                <img src={bar} alt="" />
              </div>
              <div className="calender my-4">
                <div className="d-flex justify-content-between">
                  <h6 className="ml-3">Views PD</h6>
                  <input type="date" style={{ maxWidth: "175px" }} />
                </div>
              </div>
              <Slider {...settings}>
                {[1, 2, 3].map((_, index) => (
                  <div key={index}>
                    <BarChart />
                  </div>
                ))}
              </Slider>
              <Tabs defaultActiveKey="login" id="fill-tab-example" className="mb-3 mt-2 tabs_row" fill>
                <Tab eventKey="login" title="">
                  <div className="d-flex justify-content-between mt-5">
                    {expensesPercentage.map((content, ind) => (
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
                    {expensesPercentage.map((content, ind) => (
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
          </div>
          <div className="col-lg-4 col-12">
            <div className="box p-4 mt-3">
              <div className="d-flex justify-content-between">
                <p>
                  <b>Sales</b>
                </p>
                <img src={bar} alt="" />
              </div>
              {eventData.map((content, ind) => (
                <div className="calenders my-4" key={ind} style={{borderBottom:'2px solid #DDDDDD'}}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="ml-3 mb-0">{content.name}</h6>
                      <p>{content.time}</p>
                    </div>
                    <h5>{content.earning}</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <button type="button" className="btn btn-success">
                      PAyPAL
                    </button>
                    <div>
                      <img src={dot} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
