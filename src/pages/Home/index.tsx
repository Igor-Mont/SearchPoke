import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BoxPoke from '../../components/BoxPoke';
import { Loading } from './styles';

type PokeProps = {
  name: string;
  url: string;
  id?: number;
};

function Home(): JSX.Element {
  const [pokes, setPokes] = useState<PokeProps[]>([]);

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
    <div>
      {pokes.length > 300 ? (
        <BoxPoke
          onClick={() => histoty.push(`/pokemon/1`)}
          name="Bullbasaur"
          id={1}
        />
      ) : null}

      {pokes.length > 300 ? (
        pokes.map((value, i) => {
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
        <Loading />
      )}
    </div>
  );
}

export default Home;
