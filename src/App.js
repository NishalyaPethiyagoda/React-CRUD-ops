import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { PageComponents1 } from './Page1';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<PageComponents1/>}></Route>
          <Route path= ''></Route>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
