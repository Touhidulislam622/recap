import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const friends = ['Rasel', 'Robin', ' Rafi'];
  const jobs = ['work at google', 'work at yt'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieCounter></MovieCounter>
        
        <Friends name = {friends[0]} job = {jobs[1]}></Friends>
        <Friends name = "Nafiz khan" job = "work in BAT" place ="junior excutive"></Friends>
        <Friends name = "" job = "work in BAT" place ="junior excutive"></Friends>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
};
function MovieCounter(){
  const [count, setCount] = useState(5);

  const handleClick = () => setCount(count + 1);

    return (
      <div>
        <button onClick={handleClick}>Add Movie</button>
        <h3>Numbers of Movies:{count}</h3>
        <MovieDisplay movie = {count + 7 }></MovieDisplay>
        <MovieDisplay movie = {count}></MovieDisplay>
      </div>
    )
};
function MovieDisplay(props){
  return(
    <h4>I created movie:{props.movie}</h4>
  )
}
function Friends (props){
  const friendsStyle = {
    border: "2px solid red",
    width: "400px",
    color: "yellow" ,
    marginTop: "10px"
  }
  return (
    <div style = {friendsStyle}>
      <h1>{props.name}</h1>
      <h2>{props.job}</h2>
      <p>{props.place}</p>
    </div>
  )
}

export default App;
