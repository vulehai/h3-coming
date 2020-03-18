import React, {Component} from 'react';
import './App.css';
import ComingSoon from 'react-coming-soon';
import Avatar, {ConfigProvider} from 'react-avatar';
import SkypeSource from 'react-avatar/es/sources/Skype';
import {createAvatarComponent, TwitterSource} from 'react-avatar';
class App extends Component {
  componentDidMount() {
    document.title = 'H3Soft';
  }
  render() {
    return (
      <ComingSoon
        image="https://react-coming-soon.maksv.me/default-image.jpeg"
        bgColor="#fff"
        textColor="#000"
        illustration="development"
        date="05/07/2020"
        title="H3Corp - H3Soft - We coming soon"
      >
        <div>
          <Avatar facebookId="100003309642690" size="60" round={true} />
          <Avatar facebookId="100003204313279" size="60" round={true} />
          <Avatar facebookId="100044678270829" size="60" round={true} />
        </div>
      </ComingSoon>
    );
  }
}

export default App;
