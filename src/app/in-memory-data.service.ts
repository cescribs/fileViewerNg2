import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      { id: 11, name: 'Admin', pass: 'pass', role: 'Admin' },
      { id: 12, name: 'Basic', pass: 'pass', role: 'Basic' }
    ];
    return {users};
  }
}
