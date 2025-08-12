import { useState } from "react"
import Fetchapi from "./components/Fecthapi"
import Marketplace from "./Marketplace"
import Cards from "./components/reuseable/Cards"
import FormHandling from "./components/FormHandling"
import NewApi from "./NewApi"
import Map from "./Map"
import ConditionalRendering from "./ConditionalRendering"
import Counter from "./Counter"
import Form from "./Form"
import MultipleInput from "./MultipleInput"
import TodoApp from "./TodoApp"
import RevivedApi from "./RevivedApi"
import FormhandlingRevised from "../FormhandlingRevised"


function App() {

  return (
    <>
     <h1 className="bg-red-600 text-center">working</h1>
     {/* <Fetchapi/>  */}
     {/* <Marketplace/>
     <Cards/>
     <FormHandling/>
     <NewApi/>
     <Map/>
     <ConditionalRendering/>
     <Counter/>
    <Form/>
    <MultipleInput/>
    <TodoApp/> */}
    <RevivedApi/>
   <FormhandlingRevised/>

    
    </>
  )
}

export default App
