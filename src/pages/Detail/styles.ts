import styled from 'styled-components';

type BoxProps = {
  backgroundTypeColor: string;
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

export const Container = styled.div<BoxProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => {
    switch (props.backgroundTypeColor) {
      case 'normal':
        return backgroundColorBasedTypes.normal;
      case 'grass':
        return backgroundColorBasedTypes.grass;
      case 'fire':
        return backgroundColorBasedTypes.fire;
      case 'water':
        return backgroundColorBasedTypes.water;
      case 'ice':
        return backgroundColorBasedTypes.ice;
      case 'dragon':
        return backgroundColorBasedTypes.dragon;
      case 'fairy':
        return backgroundColorBasedTypes.fairy;
      case 'bug':
        return backgroundColorBasedTypes.bug;
      case 'ground':
        return backgroundColorBasedTypes.ground;
      case 'rock':
        return backgroundColorBasedTypes.rock;
      case 'fighting':
        return backgroundColorBasedTypes.fighting;
      case 'ghost':
        return backgroundColorBasedTypes.ghost;
      case 'electric':
        return backgroundColorBasedTypes.electric;
      case 'flying':
        return backgroundColorBasedTypes.flying;
      case 'psychic':
        return backgroundColorBasedTypes.psychic;
      case 'stell':
        return backgroundColorBasedTypes.stell;
      case 'dark':
        return backgroundColorBasedTypes.dark;
      case 'poison':
        return backgroundColorBasedTypes.poison;
      default:
        return '#fff';
    }
  }};
`;

export const Box = styled.div<BoxProps>`
  width: 500px;
  height: 600px;
  background-color: rgba(79, 79, 79, 0.6);
  padding: 16px 16px 0 16px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .center {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .name-type {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    h1 {
      color: #fafafa;
      font-family: 'Poppins';
    }
    h2 {
      color: #fff;
      font-family: 'Poppins';
    }
  }
  img {
    width: 200px;
    height: 200px;
  }

  .infos {
    border-radius: 32px 32px 0 0;
    width: 80%;
    height: 50%;
    background-color: ${props => {
      switch (props.backgroundTypeColor) {
        case 'normal':
          return backgroundColorBasedTypes.normal;
        case 'grass':
          return backgroundColorBasedTypes.grass;
        case 'fire':
          return backgroundColorBasedTypes.fire;
        case 'water':
          return backgroundColorBasedTypes.water;
        case 'ice':
          return backgroundColorBasedTypes.ice;
        case 'dragon':
          return backgroundColorBasedTypes.dragon;
        case 'fairy':
          return backgroundColorBasedTypes.fairy;
        case 'bug':
          return backgroundColorBasedTypes.bug;
        case 'ground':
          return backgroundColorBasedTypes.ground;
        case 'rock':
          return backgroundColorBasedTypes.rock;
        case 'fighting':
          return backgroundColorBasedTypes.fighting;
        case 'ghost':
          return backgroundColorBasedTypes.ghost;
        case 'electric':
          return backgroundColorBasedTypes.electric;
        case 'flying':
          return backgroundColorBasedTypes.flying;
        case 'psychic':
          return backgroundColorBasedTypes.psychic;
        case 'stell':
          return backgroundColorBasedTypes.stell;
        case 'dark':
          return backgroundColorBasedTypes.dark;
        case 'poison':
          return backgroundColorBasedTypes.poison;
        default:
          return '#fff';
          break;
      }
    }};
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      font-family: 'Poppins';
      font-size: 20px;
      margin-bottom: 4px;
    }
  }
`;
