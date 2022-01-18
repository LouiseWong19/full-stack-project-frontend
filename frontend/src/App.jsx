import "./App.scss"
import NavBar from "./components/NavBar/NavBar";
import Search from "./containers/Search/Search";


const App = () => {
  return (
    <div className="App">
      <Search />
      
      <NavBar />
    </div>
  );
}

export default App;