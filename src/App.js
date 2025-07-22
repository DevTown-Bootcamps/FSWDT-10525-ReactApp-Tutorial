
import './App.css';
import {BrowserRouter,Routes,Route,Link,useParams,useNavigation,Navigate} from "react-router-dom"
import FunctionalComp from "./components/functionalComponent.jsx";
import ClassComponent from "./components/classComponents.js";
import Profile from './components/prop.js';
import DefaultProfile from './components/defaultprop.js';
import FormInput from './components/eventHandler.js';
import LoginControl from './components/CondingRending.js';
import ToDoList from './components/list.js';
import MultipInput from './components/form.js';
function App() {
  return (
    <BrowserRouter>
      <nav>
         <Link to="/test">Home</Link> || <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FormInput/>}/>
        <Route path="/about" element={<ToDoList/>}/>
        <Route path="/test" element={<MultipInput/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
