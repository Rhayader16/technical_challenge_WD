import { useEffect, useState } from "react";
import "./App.css";
import { Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import PhoneDetails from "./pages/PhoneDetails";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

function App() {
  const [phoneList, setPhoneList] = useState([]);
  const [fetchinPhone, setFetchingPhones] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getPhoneList();
  }, []);

  const getPhoneList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/phones`
      );
      setTimeout(() => {
        setPhoneList(respone.data);
        setFetchingPhones(false);
      }, 1000);
    } catch (error) {
      navigate("/error");
    }
  };

  if (fetchinPhone) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="App">
        <MyNavbar phoneList={phoneList} />

        <div id="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/phone-details/:phoneId" element={<PhoneDetails />} />
            <Route path="/error" element={<Error />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
