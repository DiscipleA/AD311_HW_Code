import Toolbar from './Toolbar';

function App() {
  return (
    <div>
      <Toolbar />
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>
        Custom Alert Buttons
      </h1>
      <p style={{ textAlign: 'center' }}>
        Hover over the left side of the screen to open the toolbar.
      </p>
    </div>
  );
}

export default App;