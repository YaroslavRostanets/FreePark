import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class HelloWorld extends Component {
    render() {
      let picUrl = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };

        return (
            <Image source={picUrl} style={{width: 193, height: 110}}/>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => HelloWorld);
