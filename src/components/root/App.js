import React from 'react';
import Navi from "../navi/navi"
import {Container} from "reactstrap"
import Dashboard from './Dashboard';
import {Route, Routes} from "react-router-dom";
import CartDetail from '../cart/CartDetail';

function App() {
  return (
    <Container>
<Navi></Navi>
<Routes>
  <Route path="/" element={<Dashboard/>} />
  <Route path="/product" element={<Dashboard/>}/>
  <Route path="/cart" element={<CartDetail/>}/>
</Routes>
    </Container>
  );
}

export default App;
