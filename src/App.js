
import './App.css';
import Row from './components/Row';
import requests from './request'


function App() {
  return (
    <div className="app">
      <h1>dffgfgg</h1>
      <Row title={'Netflix Originals'} fetchurl={requests.fetchNetflixOriginals} />
      
    </div>
  );
}

export default App;
