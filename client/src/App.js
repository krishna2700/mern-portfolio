import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReloadData, setPortfolioData } from "./Redux/rootSlice";
import Loader from "./components/Loader";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Admin/Login";
import API_URL from "./config/api";

function App() {
  const { loading, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/api/portfolio/get-portfolio-data`
      );
      dispatch(setPortfolioData(res.data));
      dispatch(ReloadData(false));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData]);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
