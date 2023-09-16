import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Footer from "./components/Footer"
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Form/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
