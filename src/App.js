import './App.css';
import Form from './components/Form';
import  Pic from './images/bg.png'
function App() {
  return (
    <div className="App">
      <div className="flex">
        <img src={Pic} className="m-2 w-1/3 h-screen hidden md:block" alt='pics'/>
        <Form/>
      </div>
    </div>
  );
}

export default App;
