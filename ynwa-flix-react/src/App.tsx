import React from "react";

import "./App.css";
import Home from "./components/Home/Home";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./common/theme/theme";
import About from "./components/Home/About";
import MainLayout from "./layout/MainLayout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
