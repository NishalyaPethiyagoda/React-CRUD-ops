import logo from './logo.svg';
import Headers from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header" >
        <img 
        src={logo} alt="logo" 
        style={{width: 200, height: 200}}
        postion="absolute"
        //left={this.left}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}

      <Headers></Headers>
      
    </div>
  );
}

export default App;
