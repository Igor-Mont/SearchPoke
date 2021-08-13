import styled from 'styled-components';

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

export const Container = styled.div`
  width: 250px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 16px;
  background-color: #e51233;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
  }

  button {
    border-radius: 16px;
    width: 50px;
    height: 40px;
    border: none;
  }
`;
