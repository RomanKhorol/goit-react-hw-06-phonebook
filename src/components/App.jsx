import { AddForm } from './AddAbonentForm/AddAbonentForm';
import { ItemList } from './AbonentList/AbonentList';
import { Filter } from './Filtr/Filtr';

export default function App() {
  return (
    <div
      style={{
        height: '100%',
        padding: '15px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div
        style={{
          width: '300px',
          border: '1px solid black',
          borderRadius: '4px',
        }}
      >
        <h1
          style={{
            paddingLeft: '40px',
            fontSize: '40px',
            margin: '0px',
          }}
        >
          Phonebook
        </h1>
        <AddForm />
      </div>

      <h2
        style={{
          margin: '0',
          paddingLeft: '40px',
          padding: '40px',
          fontSize: 40,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ItemList />
    </div>
  );
}
