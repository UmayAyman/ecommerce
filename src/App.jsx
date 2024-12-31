import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/footer';
import Header from './components/header';
import ProductList from './components/ProductList';
import { fetchProducts } from './features/productSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  

  return (
    <>
      <Header />
      <main>
        <section>
        <div className='Shop'>                         {/* src\assets\girls-shopping.png */}
          <img src = "https://pluspng.com/img-png/girls-shopping-png-hd--1133.png" style = {{height: "400px", width: "450px", marginLeft: "650px"}}></img>
          <div style = {{marginTop: "-300px", marginLeft: "200px"}}>
          <p style = {{fontSize: "12px", fontWeight: "bold"}}>SPRING / SUMMER COLLECTION 2024</p>
          <h2>GET UPTO 30% OFF </h2>
          <h2>NEW ARRIVALS</h2>
          <button style = {{marginTop: "20px", backgroundColor: "grey", color: "white", fontSize: "12px"}}>SHOP NOW</button>
          </div>
        </div>
          <ProductList />
        </section>
        <section>
          <Cart />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;

