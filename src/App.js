import './App.css';
import { useState } from 'react';
import { Route, NavLink } from "react-router-dom";
import Heading from './components/Heading';
import Input from './components/Input';
import Output from './components/Output';
import Button from './components/Button';
import Footer from './components/Footer';


// Thanx to David Faden for this idea and the code here.
// Taken from http://www.revfad.com/flip.html

const flipTable = {
  a : '\u0250',
  b : 'q',
  c : '\u0254',
  d : 'p',
  e : '\u01DD',
  f : '\u025F',
  g : '\u0183',
  h : '\u0265',
  i : '\u0131',
  j : '\u027E',
  k : '\u029E',
  //l : '\u0283',
  m : '\u026F',
  n : 'u',
  r : '\u0279',
  t : '\u0287',
  v : '\u028C',
  w : '\u028D',
  y : '\u028E',
  '.' : '\u02D9',
  '[' : ']',
  '(' : ')',
  '{' : '}',
  '?' : '\u00BF',
  '!' : '\u00A1',
  "\'" : ',',
  '<' : '>',
  '_' : '\u203E',
  '\u203F' : '\u2040',
  '\u2045' : '\u2046',
  '\u2234' : '\u2235',
  '\r' : '\n'
}

for (let i in flipTable) {
  flipTable[flipTable[i]] = i
}

function App() {

  const [text, setText] = useState("hello")

  function updateText(t) {
    setText(flipString(t))
  }

  function flipString(aString) {
    
    let reversedArray = aString.split('').reverse()
    
    let result = reversedArray.map(char =>
      flipTable[char] ? flipTable[char] : char
    )

    return result.join('')

  }

  return (
    <div>
      <Heading />
      <nav className="navLink">
        <NavLink to="/">main</NavLink>
        <NavLink to="/footer">footer</NavLink>
      </nav>
      <Route path="/login">
			{user 
				? <Redirect to="/" />
			  : <LoginPopup />
			}
		</Route>
      <Route path="/" exact>
        <Input updateFunction={updateText} />
        <Output text={text} />
        <Button text={text}/>
      </Route>

      <Route path="/footer">
        <Footer />
      </Route>
    </div>
  );
};

export default App;