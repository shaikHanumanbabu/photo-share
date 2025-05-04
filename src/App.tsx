// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/ui/Navbar";
import LoginTesting from "./pages/LoginTesting";
import EventCreate from "./pages/EventCreate";
import ViewEvent from "./pages/ViewEvent";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login-backup" element={<LoginTesting />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events/create" element={<EventCreate />} />
        <Route path="/events/:eventId" element={<ViewEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
