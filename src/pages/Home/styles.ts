import styled from 'styled-components';

export const Loading = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #e5e5e5;
  border-top-color: red;
  border-radius: 50%;
  animation: is-rotating 1s infinite;
  justify-self: center;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
