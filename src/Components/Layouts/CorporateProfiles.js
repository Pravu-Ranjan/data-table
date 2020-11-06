import React, { useState } from "react";
import {
  Button,
  ButtonToggle,
  Card,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Container,
  Input,
  Nav,
  NavItem,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import currentTableData from "../Datasets/Datasets.json";
import { AiFillEye } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { MdArchive, MdUnarchive } from "react-icons/md";

import { HiOutlineSearch } from "react-icons/hi";

function CorporateProfiles() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => setIsOpen(!isOpen);

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <Container fluid className="mainBody">
        <h1 className="display-5 mainHeading">Corporate Profile</h1>
        <Row>
          <Col xl={12}>
            <Nav>
              <NavItem className="navItems">
                <ButtonToggle
                  color="success"
                  className={`${classnames({
                    active: activeTab === "1",
                  })} bodyTabs`}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Current
                </ButtonToggle>{" "}
              </NavItem>
              <NavItem>
                <ButtonToggle
                  color="success"
                  className={`${classnames({
                    active: activeTab === "2",
                  })} bodyTabs`}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Active
                </ButtonToggle>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Card body>
                      <Row>
                        <Col lg={7}></Col>
                        <Col lg={5} className="d-flex">
                          <Col md={6}>
                            <Button color="success"> Add New Corporate</Button>
                          </Col>
                          <Col md={6}>
                            <Input
                              type="text"
                              name="search"
                              placeholder={`Search by company name/id`}
                              className="has-search"
                            ></Input>
                          </Col>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} className="mt-3">
                          <Table responsive>
                            <thead className="tableHeading">
                              <tr>
                                <th>Company Name</th>
                                <th>Company ID</th>
                                <th>Web Domain</th>
                                <th>No of Engagement</th>
                                <th>Registered Date</th>
                                <th>Client SPOC Name</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentTableData
                                ? currentTableData.Company.map((value, key) => (
                                    <tr key={key}>
                                      <td>{value.companyName}</td>
                                      <td>{value.companyId}</td>
                                      <td>{value.webDomain}</td>
                                      <td>{value.engagement}</td>
                                      <td>{value.registeredDate}</td>
                                      <td>{value.clientName}</td>
                                      <td>{value.status}</td>
                                      <td>
                                        <Col className="justify-content-around d-flex">
                                          <AiFillEye />
                                          <HiPencil />
                                          <MdArchive />
                                        </Col>
                                      </td>
                                    </tr>
                                  ))
                                : ""}
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
              <Row>
                  <Col sm="12">
                    <Card body>
                      <Row>
                        <Col lg={7}></Col>
                        <Col lg={5} className="d-flex">
                          <Col md={6}>
                            <Input
                              type="text"
                              name="search"
                              placeholder={`Search by company name/id`}
                              className="has-search"
                            ></Input>
                          </Col>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} className="mt-3">
                          <Table responsive>
                            <thead className="tableHeading">
                              <tr>
                                <th>Company Name</th>
                                <th>Company ID</th>
                                <th>Web Domain</th>
                                <th>No of Engagement</th>
                                <th>Registered Date</th>
                                <th>Client SPOC Name</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentTableData
                                ? currentTableData.Company.map((value, key) => (
                                    <tr key={key}>
                                      <td onClick={toggleButton}>{value.companyName}
                                      <Collapse isOpen={isOpen}>
                                      <Table responsive>
                            <thead>
                            <tr>
                                <th>Engagement Name</th>
                                <th>Engagement ID</th>
                                <th>Service offering</th>
                                <th>Planned Start Date</th>
                                <th>Planed End Date</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                              </thead>
                              <tbody>
                              {currentTableData ? currentTableData.Engagement.map((value, key) => (
                                <tr key = {key}>
                                <td>{value.engagementName}</td>
                                      <td>{value.engagementId}</td>
                                      <td>{value.service}</td>
                                      <td>{value.startDate}</td>
                                      <td>{value.endDate}</td>
                                      <td>{value.status}</td>
                                </tr>

)) : ""}
                              </tbody>
                              </Table>
                                       
                                      </Collapse></td>
                                      <td>{value.companyId}</td>
                                      <td>{value.webDomain}</td>
                                      <td>{value.engagement}</td>
                                      <td>{value.registeredDate}</td>
                                      <td>{value.clientName}</td>
                                      <td>{value.status}</td>
                                      <td>
                                        <Col className="justify-content-around d-flex">
                                          <AiFillEye />
                                          <MdUnarchive />
                                        </Col>
                                      </td>
                                    </tr>
                                  ))
                                : ""}
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CorporateProfiles;
