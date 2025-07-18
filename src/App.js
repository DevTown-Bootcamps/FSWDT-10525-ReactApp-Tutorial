
import './App.css';
import FunctionalComp from "./components/functionalComponent.jsx";
import ClassComponent from "./components/classComponents.js";
import Profile from './components/prop.js';
import DefaultProfile from './components/defaultprop.js';
import Counter from './components/state.js';
import FormInput from './components/eventHandler.js';
import LoginControl from './components/CondingRending.js';
import NameList from './components/list.js';
function App() {
  return (
    <div>
      <FunctionalComp/>
      <ClassComponent/>
      <Profile name="Anshul" age={24} country="India"/>
      <Profile name="Riya" age={28} country="India"/>
      <DefaultProfile name="Riya" age={28} country="India"/>
      <Counter/>
      <FormInput/>
      <LoginControl/>
      <NameList/>
    </div>
  );
}

export default App;
