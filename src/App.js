import './App.css';
import { Route, NavLink } from "react-router-dom";
import Heading from './components/Heading';
import Input from './components/Input';
import Output from './components/Output';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  return (
    <div className="root">
      <header>
        <h1>text flipper</h1>
      </header>

      <nav className="navLink">
        <NavLink to="/">Main</NavLink>
        <NavLink to="/footer">Footer</NavLink>
      </nav>

      <Route path="/" exact>
        <Heading />
        <Input />
        <Output />
        <Button />
      </Route>

      <Route path="/footer">
        <Footer />
      </Route>
    </div>
  );
};

export default App;