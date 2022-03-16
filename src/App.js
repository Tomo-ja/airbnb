import Header from './components/Header';
import Card from './components/Card';
import Data from './data/place-data'
import './App.css';

function App() {

  const dataElement = Data.map((item)=>{
    return(
      <Card key={item.id}
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
       />
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
