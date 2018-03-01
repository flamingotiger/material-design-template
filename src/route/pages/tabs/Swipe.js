import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
import {title, headerColor} from '../headerSetting/headerSetting';

const headerTitle = [
  'SWIPE'
]

class Swipe extends Component {
    render() {
        return(
            <div>
              <Header headerTitle={headerTitle[0]} title={title} headerColor={headerColor[1]}/>
              스와이프
            </div>
        );
    }
}
export default Swipe;