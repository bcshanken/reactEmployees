import React from "react";

function row(props) {
  return (
    <tr>
      <td><img src={props.picture} alt={props.firstname}></img></td>
      <td>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  );
}

export default row;
