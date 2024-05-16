import Routes from './src/routes';

import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react-native';

import FlashMessage from 'react-native-flash-message';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <Routes />
        <FlashMessage />
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;
