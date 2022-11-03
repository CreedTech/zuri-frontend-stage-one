import React from 'react';

//mui components
import { Route, Routes } from 'react-router-dom';

import {Menu, Contact } from '.';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>

        {/* <Menu /> */}
    </div>
  );
}

export default App;
