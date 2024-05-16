import Routes from './src/routes';

import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react-native';

import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <Routes />
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;
