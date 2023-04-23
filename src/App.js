import { useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Container } from "@mui/material";

import logo from "./images/BeskidzkieLogo.png";
import "./App.css";
import { theme } from "./theme/theme";

import DownsizingCalculator from "./components/DownsizingCalculator/DownsizingCalculator";
import DCResults from "./components/DCResults/DCResults";

import PricingCalculator from "./components/PricingCalculator/PricingCalculator";
import PCResults from "./components/PCResults/PCResults";

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
          <img
            src={logo}
            className="logo"
            alt="logo"
            style={{ marginTop: "32px" }}
          />

          <Container
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "0",
              margin: "0 0 30px 0",
            }}
          >
            <Button
              variant={calc === "pricing" ? "contained" : "outlined"}
              size="large"
              sx={{ flexBasis: "260px" }}
              onClick={() => setCalc("pricing")}
            >
              Pricing Kalkulator
            </Button>
            <Button
              variant={calc === "downsizing" ? "contained" : "outlined"}
              size="large"
              sx={{ flexBasis: "260px" }}
              onClick={() => setCalc("downsizing")}
            >
              Downsizing Kalkulator
            </Button>
            
          </Container>
          {calc === "pricing" && (
            <>
              <PricingCalculator />
              {product.length === 1 && product[0].factor ? <PCResults /> : null}
            </>
          )}
          {calc === "downsizing" && (
            <>
              <DownsizingCalculator />
              {product.length === 1 && product[0].type ? <DCResults /> : null}
            </>
          )}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
