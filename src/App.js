import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Course from './components/Course';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Course></Course>
      <Register></Register>
    </div>
  );
}

export default App;
