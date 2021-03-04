import React from 'react';
import logo from './logo.svg';
import './App.css';
import orangeSUP from "./img/orange-paddleboard.jpg";

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>Sam's Stand-up Shop</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>
        Sam's Stand-up Shop has everything you need for paddle boarding.
        We've got the {props.adjective} paddle boards you'll find and high quality, 
        long-lasting inflator pumps.
      </p>
      <img src={orangeSUP}
      height={240}
      alt='SUP on the beach' 
      />
      <ul>
        {props.paddleTypes.map((paddle) => (
        <li key={paddle.id}>{paddle.title}</li>
        ))}
      </ul>
    </section>

  )
}

function Footer(props) {
  return (
    <footer>
      <p> Contact Us - Local Pick Up - Our Company</p>
      <span>{props.year}</span>
    </footer>
  )
}

const paddleTypes = [
  "Wood",
  "Plastic/ABS",
  "Carbon Fiber"
];

const paddleObjects = paddleTypes.map((paddle, i) => ({id: i, title:paddle}))


function App() {
  return (
    <div className="App">
      <Header name='head'/>
      <Main adjective='best' paddleTypes={paddleObjects} />
      <Footer year={new Date().getFullYear()} />
      
    </div>
  );
}

export default App;
