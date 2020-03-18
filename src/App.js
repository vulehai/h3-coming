import React from 'react';
import './App.css';
import ComingSoon from 'react-coming-soon';

function App() {
  return (
    <ComingSoon
      image="https://react-coming-soon.maksv.me/default-image.jpeg"
      bgColor="#fff"
      textColor="#000"
      illustration="development"
      date="12/12/2020"
    />
  );
}

export default App;
