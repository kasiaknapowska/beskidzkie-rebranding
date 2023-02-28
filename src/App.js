// import logo from "./logo.svg";
import logo from "./images/BeskidzkieLogo.png";
import "./App.css";
import { Container } from "@mui/material";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
      </Container>
    </div>
  );
}

export default App;
