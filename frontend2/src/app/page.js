"use client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// INTERNAL IMPORTS
//import "@/styles/globals.css";
import { TrackingProvider } from "../Context/TrackingContext";
import { NavBar, Footer, } from "../Components";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
 

console.log( NavBar, Footer, TrackingProvider);

export default function App({Component, pageProps}) {
  return (
    <>
    <TrackingProvider>
      <BrowserRouter>
        {/* Conditionally render NavBar and Footer based on the current route */}
        <Routes>
          <Route path="/" element={<Login /> }></Route>
          <Route path='/signup' element={<Signup />}></Route>
           <Route path='/Home' element={
            <>
            <NavBar />
              <Home />
            
            </>
           } />
            
            
            
                 
        </Routes>
      </BrowserRouter>
    </TrackingProvider>
    <Footer />
    </>
  );
}

//export default App;
