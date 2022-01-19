import "./App.scss"
import Search from "./containers/Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./containers/Add/Add";


const App = () => {
  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/add-animal" element={<Add />} />
        </Routes>
      </Router>
  );
}

export default App;