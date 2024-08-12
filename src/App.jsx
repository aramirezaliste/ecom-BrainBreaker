import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <NavBar />

      <Switch>
        <Route path="/">
          <ItemListContainer />
        </Route>
        <Route path="/cate/:id">
          <ItemListContainer />
        </Route>
      </Switch>

      <ItemListContainer />
    </Routes>
  );
}

export default App;
