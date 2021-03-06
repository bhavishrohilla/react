import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Form /> */}
        <LifeCycleA />
        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */}

        {/* <Inline /> */}
        {/* <Stylesheet primary = {true}/> */}
        
        {/* <NameList /> */}
        
        {/* <UserGreeting /> */}
        
        {/* <ParentComponent /> */}
        
        {/* <EventBind /> */}
        
        {/* <Counter /> */}
        
        {/* <Message /> */}
        
        {/* <FunctionClick />
        <ClassClick /> */}
        
        {/* <Welcome name = "John"/>
        <Hello name="Selena"/> */}
        {/* <Greet name="Diana" heroName="wonder woman">
          <p>This is childeren props</p>
        </Greet>
        <Greet name="Mark" heroName="Iron man">
          <button>Action</button>
        </Greet>
        <Greet name = "John" heroName="superman"/> */}
        
        {/* <Welcome name="Bhavish" heroName="spiderman"></Welcome>
        <Welcome name="Ross" heroName="Iron man"></Welcome>
        <Welcome name = "Chandler" heroName="superman"></Welcome> */}
      </div>
    );
  }
}

export default App;
