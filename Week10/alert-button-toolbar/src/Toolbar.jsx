import AlertButton from './AlertButton';
import './Toolbar.css';

function Toolbar() {
  return (
    <div className="toolbar-sidebar">
      <div className="toolbar-handle">☰ Menu</div>

      <div className="toolbar-content">
        <h2 className="toolbar-title">Quick Actions</h2>

        <AlertButton message="Playing music!">
          Play
        </AlertButton>

        <AlertButton message="Uploading file!">
          Upload
        </AlertButton>

        <AlertButton message="Sharing content!">
          Share
        </AlertButton>
      </div>
    </div>
  );
}

export default Toolbar;