import React from "react";
import "./OutLook.css";
class OutLook extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Finding Falcone</h2>
        </div>
        <div className="details">
          <h3>Planets and Space Vehicles Details</h3>
          <table>
            <thead>
              <tr>
                <th className="row-head-1">Planet Name</th>
                <th className="row-head-2">Distance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Donlon</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Enchai</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Jebing</td>
                <td>300</td>
              </tr>
              <tr>
                <td>Sapir</td>
                <td>400</td>
              </tr>
              <tr>
                <td>Lerbin</td>
                <td>500</td>
              </tr>
              <tr>
                <td>Pingasor</td>
                <td>600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default OutLook;
