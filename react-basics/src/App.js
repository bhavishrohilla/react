import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <FunctionClick />
      {/* <Message /> */}

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

export default App;
