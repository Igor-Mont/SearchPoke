import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Box, Container } from './styles';
import { firstLetterInUpper } from '../../utils/firstLetterUpperCase';

type ParamProps = {
  id: string;
};

type StatsProps = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type TypesProps = {
  type: {
    name: string;
  };
};

type DetailsProps = {
  name: string;
  sprites: {
    front_default: string;
  };
  weight: number;
  stats: StatsProps[];
  types: TypesProps[];
};

const backgroundColorBasedTypes = {
  normal: '#A4A49F',
  grass: '#5EBC5E',
  fire: '#FFA052',
  water: '#4F92D7',
  ice: '#7BD2C6',
  dragon: '#096BC1',
  fairy: '#EC8CE3',
  bug: '#91C12D',
  ground: '#D7814F',
  rock: '#C7B78B',
  fighting: '#CF4069',
  ghost: '#586AB2',
  electric: '#F4D33F',
  flying: '#9DB7E7',
  psychic: '#F87177',
  stell: '#538C9E',
  dark: '#5A5366',
  poison: '#A866C8',
};

function Detail(): JSX.Element {
  const history = useHistory();
  const { id } = useParams<ParamProps>();
  const [details, setDetails] = useState<DetailsProps>();
  useEffect(() => {
    (async function getData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const data = await response.json();
      setDetails(data);
    })();
  }, []);

  const handleNextPoke = () => {
    const nextId = Number(id);
    if (nextId >= 898) return;
    history.push(`/pokemon/${nextId + 1}`);
  };
  const handlePerivousPoke = () => {
    const nextId = Number(id);
    if (nextId <= 1) return;
    history.push(`/pokemon/${nextId - 1}`);
  };

  return (
    <Container backgroundTypeColor={details?.types[0].type.name}>
      <Box backgroundTypeColor={details?.types[0].type.name}>
        <div className="name-type">
          <h1>{firstLetterInUpper(details?.name)}</h1>
          <h2>
            Type(s):{' '}
            {details?.types.map(v =>
              details.types.length > 1 ? `${v.type.name} | ` : v.type.name,
            )}
          </h2>
        </div>
        <div className="center">
          <div
            onKeyPress={() => 'asds'}
            onClick={handlePerivousPoke}
            role="button"
            tabIndex={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </div>
          <img src={details?.sprites.front_default} alt={details?.name} />
          <div
            onKeyPress={() => 'asds'}
            onClick={handleNextPoke}
            role="button"
            tabIndex={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
        <div className="infos">
          <h2>Weight: {details?.weight}</h2>
          {details?.stats.map(v => (
            <h2 key={v.stat.name}>
              {firstLetterInUpper(v.stat.name)}: {v.base_stat}
            </h2>
          ))}
        </div>
      </Box>
    </Container>
  );
}

export default Detail;
