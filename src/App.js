import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { Stack } from "@mui/system";

import "./App.css";
import { theme } from "./theme/theme";
import logo from "./images/BeskidzkieLogo.png";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import { useSelector } from "react-redux";

function App() {
  const product = useSelector((state) => state.product.productData);

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
          <Stack spacing={8} sx={{ width: "100%" }}>
            <Form />
            {product.length === 1 && <Results />}
          </Stack>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
