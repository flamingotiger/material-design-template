import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
import {title, headerColor} from '../headerSetting/headerSetting';
import ListCards from '../../../components/ListCards/ListCards';

const headerTitle = [
  'MATERIAL',
  'DESIGN',
  'UI',
  'TEMPLATE',
]

class Design extends Component {
    render() {
        return(
          <div>
            <Header headerTitle={headerTitle[1]} title={title} headerColor={headerColor[0]}/>
            <ListCards />
          </div>
        );
    }
}
export default Design;