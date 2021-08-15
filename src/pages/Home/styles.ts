import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  height: 100vh;

  .search {
    background-color: #e5e5e5;
    border-bottom: 2px solid #e51233;
    height: 150px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;

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
    position: absolute;
    top: 50%;
    right: 50%;
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

export const GridPokes = styled.main`
  background-color: #e5e5e5;
  margin-top: 160px;
  justify-content: center;
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
`;
