import React from 'react';

const UserProfileCard = ({ name, age, bio, location, profilePicture }) => {
  return (
    <div style={styles.card}>
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        style={styles.profilePicture}
      />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>{bio}</p>
      <button style={styles.button}>Follow</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '300px',
    textAlign: 'center',
    margin: '10px auto',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  profilePicture: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#009bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UserProfileCard;
