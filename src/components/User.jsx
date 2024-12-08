import React from "react";

const User = (props) => {
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "50px",
        marginLeft: "100px",
        marginRight: "100px",
      }}>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
    </div>
  );
};

export default User;
