import React from "react";
import { tableAttribute } from "../controller/tableAttribute";

const AllDocument = () => {
  return (
    <div>
      <div className="flex_box justify-between">
        <p>
          show{" "}
          <span>
            {" "}
            <input type="number" />
          </span>{" "}
          entires
        </p>
        <p>
          search{" "}
          <span>
            {" "}
            <input type="text" placeholder="search..." />
          </span>
        </p>
      </div>
      <table>
        <thead>
          <tr>
            {tableAttribute.map((attribute, key) => (
              <td key={key}>{attribute}</td>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default AllDocument;
