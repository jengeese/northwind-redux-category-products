import React from 'react';
import Navi from "../navi/navi"
import {Container} from "reactstrap"
import Dashboard from './Dashboard';

function App() {
  return (
    <Container>
<Navi></Navi>
<Dashboard></Dashboard>
    </Container>
  );
}

export default App;
