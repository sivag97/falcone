import React from "react";
import "./Select.css";
import api from "../apis/api";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    };
  }
  handleDisplay = async () => {
    const response = await api.get("/planets");
    this.setState({ planets: response.data });
    console.log(this.state.planets);
  };
  renderList() {
    const { planets } = this.state;
    if (planets.length === 0) {
      return <option>select</option>;
    }
    return planets.map(item => {
      return <option key={item.name}>{item === item.name}</option>;
    });
  }

  render() {
    return (
      <div className="container">
        <div className="auto-select">
          <select onClick={this.handleDisplay}>{this.renderList()}</select>
        </div>
      </div>
    );
  }
}

export default Select;
