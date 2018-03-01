import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
import {title, headerColor} from '../headerSetting/headerSetting';

const headerTitle = [
  'TODO',
  'POST',
]
class Post extends Component {
    render() {
        return(
            <div>
              <Header headerTitle={headerTitle[1]} title={title} headerColor={headerColor[2]}/>
            Post
            </div>
        );
    }
}
export default Post;