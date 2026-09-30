import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <nav className="navbar">
        <h2>CI/CD Demo</h2>

        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("about")}>About</button>
        </div>
      </nav>

      <main className="content">
        {page === "home" ? (
          <div className="card">
            <h1>Welcome 👋</h1>
            <p>This is my React CI/CD learning project.</p>
            <button onClick={() => setPage("about")}>
              Go to About
            </button>
          </div>
        ) : (
          <div className="card">
            <h1>About</h1>
            <p>
              I am learning how React projects are automatically
              built and deployed using GitHub Actions and AWS.
            </p>
            <button onClick={() => setPage("home")}>
              Back to Home
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;