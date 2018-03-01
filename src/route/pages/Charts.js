import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import '../../styles/bg.scss';
import {title, headerColor, headerTitle} from './headerSetting';

const cardsTitle = [
  'BAR',
  'DOUGHNUT',
  'LINE',
  'PIE',
]
const cardsImg = [
  'https://onaircode.com/wp-content/uploads/2018/02/Material-Design-Cards-1280x640.jpg',
  'https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/news_specmay2016update.png',
  'http://www.img.lirent.net/2014/10/Android-Lollipop-wallpapers-IdeaL-Lime-Green.jpg',
  'http://www.smscentral.com.au/wp-content/uploads/112.jpg'
]
const link = [
  '/Charts/bar',
  '/Charts/doughnut',
  '/Charts/line',
  '/Charts/pie',
]
const titleColor = [
  {
    color : '#66BB6A',
    fontWeight:'bold',
    textAlign:'center'
}]
class Charts extends Component {
    render() {
        return(
          <div>
            <Header headerTitle={headerTitle[3]} title={title} headerColor={headerColor[3]}/>
            <Cards title={cardsTitle[0]} cardsAlt={cardsTitle[0]} cardsImg={cardsImg[0]} link={link[0]} color={titleColor[0]}/>
            <Cards title={cardsTitle[1]} cardsAlt={cardsTitle[1]} cardsImg={cardsImg[1]} link={link[1]} color={titleColor[0]}/>
            <Cards title={cardsTitle[2]} cardsAlt={cardsTitle[2]} cardsImg={cardsImg[2]} link={link[2]} color={titleColor[0]}/>
            <Cards title={cardsTitle[3]} cardsAlt={cardsTitle[3]} cardsImg={cardsImg[3]} link={link[3]} color={titleColor[0]}/>
          </div>
        );
    }
    
}
export default Charts;
