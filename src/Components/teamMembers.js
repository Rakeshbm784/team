import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function TeamMembers() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, [records]);

  const filterMembersByRole = (role) => {
    return records.filter((member) => member.role === role);
  };

  return (
    <div>
      <Container className="mt-4">
        <h1
          style={{
            fontSize: "30px",
            color: "gray",
          }}
        >
          Administrators
        </h1>
        <Row xs={1} md={4} className="g-4">
          {filterMembersByRole("admin").map((admin, idx) => (
            <Col key={idx}>
              <Card
                style={{ width: "18rem", borderRadius: 15 }}
                className="shadow mt-3"
              >
                <div className="d-flex">
                  <Card.Img
                    className="mt-2 ms-2 rounded-circle "
                    variant="top"
                    src={admin.img}
                    style={{ width: "50px", height: "50px" }}
                  />

                  <Card.Body>
                    <Card.Title style={{ fontSize: "1rem" }}>
                      {admin.first_name}
                    </Card.Title>
                    <Card.Text style={{ fontSize: ".60rem" }}>
                      {admin.email}
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="mt-5">
        <h1
          style={{
            fontSize: "30px",
            color: "gray",
          }}
        >
          Members
        </h1>
        <Row xs={1} md={4} className="g-4">
          {filterMembersByRole("member").map((member, idx) => (
            <Col key={idx}>
              <Card
                style={{ width: "18rem", borderRadius: 15 }}
                className="shadow mt-3"
              >
                <div className="d-flex">
                  <Card.Img
                    className="mt-2 ms-2 rounded-circle "
                    variant="top"
                    src={member.img}
                    style={{ width: "50px", height: "50px" }}
                  />

                  <Card.Body>
                    <Card.Title style={{ fontSize: "1rem" }}>
                      {member.first_name}
                    </Card.Title>
                    <Card.Text style={{ fontSize: ".60rem" }}>
                      {member.email}
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TeamMembers;
