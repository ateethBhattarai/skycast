import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { ThemeProvider } from "./context/Theme-provider";
import Dashboard from "./pages/Dashboard";
import CityPage from "./pages/CityPage";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/city/:cityName" element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
