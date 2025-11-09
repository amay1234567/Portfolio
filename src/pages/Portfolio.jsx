import React from "react";

export default function Portfolio() {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ backgroundColor: "rgba(0,0,0,0.7)", padding: "50px", borderRadius: "15px" }}>
        <h1>Portfolio</h1>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <h3>AI Debate Arena</h3>
            <p>
              A full-stack web app using Next.js and Tailwind CSS that lets users debate
              with AI-powered opponents using Google Generative AI API.
            </p>
          </div>
          <div className="portfolio-item">
            <h3>Waste Collection Management System</h3>
            <p>
              A Node.js + Express app that digitizes waste collection requests
              with pin-code mapping and real-time tracking.
            </p>
          </div>
          <div className="portfolio-item">
            <h3>Certifications</h3>
            <p>
              • The Complete 2025 Web Development Bootcamp (Udemy)<br />
              • Python for Data Science (Coursera)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
