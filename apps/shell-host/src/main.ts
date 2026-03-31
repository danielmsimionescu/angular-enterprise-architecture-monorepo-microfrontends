import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'catalog': 'http://localhost:4200/remoteEntry.json',
  'cart': 'http://localhost:4201/remoteEntry.json',
  'profile': 'http://localhost:4202/remoteEntry.json'
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
