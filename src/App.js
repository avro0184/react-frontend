import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About_Yourself";
import {Routes ,Route } from "react-router-dom"
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import AddBook from "./Component/Add_Book";
import EditBook from "./Component/Edit_Book"
import ShowBook from "./Component/Show_Book"
import Login from "./Component/Login"
import SignUp from "./Component/Signup"


function App()  {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/*" element={<Home/>}/>  
      <Route path="/contact/*" element={<Contact/>}/>  
      <Route path="/login/*" element={<Login/>}/>  
      <Route path="/signup/*" element={<SignUp/>}/>  
      <Route path="/about/*" element={<About/>}/>  
      <Route path="/add-book/*" element={<AddBook/>}/>  
      <Route path="/edit-book/:id" element={<EditBook/>}/>  
      <Route path="/show-book/:id" element={<ShowBook/>}/>  
    </Routes>
    <Footer/> 
    </>
  );
}

export default App;
