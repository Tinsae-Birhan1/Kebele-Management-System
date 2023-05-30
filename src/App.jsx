import Header from "./components/Header/Header.jsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/1.home/home.jsx";
import Services from "./pages/3.services/services.jsx";
import Admin from "./pages/admin/admin.jsx";
import IDForm from "./components/Forms/IdForm/IDForm.jsx";
import Login from "./components/Auth 2/Login.jsx";
import AuthPage from "./components/authForms/AuthComponent.jsx";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/admin/*" Component={Admin} />
        <Route path="/application/id" Component={IDForm} />
        <Route path="/users/login" Component={Login} />
        <Route path="/users/auth" Component={AuthPage} />
      </Routes>
    </Router>
  );
}

export default App;
