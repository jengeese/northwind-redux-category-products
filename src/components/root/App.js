import React from "react";
import Navi from "../navi/navi";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App({match}) {
  return (
    <Container>
      <Navi></Navi>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Dashboard />} />
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct match={match}/>}/>
        {/* <Route path="/saveproduct/:productId" exact>{<AddOrUpdateProduct />}</Route> */}
        <Route path="/cart" element={<CartDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
