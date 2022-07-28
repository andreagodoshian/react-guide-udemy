import React from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

/*
Notes:

1.) <main/> is default HTML5
*/

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;