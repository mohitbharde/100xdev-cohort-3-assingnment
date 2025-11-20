/* eslint-disable react/prop-types */
//import React, { Component } from "react";

function AdopterData({ arr, setIsdata }) {
  console.log("arrr", arr);
  return (
    <div>
      <table>
        <tr>
          <th>Pet Name</th>
          <th>Pet Type</th>
          <th>Breed</th>
          <th>Adopter Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {arr.map((item, index) => (
          <tr key={index}>
            <td>{item.pet_name}</td>
            <td>{item.pet_type}</td>
            <td>{item.breed}</td>
            <td>{item.adopter_name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </table>

      <button onClick={() => setIsdata((prev) => !prev)}>back</button>
    </div>
  );
}

export default AdopterData;
