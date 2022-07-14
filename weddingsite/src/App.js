import "./App.scss";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Where from "./pages/Where";
import WeddingParty from "./pages/WeddingParty";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <body>
          <Routes>
            <Route path="/where" element={<Where />} />
            <Route path="/weddingparty" element={<WeddingParty />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
