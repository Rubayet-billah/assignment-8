import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <div className='container'>
        <Header></Header>
      </div>
      <Main></Main>
    </div>
  );
}

export default App;
