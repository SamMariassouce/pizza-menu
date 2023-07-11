// *** IMPORT ***

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// *** DATA ***

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
// *** APP ***

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// *** HEADER ***

function Header() {
  //const style = { color: 'red', fontSize: '50px', textTransform: 'uppercase' };
  return (
    <header className="header">
      <h1>La Pizzaeria</h1>
    </header>
  );
}

// *** MENU ***

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2> menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p className="tel">
            Rond point Jacques Chirac, Papeete. Tel: 40 40 40 40
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>Nous travaillons sur notre menu, svp revenez plus tard.</p>
      )}
    </main>
  );
}

// *** PIZZA ***

function Pizza({ pizzaObj }) {
  //console.log(pizzaObj);

  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {pizzaObj.soldOut ? (
          <span>Plus de stock</span>
        ) : (
          <span>Prix: {pizzaObj.price} cfp</span>
        )}
      </div>
    </li>
  );
}

// *** FOOTER ***

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Nous sommes actuellement fermés. Ouverture du lundi au samedi, de{' '}
          {openHour}h00 à {closeHour}h00.
        </p>
      )}
    </footer>
  );
}
// creating a new component
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Nous sommes ouvert de {openHour}h00 jusqu'à {closeHour}h00. Passez à la
        Pizzaeria ou commandez en ligne.
      </p>
      <button className="btn">Commander</button>
    </div>
  );
}

// React version 18

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
