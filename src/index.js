import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Pain au romarin',
    price: 560,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomate et mozarella',
    price: 1450,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomate, mozarella, épinard, et fromage Ricotta',
    price: 1390,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomate, mozarella, champignons et onions',
    price: 1850,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomate, mozarella, pepperoni',
    price: 1590,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomate, mozarella, jambon, aragula et fromage burrata',
    price: 1650,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2> menu</h2>

      {pizzas && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}

      {/* <Pizza
        name="pizza spinaci"
        ingredients="Tomato mozarella"
        img="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="pizza funghi"
        ingredients="Tomato mushrooms"
        img="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza(props) {
  //console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>Prix: {props.pizzaObj.price} cfp</span>
      </div>
    </li>
  );
}

function Header() {
  //const style = { color: 'red', fontSize: '50px', textTransform: 'uppercase' };
  return (
    <header className="header footer">
      <h1>La Pizzaeria</h1>
      <p className="tel">Rond point Jacques Chirac, Papeete</p>
      <p className="tel">Tel: 40 40 40 40</p>
    </header>
  );

  /*     <h1 style={style} className="header">
      Fast React Pizza Co.
    </h1> */
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 7;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //if (hour >= openHour && hour <= closeHour) alert('We are currently open');
  //else alert('sorry we are closed');
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            Nous sommes ouvert jusqu'à {closeHour}:00. Passez à la Pizzaeria ou
            commandez en ligne.
          </p>
          <button className="btn">Commander</button>
        </div>
      )}
    </footer>
  );
  // return React.createElement('footer', null, 'we are open');
}

// React version 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
