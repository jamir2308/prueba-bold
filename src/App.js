import './App.scss';
import Filter from './components/filter/filter';
import { Header } from './components/header/header';
import Table from './components/table/table';

function App() {
  return (
    <div className="App">
      <Header/>
      <Filter/>
      <Table/>
    </div>
  );
}

export default App;
