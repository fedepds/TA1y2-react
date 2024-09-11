import logo from './logo.svg';
import './App.css';

const Card = ({ children }) => {
  return children;
};

const Content = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Card children={
        <div className="card">
          <h1>Tarjeta 1</h1>
          <p>desc tarea 1</p>
          <p>Pablo</p>
          <p>11/9/2021</p>
          <p>12/9/2021</p>
        </div>} />

      <Card children={
        <div className="card">
          <h1>Tarjeta 2</h1>
          <p>desc tarea 2</p>
          <p>German</p>
          <p>23/7/2023</p>
          <p>27/7/2023</p>
        </div>}>

      </Card>

      <Card children={
        <div className="card">
          <h1>Tarjeta 3</h1>
          <p>desc tarea 3</p>
          <p>Federico</p>
          <p>2/4/2024</p>
          <p>5/4/2024</p>
        </div>}>

      </Card>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

function App() {
  return (
    <div className="App">
      <Content></Content>
    </div>
  );
}

export default App;
