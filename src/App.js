import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AdminView from "./components/AdminView";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin-view" element={<AdminView />} />
        <Route exact path="/booking-page" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
