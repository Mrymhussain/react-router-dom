import { Link } from "react-router";


const PokemonList = (props) => {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {props.pokemon.map((currentPokemon) => (
          <Link to={`/pokemon/${currentPokemon._id}`} key={currentPokemon.name}>
            <li >{currentPokemon.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default PokemonList;