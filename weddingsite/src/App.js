import "./App.scss";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import WeddingParty from "./pages/WeddingParty";
import Login from "./pages/Login";
import RSVP from "./pages/RSVP";
import FormSuccess from "./pages/FormSuccess";
import FormFailure from "./pages/FormFailure";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Nav location={window.location.href} />
      </header>
      <body>
        <Routes>
          <Route path="/details" element={<Details />} />
          <Route path="/weddingparty" element={<WeddingParty />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/success" element={<FormSuccess />} />
          <Route path="/failure" element={<FormFailure />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
}

export default App;
