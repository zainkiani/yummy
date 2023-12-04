import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";



function App() {
  return (
    <div className="App">
      <h2>Logo</h2>
      <BrowserRouter>
        <Search />
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
