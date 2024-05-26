import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuContextProvider from "./context/menuContextProvider";
import AddDish from "./components/addDish";
import Menu from "./components/menu";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routes start here  */}
    <BrowserRouter>
    {/* context provider starts here  */}
      <MenuContextProvider>
        <Routes>
          {/* homepage route starts here  */}
          <Route path="/" element={<Homepage />} />
          {/* homepage route ends here  */}
          {/* add dish route starts here  */}
          <Route path="/addDish" element={<AddDish />} />
          {/* add dish route ends here  */}
          {/* menu route starts here  */}
          <Route path="/menu" element={<Menu/>} />
          {/* menu route ends here  */}
        </Routes>
      </MenuContextProvider>
      {/* context provider ends here */}
    </BrowserRouter>
    {/* routes end here  */}
  </React.StrictMode>
);

