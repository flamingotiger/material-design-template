import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import '../../styles/bg.scss';
import {title, headerColor, headerTitle} from './headerSetting';

const cardsTitle = [
  'SEARCH',
]
const cardsImg = [
  'https://orig00.deviantart.net/f159/f/2014/339/0/1/air_flat_red_by_microfreaks-d88qqkc.png',
]
const link = [
  '/search/search',
]
const titleColor = [
  {
    color : '#FF5722',
    fontWeight:'bold',
    textAlign:'center'
}]
class Search extends Component {
    render() {
        return(
          <div>
            <Header headerTitle={headerTitle[4]} title={title} headerColor={headerColor[4]}/>
            <Cards title={cardsTitle[0]} cardsAlt={cardsTitle[0]} cardsImg={cardsImg[0]} link={link[0]} color={titleColor[0]}/>
          </div>
        );
    }
}
export default Search;
