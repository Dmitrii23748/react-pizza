import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

import { Route } from 'react-router-dom';






function App () {
  // const [pizzas, setPizzas] = useState( [] );

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ Cart } />
        </div>
      </div>
    </>
  );
}

export default App;
