import React from "react";
import "./App.css";
import Menubar from "../src/Component/Menubar/Menubar";
import Info from "./Component/Page/Info";
import History from "./Component/Page/History";
import { useState } from "react";

const ACTIVEPAGE = {
  me: 0,
  pj_history: 2,
};

const App = () => {
  const [activePage, setActivePage] = useState(ACTIVEPAGE.me);
  return (
    <div className="App">
      <div className="container">
        <Menubar
          activePage={activePage}
          handleClick={(id) => {
            setActivePage(id);
          }}
        />

        {activePage === ACTIVEPAGE.me ? <Info /> : null}
        {activePage === ACTIVEPAGE.pj_history ? <History /> : null}
      </div>
    </div>
  );
};

export default App;
