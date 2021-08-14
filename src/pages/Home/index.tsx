import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BoxPoke from '../../components/BoxPoke';
import { Container } from './styles';

type PokeProps = {
  name: string;
  url: string;
  id?: number;
};

function Home(): JSX.Element {
  const [pokes, setPokes] = useState<PokeProps[]>([]);
  const [searchPokeValue, setSearchPokeValue] = useState('');
  const filteredPokes = searchPokeValue
    ? pokes.filter(poke => {
        return poke.name.toLowerCase().includes(searchPokeValue);
      })
    : [...pokes];

  const histoty = useHistory();
  useEffect(() => {
    (async function getPokes() {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=898s&offset=1',
      );
      const data = await response.json();
      setPokes(data.results);
    })();
  }, []);

  return (
    <Container>
      <div className="search">
        <h1>Escolha o seu favorito para ver mais informações</h1>
        <input
          onChange={e => setSearchPokeValue(e.target.value)}
          type="text"
          value={searchPokeValue}
          placeholder="Procure o seu favorito"
        />
      </div>
      {filteredPokes.length >= 1 ? (
        (
          <BoxPoke
            onClick={() => histoty.push(`/pokemon/1`)}
            name="Bullbasaur"
            id={1}
          />
        ) &&
        filteredPokes.map((value, i) => {
          value.id = i + 2;

          return (
            <BoxPoke
              onClick={() => histoty.push(`/pokemon/${value.id}`)}
              name={value.name}
              id={value.id}
              key={value.id}
            />
          );
        })
      ) : (
        <div className="loading" />
      )}
    </Container>
  );
}

export default Home;
