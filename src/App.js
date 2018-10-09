import * as React from 'react';
import { Provider } from 'react-redux';

import initStore from './state/store';
import Main from './components/Main';

const store = initStore();

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Main />
        </Provider>
    );
  }
}

export default App;