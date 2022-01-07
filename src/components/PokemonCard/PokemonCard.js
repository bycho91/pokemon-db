import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPokemonDetails } from "../../helper/getPokemonDetails";
import "./PokemonCard.scss";

const PokemonCard = ({ pokemon: { name, url } }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    (async () => {
      setDetails(await getPokemonDetails(url));
    })();
  }, []);

  return (
    <>
      {details && (
        <div className="card-container">
          <div className="card-id">{details.id}</div>

          <div className="card-image">
            <img src={details.sprites.front_default} alt={name} />
          </div>

          <div className="card-info">
            <div className="info-name">{name}</div>
            <div className="info-baseExp">{`Base Exp: ${details.base_experience}`}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonCard;
