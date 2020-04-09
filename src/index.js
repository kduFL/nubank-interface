import React from 'react';

import '~/config/ReactotronConfig';

import Routes from '~/routes';
import { StatusBar } from 'react-native';

const App = () => (
  <>
    <StatusBar barStyle='light-content' backgroundColor='#8b10ae' />
    <Routes />
  </>
);

export default App;
