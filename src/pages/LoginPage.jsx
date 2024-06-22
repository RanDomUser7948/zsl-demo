import "./LoginPage.css";
import { useState } from "react";
import zslLogo from "../assets/ZSL-LOGO.png";
import Footer from "../components/Footer";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/home");
  };

  return (
    // <div className="form-container">
    <>
      <form onSubmit={handleSubmit} className="form">
        <img src={zslLogo} alt="ZeroScienceLogo" className="form-image" />
        <h2>Sign in with credentials</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ backgroundColor: "orange" }}>
          Sign In
        </button>
        <p>
          <Link to="/signup">Click here for signup</Link>
        </p>
      </form>
      <Footer />
    </>
    // </div>
  );
};

export default LoginPage;
