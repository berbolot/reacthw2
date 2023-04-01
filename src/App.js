import AboutUs from './pages/AboutUs';
import './App.css';



function App() {

  const text = {
    title: "hello",
    subtitle: "lorem lorem lorem"
  }
  
  return (
    <div className="App">
    <AboutUs content={text}/>

    </div>
  );
}

export default App;
