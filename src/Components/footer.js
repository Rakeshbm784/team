// FixedIcon.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const FixedIcon = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          paddingRight: "30px",
        }}
      >
        <FontAwesomeIcon
          icon={faCirclePlus}
          style={{ color: "#74C0FC" }}
          size="2xl"
        />
      </div>
    </>
  );
};

export default FixedIcon;
