import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { FaBrain, FaTerminal, FaDatabase, FaBolt, FaGithub, FaMagic } from "react-icons/fa";


const LandingPage = () => {
  const navigate = useNavigate();
  const features = [                                                  
    {
      icon: <FaBrain />,
      title: "AI-Generated README",
      description: "Automatically generate comprehensive README files using advanced AI models",
      gradient: "gradient-primary",
    },
    {
      icon: <FaTerminal />,
      title: "Git-Style Terminal",
      description: "Run familiar Git commands with our intuitive terminal interface",
      gradient: "gradient-secondary",
    },
    {
      icon: <FaDatabase />,
      title: "Cloud Storage",
      description: "Secure file storage and management powered by AWS S3 infrastructure",
      gradient: "gradient-primary",
    },
    {
      icon: <FaBolt />,
      title: "Lightning Fast",
      description: "Optimized performance with instant file loading and real-time collaboration",
      gradient: "gradient-secondary",
    },
    {
      icon: <FaGithub />,
      title: "GitHub-Like Interface",
      description: "Familiar interface that developers love with modern AI enhancements",
      gradient: "gradient-primary",
    },
    {
      icon: <FaMagic />,
      title: "Smart Analytics",
      description: "AI-powered insights into your coding patterns and repository health",
      gradient: "gradient-secondary",
    },
  ];

  return (
    <div className="lp-root">
      {/* NAVBAR */}
      <header className="lp-nav">
        <div className="lp-wrap lp-nav-inner">
          <div className="lp-nav-left">
            <div className="lp-logo-mark">{`</>`}</div>
            <div className="lp-logo-text">AICommit</div>
          </div>

          <nav className="lp-nav-center">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#docs">Docs</a>
          </nav>

          <div className="lp-nav-right">
            <button className="lp-link-btn" onClick={() => navigate("/auth")}>
              Sign In
            </button>
            <button
              className="lp-btn lp-btn-primary"
              onClick={() => navigate("/auth")}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="lp-hero">
        <div className="lp-wrap">
          <div className="lp-badge animate-float">⚡ AI-Powered Development</div>

          <h1 className="lp-title">
            The Future of
            <br />
            <span className="lp-title-accent">Code Collaboration</span>
          </h1>

          <p className="lp-subtext">
            AICommit combines the power of GitHub with cutting-edge AI to
            revolutionize how developers create, manage, and collaborate on code
            repositories.
          </p>

          <div className="lp-cta-row">
            <button
              className="lp-btn lp-btn-primary lp-btn-lg"
              onClick={() => navigate("/auth")}
            >
              Start Building
              <span className="lp-arrow">➜</span>
            </button>

            <a
              className="lp-btn lp-btn-ghost lp-btn-lg"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              🐙 View on GitHub
            </a>
          </div>

          <div className="lp-stats">
            <div className="lp-stat">
              <span className="lp-stat-ico">⭐</span> 4.9/5 Rating
            </div>
            <div className="lp-stat">
              <span className="lp-stat-ico">📂</span> 10k+ Repositories
            </div>
            <div className="lp-stat">
              <span className="lp-stat-ico">📝</span> 50k+ Commits
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2>Powerful Features</h2>
          <p>
            Everything you need to manage your code repositories with the power of AI
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className={`feature-icon ${feature.gradient}`}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section>
      <div class = "dashboard-title" > 
        <h1>DashBoard</h1>
      </div>
      <div className="dashboard-img">
        <img src="/loginsignupimg.avif" alt="dashboard" />
      </div>
    </section>

    <section>
      <div class = "dashboard-title" > 
        <h1>Repository operations in seconds...</h1>
      </div>
      <div className="dashboard-img">
        <img src="/loginsignupimg.avif" alt="repo page img " />
      </div>
    </section>

    </div>
  );
};

export default LandingPage;
