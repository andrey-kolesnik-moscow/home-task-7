import React from 'react';
import RadioBlock from './Components/RadioBlock';

import { store } from './Redux/actions';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RadioBlock />
      </div>
    </Provider>
  );
}

export default App;
