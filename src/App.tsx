import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App(): JSX.Element {
  return (
    <BrowserRouter forceRefresh>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
