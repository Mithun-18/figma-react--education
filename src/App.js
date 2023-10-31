import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Course from './components/Course';
import Register from './components/Register';
import Info from './components/Info';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Course></Course>
      <Register></Register>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
}

export default App;
