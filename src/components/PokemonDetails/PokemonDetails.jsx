// src/components/PokemonDetails/PokemonDetails.jsx

import { useParams } from "react-router";

const PokemonDetails = (props) => {

  const {pokemonId} = useParams()

  const singlePokemon = props.pokemon.find((poke) => (
    poke._id === Number(pokemonId)
  ));


  return (
    <>
      <h2>Pokemon Details</h2>
      <dl>
        <dt>Weight: {singlePokemon.weight}</dt>
        <dd></dd>
        <dt>Height: {singlePokemon.height}</dt>
        <dd></dd>
      </dl>
    </>
  );
};

export default PokemonDetails;