import FeatureToggle from "./components/FeatureToggle";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Feature Toggle Demo</h1>

      {/* Feature 1 */}
      <FeatureToggle
        isEnabled={true}
        featureName="New Dashboard"
      />

      {/* Feature 2 */}
      <FeatureToggle
        isEnabled={false}
        featureName="Advanced Analytics"
      />

      {/* Feature 3 */}
      <FeatureToggle
        isEnabled={false}
        featureName="Dark Mode"
      />

      {/* Feature 4 */}
      <FeatureToggle
        isEnabled={false}
        featureName="AI Recommendations"
      />
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
