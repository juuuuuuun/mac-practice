import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App flex-col flex justify-center items-center">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
