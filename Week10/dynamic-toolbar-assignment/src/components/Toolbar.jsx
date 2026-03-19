import AlertButton from './AlertButton';
import './Toolbar.css';

function Toolbar() {
  const buttons = [
    { id: 1, message: 'Downloading!', children: 'Download File' },
    { id: 2, message: 'Sharing!', children: 'Share Document' },
    { id: 3, message: 'Deleting!', children: 'Delete Item' },
    { id: 4, message: 'Uploading!', children: 'Upload Media' },
  ];

  return (
    <div className="toolbar-sidebar">
      <div className="toolbar-tab">Tools</div>
      <div className="toolbar-content">
        <h2>Toolbar</h2>

        {buttons.map((btn) => (
            <AlertButton
            key={btn.id}
            message={btn.message}
            >
            {btn.children}
            </AlertButton>
        ))}
      </div>
    </div>
  );
}

export default Toolbar;