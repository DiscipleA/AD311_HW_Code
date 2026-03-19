import Toolbar from './components/Toolbar';
import './App.css';

function App() {
  return (
    <div className="app-page">
      <Toolbar />

      <main className="hero">
        <div className="hero-card">
          <p className="hero-badge">React Dynamic Toolbar Assignment</p>

          <h1 className="hero-title">
            Welcome to the
            <span className="hero-highlight"> Dynamic Toolbar Demo</span>
          </h1>

          <p className="hero-text">
            This page demonstrates a data-driven React toolbar built with props,
            reusable components, and dynamic rendering using <code>.map()</code>.
          </p>

          <div className="hero-callout">
            <div className="arrow-wrap">
              <span className="arrow-text">Hover here to open the sidebar</span>
              <span className="big-arrow">⬅</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;