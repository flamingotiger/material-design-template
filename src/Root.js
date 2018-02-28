import React, { Component } from 'react';
import { BrowserRoute } from 'react-router-dom';
import App from './App';

class Root extends Component {
    render() {
        return(
          <BrowserRoute>
            <App/>
          </BrowserRoute>
        );
    }
}
export default Root;
