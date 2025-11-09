import React from "react";

export default function About() {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ backgroundColor: "rgba(0,0,0,0.7)", padding: "50px", borderRadius: "15px" }}>
        <h1>About Me</h1>
        <p>
          I’m <b>Amay Santosh Naik</b>, a passionate Software Engineer from Mangaluru, Karnataka.<br />
          Currently pursuing my Bachelor of Engineering in Computer Science at Canara Engineering College.
        </p>

        <div className="skills">
          <div className="skill-box">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React.js</p>
          </div>
          <div className="skill-box">
            <h3>Backend</h3>
            <p>Node.js, Express, MySQL</p>
          </div>
          <div className="skill-box">
            <h3>Languages</h3>
            <p>Python, Java, SQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
