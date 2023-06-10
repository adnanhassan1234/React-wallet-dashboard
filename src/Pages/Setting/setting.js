import PageTitle from "Components/Pagetitle";
import React from "react";
import "./setting.scss";
import setting from "../../Images/home/icon (3).png";
import arrow from "../../Images/home/arrow (2).png";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const settingData = [
  {
    title: "General",
    key:"first",
  },
  {
    title: "Customizations",
    key:"second",
  },
  {
    title: "Manage Contacts ",
    key:"third",
  },
  {
    title: "Private Settings",
    key:"fourth",
  },
  {
    title: "Linked Accounts",
    key:"five",
  },
  {
    title: "Updates",
    key:"six",
  },
];


const Setting = () => {
  return (
    <>
      <PageTitle title={"Settings"} />
      <section className="settings">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="row" id="left-tabs-example" defaultActiveKey="first">
          <div className="col-md-4 col-12">
            <div className="box mt-3 p-3">
              <h4>Settings</h4>
              <input
                type="search"
                className="form-control"
                placeholder="Search for something"
              />
              <Nav variant="pills" className="flex-column">
                {settingData?.map((content, ind) => {
                  return (
                    <>
                      <Nav.Item key={ind}>
                        <Nav.Link eventKey={content.key}>
                          <div className="d-flex justify-content-between">
                            <div className=" heading d-flex mt-4">
                              <img src={setting} alt="" />
                              <div className="mx-1">
                                <h5>{content.title}</h5>
                                <p> &nbsp; sub-title </p>
                              </div>
                            </div>
                            <img className="arrows" src={arrow} alt="" />
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </>
                  );
                })}
              </Nav>
            </div>
          </div>
          <div className="col-md-4 col-12">
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
          </div>
        </div>
        </Tab.Container>
      </section>
    </>
  );
};

export default Setting;
