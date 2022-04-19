import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";

class CartSummary extends Component {
  render() {
    return (
      <div>
        {" "}
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        cart:state.cartReducer
    }
}
export default connect(mapStateToProps)(CartSummary);
