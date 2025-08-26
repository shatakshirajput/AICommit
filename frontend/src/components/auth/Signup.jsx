import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../authContext";
import { Link } from "react-router-dom";
import "./auth.css";

const Signup = () => {
  const [email, setEmail] = useState("nsm@example.com");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setCurrentUser } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {  
      setLoading(true);
      const res = await axios.post("http://localhost:3000/signup", {
        email: email,
        password: password,
        username: fullName,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);

      setCurrentUser(res.data.userId);
      setLoading(false);

      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Signup Failed!");
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-card">
          <div className="signup-header">
            <h1>Create your account</h1>
            <p className="subtitle">Start your journey with AI-powered development</p>
          </div>

          <form onSubmit={handleSignup} className="signup-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div><br />

            <button type="submit" className="create-account-btn" disabled={loading}>
              {loading ? "Loading..." : "Create Account"}
            </button>

            <div className="login-link">
              Already have an account? <Link to="/auth">Sign in</Link>
            </div>
          </form>

          <div className="security-note">
            Powered by enterprise-grade security. You start a encrypted real account.
          </div>
        </div>
      </div>

      <div className="features-panel">
        <div className="features-content">
          <h1>Why developers choose
          <span class="title">  AICommit</span></h1>

          <div className="feature">
            <h3>Lightning Fast Setup</h3>
            <p>Get started in minutes with our intuitive onboarding process and a powered repository setup.</p>
          </div>

          <div className="feature">
            <h3>Enterprise Security</h3>
            <p>Enter-level encryption will security measures to keep your needs safe and secure.</p>
          </div>

          <div className="feature">
            <h3>AI-Powered Features</h3>
            <p>Automatic RSA/USB gatepredict, smart commit messages, and intelligent code analysis.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;