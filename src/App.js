import { ThemeProvider } from "@mui/material/styles";
import { Button, Container } from "@mui/material";

import "./App.css";
import { theme } from "./theme/theme";
import logo from "./images/BeskidzkieLogo.png";
import DownsizingCalculator from "./components/DownsizingCalculator/DownsizingCalculator";
import DCResults from "./components/DCResults/DCResults";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PricingCalculator from "./components/PricingCalculator/PricingCalculator";
import PCResults from "./components/PCResults/PCResults";

function App() {
  const product = useSelector((state) => state.product.productData);
  const [calc, setCalc] = useState(null);

  useEffect(() => {
    // console.log(product)
  })
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
              padding: "0",
              margin: "0 0 30px 0",
             
            }}
          >
            <Button
              variant={calc === "downsizing" ? "contained" : "outlined"}
              size="large"
              sx={{ flexBasis: "260px"}}
              onClick={() => setCalc("downsizing")}
            >
              Downsizing Kalkulator
            </Button>
            <Button
              variant={calc === "pricing" ? "contained" : "outlined"}
              size="large"
              sx={{ flexBasis: "260px" }}
              onClick={() => setCalc("pricing")}
            >
              Pricing Kalkulator
            </Button>
          </Container>
          {calc === "downsizing" && (
            <>
              <DownsizingCalculator />
              {product.length === 1 && product[0].type ? <DCResults /> : null}
            </>
          )}
          {calc === "pricing" && (
            <>
              <PricingCalculator />
              {product.length === 1 && product[0].factor ? <PCResults/> : null}
            </>
          )}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
