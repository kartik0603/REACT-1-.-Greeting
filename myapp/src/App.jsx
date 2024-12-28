
import React from 'react';
import Greeting from './greeting';
import UserProfileCard from './profile';
import StyledComponent from './style';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
    
      <Greeting name="Kartik" />

     
      <UserProfileCard
        name="Kartik Hirapara"
        age={25}
        bio="A  Web Developer "
        location="Surat, Gujarat"
        profilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcNzOsRzCxg9pCgc7OucCL0lNmIDI5qiUpQ&s"
      />


<UserProfileCard
        name="GHOST"
        age={250}
        bio="GHOST DARK WEB "
        location="Moon On Earth"
        profilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmCfH58_M_pkeqMkRvVYgf75ZBXcOZRT_Og&s"
      />

      <StyledComponent isStyled={true}/>
      <StyledComponent isStyled={false}/>

    </div>
  );
};

export default App;
