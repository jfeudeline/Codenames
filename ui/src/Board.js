import React, { useState, useEffect } from "react";

import Deck from "./components";
import { get, post } from "./utils/fetch";

const Board = () => {
  const [isSpymaster, setIsSpymaster] = useState(false);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newDeal, setNewDeal] = useState(false);
  const [synchro, setSynchro] = useState(false);

  const apiUrl = `https://lit-stream-81562.herokuapp.com/api`;

  useEffect(() => {
    const interval = setInterval(() => {
      setSynchro((synchro) => !synchro);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    get(apiUrl).then((cards) => {
      setCards(cards);
      setLoading(false);
    });
  }, [apiUrl, synchro]);

  useEffect(() => {
    post(apiUrl, cards);
  }, [cards, apiUrl]);

  useEffect(() => {
    if (newDeal) {
      get(`${apiUrl}/new-deal`).then((cards) => {
        setCards(cards);
        setNewDeal(false);
      });
    }
  }, [newDeal, apiUrl]);

  const changeSpymaster = (e) => {
    e.preventDefault();
    setIsSpymaster(!isSpymaster);
  };

  const changeCards = (e) => {
    e.preventDefault();
    setNewDeal(true);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    let new_cards = [...cards];
    new_cards[id].isPlayed = true;
    setCards(new_cards);
  };

  if (loading) return <div>cards Loading...</div>;
  if (cards === undefined) return <div>Cet URL n'existe pas</div>;

  return (
    <>
      <Deck cards={cards} isSpymaster={isSpymaster} onClick={handleClick} />

      <div>
        Spymaster :
        <button onClick={changeSpymaster}>{isSpymaster ? "ON" : "OFF"}</button>
      </div>
      <div>
        <button onClick={changeCards}>Nouvelle Partie</button>
      </div>
    </>
  );
};

export default Board;