import React, { useEffect, useState } from 'react';
import {
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Box, Container } from './styles';

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

const initialState = {
  name: 'Loading...',
  sprites: {
    front_default:
      'https://img1.gratispng.com/20190117/hlw/kisspng-computer-icons-clip-art-web-page-portable-network-clipart-loading-spinner-static-5c403bdf6830b7.3906495115477135034268.jpg',
  },
  weight: 0,
  stats: [
    {
      base_stat: 0,
      stat: {
        name: '',
      },
    },
  ],
  types: [
    {
      type: {
        name: '',
      },
    },
  ],
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
  const location = useLocation();
  const { id } = useParams<ParamProps>();
  const [details, setDetails] = useState<DetailsProps>(initialState);
  useEffect(() => {
    (async function getData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const data = await response.json();
      setDetails(data);
    })();
  }, []);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

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
    <Container backgroundTypeColor={details.types[0].type.name}>
      <Box backgroundTypeColor={details.types[0].type.name}>
        <div className="name-type">
          <h1>
            {details.name.charAt(0).toUpperCase() + details.name.slice(1)}
          </h1>
          <h2>
            Type(s):{' '}
            {details.types.map(v =>
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
          <img src={details.sprites.front_default} alt={details.name} />
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
          <h2>Weight: {details.weight}</h2>
          {details.stats.map(v => (
            <h2 key={v.stat.name}>
              {v.stat.name.charAt(0).toUpperCase() + v.stat.name.slice(1)}:{' '}
              {v.base_stat}
            </h2>
          ))}
        </div>
      </Box>
    </Container>
  );
}

export default Detail;
