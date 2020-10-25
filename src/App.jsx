import React from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core';

import Pokemons from './components/Pokemons';
import generateStore from './redux/store'
import theme from './theme/themeConfig';


function App() {
  const store = generateStore()

  
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store} >
        <Pokemons/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
