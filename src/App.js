import freeCodeCampLogo from './images/fcc_primary_large.jpg'
import './App.css';
import Button from './components/Button.jsx'
import Screen from './components/Screen.jsx';
import ClearButton from './components/ClearButton.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const handleInputChange = value => {
    setInput(input + value);

  };

  const result = () => {
    if(input) {
    setInput(evaluate(input));
  } else {
    alert('Would you mind please inserting an operation? So that I could answer with the result')
  }
  };


  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt ='freeCodeCampLogo'
        />
      </div>
      <div className='calculator-container'>

          <Screen input={input} />
        
        <div className='row'>
          <Button handleClick = {handleInputChange} >1</Button>
          <Button handleClick = {handleInputChange} >2</Button>
          <Button handleClick = {handleInputChange} >3</Button>
          <Button handleClick = {handleInputChange} >+</Button>
        </div>

        <div className='row'>
          <Button handleClick = {handleInputChange} >4</Button>
          <Button handleClick = {handleInputChange} >5</Button>
          <Button handleClick = {handleInputChange} >6</Button>
          <Button handleClick = {handleInputChange} >-</Button>
        </div>

        <div className='row'>
          <Button handleClick = {handleInputChange} >7</Button>
          <Button handleClick = {handleInputChange} >8</Button>
          <Button handleClick = {handleInputChange} >9</Button>
          <Button handleClick = {handleInputChange} >*</Button>
        </div>

        <div className='row'>
          <Button handleClick = {result} > = </Button>
          <Button handleClick = {handleInputChange} >0</Button>
          <Button handleClick = {handleInputChange} >.</Button>
          <Button handleClick = {handleInputChange} >/</Button>
        </div>

        <div className='row'>
          <ClearButton handleClear = {() => setInput('')} >
            Clear
          </ClearButton>
        </div>

      </div>
    </div>
  );
}

export default App;
