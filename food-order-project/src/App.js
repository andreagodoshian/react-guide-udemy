import {useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

/*
Notes:
1.) <main/> is default HTML5
2.) State1: cart is visible && State2: cart isn't visible
3.) We render <Cart/> here, so useState/manage here
4.) Pass pointers to <Header/>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>

*/

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;