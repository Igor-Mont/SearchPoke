import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
        'https://pokeapi.co/api/v2/pokemon?limit=1117s&offset=1',
      );
      const data = await response.json();
      setPokes(data.results);
    })();
  }, []);

  const handleInfoPoke = () => {
    document.body.style.background = 'red';
  };

  console.log(pokes);
  return (
    <div>
      <div>
        <h1>Bullbasaur 1</h1>
        <button type="button" onClick={() => histoty.push(`/pokemon/1`)}>
          Ir
        </button>
      </div>
      {pokes.length > 300 ? (
        pokes.map((value, i) => {
          value.id = i + 2;

          return (
            <div key={value.id}>
              <h1>
                {value.name} {value.id}
              </h1>
              <button
                type="button"
                onClick={() => histoty.push(`/pokemon/${value.id}`)}
              >
                Ir
              </button>
            </div>
          );
        })
      ) : (
        <h1>Procurando...</h1>
      )}
    </div>
  );
}

export default Home;
