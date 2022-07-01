import logo from './logo.svg';
import './App.css';
import Webpage from './component/webpage';

function App() {


  let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];
  return (
    <>
    <Webpage name={items}/>
    </>
  );
}

export default App;
