import './App.css';
import { Route, NavLink } from "react-router-dom";
import Heading from './components/Heading';
import Input from './components/Input';
import Output from './components/Output';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Heading />
      <nav className="navLink">
        <NavLink to="/">Main</NavLink>
        <NavLink to="/footer">Footer</NavLink>
      </nav>

      <Route path="/" exact>
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