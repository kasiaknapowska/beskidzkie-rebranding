// import logo from "./logo.svg";
import logo from "./images/BeskidzkieLogo.png";
import "./App.css";
import { Container } from "@mui/material";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Container
        maxWidth="sm"
        sx={{
          paddingBottom: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <img src={logo} className="logo" alt="logo" />
        <Form />
      </Container>
    </div>
  );
}

export default App;
