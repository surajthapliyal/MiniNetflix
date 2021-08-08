import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import Movies from "./Components/moviesAPI";

function App() {
  const [input, setInput] = useState("");
  const [moviesData, setMoviesData] = useState(Movies);
  const handleChange = (e) => {
    if (e.target.value === "") {
      setInput(e.target.value);
      setMoviesData(Movies);
      return;
    }
    setInput(e.target.value);
    console.log(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    const moviesToRender = moviesData.filter(
      (m) => m.name.indexOf(input) !== -1
    );
    setMoviesData(moviesToRender);
  };
  const resetPage = () => {
    setMoviesData(Movies);
  };
  return (
    <div className="App">
      <Nav
        value={input}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        onClick={handleClick}
        resetPage={resetPage}
      />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route
          path="/"
          render={(props) => <Home moviesData={moviesData} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
