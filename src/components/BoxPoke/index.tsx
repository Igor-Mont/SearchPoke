import React, { memo } from 'react';
import { firstLetterInUpper } from '../../utils/firstLetterUpperCase';

import { Container } from './styles';

type BoxPokeTypes = {
  name: string;
  onClick(): void;
};

function BoxPoke({ name, onClick }: BoxPokeTypes): JSX.Element {
  return (
    <Container>
      <h1>{firstLetterInUpper(name)}</h1>
      <button onClick={onClick} type="button">
        Ir
      </button>
    </Container>
  );
}

export default BoxPoke;
