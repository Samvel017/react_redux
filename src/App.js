import { useState } from "react";
import "./app.scss";
import Page from "./Components/Page";
import { Context } from "./Context";

function App() {
  const [card, setCard] = useState([]);
  const createCard = () => {
    const num = Math.ceil(Math.random() * 100000);
    setCard((prev) => {
      return [...prev, { id: num }];
    });
  };

  const sortCards = () => {
    setCard([
      ...card.sort((a, b) => {
        return a.id - b.id;
      }),
    ]);
  };

  const deleteCard = (id) => {
    setCard([...card.filter((el) => el.id !== id)]);
  };

  return (
    <div>
      <Context.Provider value={{ card, createCard, sortCards, deleteCard }}>
        <Page />
      </Context.Provider>
    </div>
  );
}

export default App;
