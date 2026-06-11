import { Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import React from 'react'

function AppRoutes() {
  return (
    <Route>
<Route path="/" element={<Home/>}/>
<Route path="/search" element={<Search/>}/>
  </Route>
  )
}

export default AppRoutes;
