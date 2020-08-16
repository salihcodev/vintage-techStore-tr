// ==> BASIC:
import React from 'react';

// ==> UTILITIES:
import './styles/app.sass';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ==> PAGES:
import AboutPage from './views/about/About.Page';
import HomePage from './views/home/Home.Page';
import CartPage from './views/cart/Cart.Page';
import CheckoutPage from './views/checkout/Checkout.Page';
import ErrorPage from './views/error/Error.Page';
import LoginPage from './views/login/Login.Page';
import ProductsPage from './views/products/Products.Page';
import ProductDetailsPage from './views/productDetails/ProductDetails.Page';

// ==> vintage ROOT APP:
export default function App() {
  return (
    <Router>
      <Switch>
        {/* pome page */}
        <Route exact path="/">
          <HomePage />
        </Route>

        {/* about page */}
        <Route path="/about">
          <AboutPage />
        </Route>

        {/* cart page */}
        <Route path="/cart-contents">
          <CartPage />
        </Route>

        {/* checkout page */}
        <Route path="/checkout">
          <CheckoutPage />
        </Route>

        {/* login page */}
        <Route path="/login">
          <LoginPage />
        </Route>

        {/* products page */}
        <Route exact path="/products">
          <ProductsPage />
        </Route>

        {/* productDetails page */}
        <Route path="/products/:id">
          <ProductDetailsPage />
        </Route>

        {/* error page */}
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}
