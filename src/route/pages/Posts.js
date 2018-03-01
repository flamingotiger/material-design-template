import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import {title, headerColor, headerTitle} from './headerSetting';
import '../../styles/bg.scss';

const cardsTitle = [
  'TODO',
  'POST',
]
const cardsImg = [
  'http://www.thebravenewworld.com/wp-content/uploads/2017/08/DIA2Post.jpg',
  'https://i.ytimg.com/vi/sfSjm-MwhNM/maxresdefault.jpg',
]
const link = [
  '/posts/todo',
  '/posts/post',
]
const titleColor = [
  {
    color : '#F44336',
    fontWeight:'bold',
    textAlign:'center'
}]

class Posts extends Component {
    render() {
        return(
          <div>
            <Header headerTitle={headerTitle[2]} title={title} headerColor={headerColor[2]}/>
            <Cards title={cardsTitle[0]} cardsAlt={cardsTitle[0]} cardsImg={cardsImg[0]} link={link[0]} color={titleColor[0]}/>
            <Cards title={cardsTitle[1]} cardsAlt={cardsTitle[1]} cardsImg={cardsImg[1]} link={link[1]} color={titleColor[0]}/>
          </div>
        );
    }
}
export default Posts;
