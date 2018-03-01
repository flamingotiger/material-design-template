import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
import {title, headerColor} from '../headerSetting/headerSetting';
import SlideTab from './SlideTab';

const headerTitle = [
  'Slide'
]

class Slide extends Component {
    render() {
        return(
            <div>
              <Header headerTitle={headerTitle[0]} title={title} headerColor={headerColor[1]}/>
              <SlideTab />
            </div>
        );
    }
}
export default Slide;