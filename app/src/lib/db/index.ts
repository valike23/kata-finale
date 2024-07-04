import Dexie, { type EntityTable } from 'dexie';

interface Competition {
  id?: number;
  name?: string;
  startDate?: Date;
}
interface User {
    id: number;
    name: string;
    pics: string
}

const db = new Dexie('katadb') as Dexie & {
  competitions: EntityTable<
    Competition,
    'id' 
  >;
  users: EntityTable<
  User,
  'id' 
>;
};

// Schema declaration:
db.version(1).stores({
  competitions: '++id, name, startDate' ,
  users: '++id, name, clubId'
});

export type { Competition, User };
export { db };