import { Routes, Route } from 'react-router';

import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

const App = () => {
  const pokemon = [
    {
      _id: 1,
      name: 'bulbasaur',
      weight: 69,
      height: 7,
    },
    {
      _id: 2,
      name: 'ivysaur',
      weight: 130,
      height: 10,
    },
    {
      _id: 3,
      name: 'venusaur',
      weight: 1000,
      height: 20,
    },
  ];

  return (
    <>
      <h1>Pokemon App</h1>

      <Routes>
        <Route
          path="/"
          element={<PokemonList pokemon={pokemon} />}
        />

        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
      </Routes>
    </>
  );
};

export default App;