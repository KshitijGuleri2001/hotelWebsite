import React,{useState,useEffect} from 'react'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Home from '../Components/Home'
import Activites from '../Components/Activites'
import Gallary from '../Components/Gallary'
import Form from '../Components/Form'
import Summer from '../Components/Summer'
import Skeleton from '../Components/Skeleton'
import Footer from '../Components/Footer'
import Info from '../Components/Info'
import Login from "../Components/Login"
import Products from '../Components/Products'
const Main = () => {
 const [loading,setloading] = useState(true);
 useEffect(()=>{
  setTimeout(() => {
    setloading(false)
  }, 2000);
 },[])
  return (
    <>
    <Nav/>
    <Header/>
    <Home/>
    <Activites/>
    <Form/>
    <Gallary/>
    <Products/>
    <div>
{loading? <Skeleton/>:<Summer/> }


    </div>
    <Footer/>
   
    </>
  )
}

export default Main