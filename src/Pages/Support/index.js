import PageTitle from "Components/Pagetitle";
import React from "react";
import { Card, Form, InputGroup, Row, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import EndUserSupport from "./EndUser/index.js";
import Tickets from "./Ticket.js";
import './support.scss';

const Support = () => {
  return (
    <>
      <PageTitle title={'Support'} />
      <section>
        <Card>
        <div className="search-profile d-none">
        <h3>Messages</h3>
        </div>
        <Tickets />
        </Card>
      </section>
    </>
  );
};
export default Support;
