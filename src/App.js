import{BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Products from "./Products/Products";
import Navbar from "./Navigation/Navbar";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
      </Routes>
    </Router>
  );
}

export default App;
