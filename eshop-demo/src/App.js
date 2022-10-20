import { getDefaultNormalizer } from "@testing-library/react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import Flexbox from "./components/Container/Flexbox";
import MainCardList from "./components/mainCardList/MainCardList";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const newResponse = await response.json();
      setData(newResponse);
      console.log(newResponse);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Nav />
      <Flexbox>
        <MainCardList object={[data[0], data[1], data[2]]} />
      </Flexbox>
    </>
  );
}

export default App;
