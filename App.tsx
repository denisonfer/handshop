import Routes from './src/routes';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

export default function App() {
  return <Routes />;
}
