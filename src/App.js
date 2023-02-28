// import logo from "./logo.svg";
import logo from "./images/BeskidzkieLogo.png";
import "./App.css";
import { ThemeProvider } from '@mui/material/styles';
import { Container } from "@mui/material";
import Form from "./components/Form/Form";
import {theme} from "./theme/theme"

function App() {
  return (
    <div className="App">
     <ThemeProvider theme={theme}>
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
     </ThemeProvider>
    </div>
  );
}

export default App;
