import React from "react";
import Card from "./Card";
import { cardsData } from "../Data/CardData";

const CardsContainer: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsContainer;
