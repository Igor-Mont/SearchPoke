import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .search {
    height: 150px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;

    h1 {
      font-family: 'Roboto';
      font-weight: 500;
    }

    input {
      width: 200px;
      height: 30px;
      padding: 4px 8px;
      font-family: 'Roboto';
      font-weight: 400;
      border-radius: 8px;
      border: 1px solid #e51233;
      outline: 0;

      ::placeholder {
        font-family: 'Roboto';
        font-weight: 400;
      }
    }
  }

  .container-pokes {
    display: grid;
  }

  .loading {
    width: 50px;
    height: 50px;
    border: 6px solid #e5e5e5;
    border-top-color: #e51233;
    border-radius: 50%;
    animation: is-rotating 1s infinite;
    justify-self: center;

    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
  }
`;
