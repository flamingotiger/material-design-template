import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import {title, headerTitle} from './headerSetting';

class Nomatch extends Component {
    render() {
      console.log()
        return(
          <div>
            <div>
              <Header headerTitle={headerTitle[5]} title={title}/>
              <h1>404 NOT FOUND</h1>
                  <p>찾으시는 페이지가 없습니다. 주소가 맞는지 다시 한 번 확인해주세요.</p>
              </div>
          </div>
        );
    }
}
export default Nomatch;
