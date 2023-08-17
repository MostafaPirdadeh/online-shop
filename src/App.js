import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Products/>}/>
      </Routes>
    </Router>
  );
}

export default App;
