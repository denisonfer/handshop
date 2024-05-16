import Routes from './src/routes';

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react-native';

import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

function App() {
  return <Routes />;
}

export default withAuthenticator(App);
