import React from "react";

const Table = ({ formatedFruit, formatedVegetable }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colSpan={2}>Fruits</th>
        </tr>
        {formatedFruit}
        <tr>
          <th colSpan={2}>Vegetables</th>
        </tr>
        {formatedVegetable}
      </tbody>
    </table>
  );
};

export default Table;
