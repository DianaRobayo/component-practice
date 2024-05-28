import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import SecondComponent from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { Child } from './components/Child';
import { useState } from 'react';
import { FourthComponent } from './components/FourthComponent';

function App() {
  const [name, setName] = useState('Lina');
  const [message, setMessage] = useState('Lina');

  const addMessage = (messages) => {
    console.log('mes', messages)
    setMessage(messages);
  }



  const medicalRecord = {
    height: "160",
    bloodGroup: "A+",
    allergies: "No"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <div>
          <FourthComponent />
          <br /><hr />
        </div>

        <div>
          <Child name={name} setName={setName} message={addMessage} />
          <h1>{message}</h1>
          <br /><hr />
        </div>

        <div>
          <ThirdComponent
            name="Diana"
            lastname="Robayo"
            obj={medicalRecord}
          />
          <br /><hr />
        </div>

        <SecondComponent />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
