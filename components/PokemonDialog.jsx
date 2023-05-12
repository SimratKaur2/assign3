import React from "react";
import { Dialog } from "@material-ui/core";
import styled from "@emotion/styled";
import { DialogWrapper } from "../styles/StyledComponents";

export default function PokemonDialog({ open, onClose, pokemon }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogWrapper>
        <h2>{pokemon.name}</h2>
        <img
          className="pokemon-image"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width="100" 
          height="100" />
        <h3>Abilities:</h3>
        <ul>
          {pokemon.abilities.map((ability, i) => (
            <li key={i}>{ability.ability.name}</li>
          ))}
        </ul>
        <h3>Stats:</h3>
        <ul>
          {pokemon.stats.map((stat, i) => (
            <li key={i}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
        <h3>Types:</h3>
        <ul>
          {pokemon.types.map((type, i) => (
            <li key={i}>{type.type.name}</li>
          ))}
        </ul>
      </DialogWrapper>
    </Dialog>
  );
}
