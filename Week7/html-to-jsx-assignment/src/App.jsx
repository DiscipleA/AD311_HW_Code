import React from 'react';

function App() {
  return <UserProfile name = 'Anonymous' email = 'anon@anon.anon' />;
}

function UserProfile(props) {
  return (
      <div className='profile-card'>
        <h2>Anonymous Profile</h2>
        <Avatar user = {{ name: 'Anonymous', avatarPath: "/src/assets/unknown.jpg"}}/>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <a href = {`mailto:${props.email}`}>Send Email</a>
      </div>
  );
}

function Avatar({user, size}) {
  return (
    <img 
      className='profile-avatar' 
      src={user.avatarPath} 
      alt={user.name} 
      width={size} 
      height={size}
    />
  );
}


export default App;