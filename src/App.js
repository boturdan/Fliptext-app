import './App.css';
import { useState } from 'react';
import { Route, NavLink } from "react-router-dom";
import Heading from './components/Heading';
import Input from './components/Input';
import Output from './components/Output';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  const [text, setText] = useState("Hello")

  function updateText(t) {
    setText(t)
  }

  return (
    <div>
      <Heading />
      <nav className="navLink">
        <NavLink to="/">Main</NavLink>
        <NavLink to="/footer">Footer</NavLink>
      </nav>

      <Route path="/" exact>
        <Input updateFunction={updateText} />
        <Output text={text} greet={"Hi Dan"} />
        <Button />
      </Route>

      <Route path="/footer">
        <Footer />
      </Route>
    </div>
  );
};

export default App;