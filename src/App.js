// Styling
import { GlobalStyle, ThemeButton } from "./styles";

// Components

import CookieList from "./components/ProductList";
import Home from "./components/Home";
import themes from "./Themeing/Theme";
import { ThemeProvider } from "styled-components";
//import { ThemeToggler } from "./Themeing/UseTheme";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    if (theme === themes.light) setTheme(themes.dark);
    else setTheme(themes.light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>Switch Theme</ThemeButton>
      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
