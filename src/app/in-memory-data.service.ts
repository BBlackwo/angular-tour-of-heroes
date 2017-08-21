import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

// Rather than require a real API server, this example simulates
// communication with the remote server by adding the InMemoryWebApiModule
// to the module imports, effectively replacing the Http client's
// XHR backend service with an in-memory alternative.

export class InMemoryDataService implements InMemoryDbService {

  createDb(): {} {
    const heroes: Hero[] = [
      { id: 0, name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return { heroes };
  }

}
