import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";


import { useSelector, useDispatch } from "react-redux";

export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = React.useState("");


  return (
    <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      {/* </SearchContext.Provider> */}
    </div>
  );
}

export default App;
