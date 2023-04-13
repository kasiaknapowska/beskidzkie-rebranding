import { ThemeProvider } from "@mui/material/styles";
import { Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import "./App.css";
import { theme } from "./theme/theme";
import logo from "./images/BeskidzkieLogo.png";
import DownsizingCalculator from "./components/DownsizingCalculator/DownsizingCalculator";
import Results from "./components/Results/Results";
import { useSelector } from "react-redux";
import { useState } from "react";
import PricingCalculator from "./components/PricingCalculator/PricingCalculator";

function App() {
  const product = useSelector((state) => state.product.productData);
  const [calc, setCalc] = useState(null);
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
          {/* <Typography variant="h1">Wybierz kalkulator</Typography> */}
          <Container
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            <Button
              variant={calc === "downsizing" ? "contained" : "outlined"}
              size="large"
              sx={{ minWidth: "150px"}}
              onClick={() => setCalc("downsizing")}
            >
              Downsizing Kalkulator
            </Button>
            <Button
              variant={calc === "pricing" ? "contained" : "outlined"}
              size="large"
              sx={{ minWidth: "150px" }}
              onClick={() => setCalc("pricing")}
            >
              Pricing Kalkulator
            </Button>
          </Container>
          {calc === "downsizing" && (
            <>
              <DownsizingCalculator />
              {product.length === 1 && <Results />}
            </>
          )}
          {calc === "pricing" && (
            <>
              <PricingCalculator />
            </>
          )}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
