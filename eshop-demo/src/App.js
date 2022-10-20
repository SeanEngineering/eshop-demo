import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import Flexbox from './components/Container/Flexbox';
import MainCardList from './components/mainCardList/MainCardList';

function App() {
  const [data, setData] = useState([]);
  const [dataR, setDataR] = useState([]);

  const randomProduct = () => {
    return parseInt(Math.random() * 20);
  };

  useEffect(() => {
    (async () => {
      const products = await getData();
      setData([
        products[randomProduct()],
        products[randomProduct()],
        products[randomProduct()],
        products[randomProduct()],
      ]);
      setDataR([
        products[parseInt(Math.random() * 20)],
        products[parseInt(Math.random() * 20)],
        products[parseInt(Math.random() * 20)],
        products[parseInt(Math.random() * 20)],
      ]);
    })();

    return () => {};
  }, []);

  const getData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const newResponse = await response.json();
      return newResponse;
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Nav />
      <Flexbox>
        <MainCardList object={data} />
      </Flexbox>
      <Flexbox>
        <MainCardList object={dataR} />
      </Flexbox>
    </>
  );
}

export default App;
