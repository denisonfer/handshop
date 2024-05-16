import Routes from './src/routes';

import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react-native';

import { ApolloProvider } from '@apollo/client';
import FlashMessage from 'react-native-flash-message';
import amplifyconfig from './src/amplifyconfiguration.json';
import client from './src/services/client';
Amplify.configure(amplifyconfig);

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <ApolloProvider client={client}>
          <Routes />
          <FlashMessage />
        </ApolloProvider>
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;
