import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

const MyNavbar = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="info"
      data-bs-theme="light"
    >
      <Navbar.Brand
        className="ms-5 "
        style={{ fontSize: "30px", color: "white" }}
      >
        Team
      </Navbar.Brand>

      <Form inline className=" ms-auto me-5">
        <Form.Control
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search"
          style={{ borderRadius: 17 }}
        />
      </Form>
    </Navbar>
  );
};

export default MyNavbar;
