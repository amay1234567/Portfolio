import React from "react";

export default function Contact() {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ backgroundColor: "rgba(0,0,0,0.75)", padding: "50px", borderRadius: "15px" }}>
        <h1>Contact</h1>
        <div className="contact-links">
          <p>
            📧 <a href="mailto:amaynaik2005@gmail.com">amaynaik2005@gmail.com</a>
          </p>
          <p>
            🌐{" "}
            <a href="https://linkedin.com/in/amay-naik-81aa462a4/">
              linkedin.com/in/amay-naik-81aa462a4
            </a>
          </p>
          <p>
            🐙 <a href="https://github.com/amay1234567">github.com/amay1234567</a>
          </p>
        </div>
      </div>
    </section>
  );
}
