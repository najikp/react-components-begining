import React from "react";
import {useState,createContext} from 'react'
import Buttons from "./components/Buttons";
import Display from "./components/Display";
export const context=createContext()

function App() {
  const [count,setCount]=useState(0);
  return (
    <>
    <context.Provider value={{count,setCount}}>
      <Display/>
      <Buttons/>
    </context.Provider>
    </>
  );
}


export default App;
