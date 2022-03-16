import Header from './components/Header';
import Card from './components/Card';
import Data from './data/place-data'
import './App.css';

function App() {

  const dataElement = Data.map((item)=>{
    return(
      <Card item={item} />
    )
  })

  return (
    <div className="App">
        <Header />
        {dataElement}
    </div>
  );
}

export default App;
