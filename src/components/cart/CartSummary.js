import React, { Component } from "react";
import { NavDropdown, Nav, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import alertify from "alertifyjs"; 

class CartSummary extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " removed from cart");
  }

  renderEmpty() {
    return <Nav.Link>Empty Cart</Nav.Link>;
  }
  renderSummary() {
    return (
      <NavDropdown title="Your cart" id="basic-nav-dropdown">
        {this.props.cart.map((cartItem) => (
          <NavDropdown.Item key={cartItem.product.id}>
            {cartItem.product.productName}{" "}
            <Badge bg="success">{cartItem.quantity}</Badge>{" "}
            <Badge
              bg="danger"
              onClick={() =>
                this.removeFromCart(cartItem.product)
              }
            >
              X
            </Badge>
          </NavDropdown.Item>
        ))}
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <Link to={"/"}>Main page</Link>
        <NavDropdown.Divider />
        <Link to={"/cart"}>Go to cart</Link>
      </NavDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}{" "}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
