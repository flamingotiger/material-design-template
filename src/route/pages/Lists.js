import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import '../../styles/bg.scss';
import {title, headerTitle} from './headerSetting';

const cardsTitle = [
  'MATERIAL',
  'DESIGN',
  'UI',
  'TEMPLATE'
]
const cardsImg = [
  'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0Bx4BSt6jniD7Y1huOXVQdlFPMmM/materialdesign-introduction.png',
  'https://community.thunkable.com/uploads/default/original/2X/9/9f7cf8cfa19a912c740c4d52cc8222ceb5a6719b.png',
  'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0Bx4BSt6jniD7c0R4RUtiTkhMZTQ/materialdesign-goals-system.png',
  'https://3.bp.blogspot.com/-0qdhsdCNBcU/VWVtLSFDmpI/AAAAAAAAAvg/DT7dMmlIpwg/s1600/io15material.png'
]
const link = [
  '/lists/material',
  '/lists/design',
  '/lists/ui',
  '/lists/template',
]
const titleColor = [
  {
    color : '#00bcd4',
    fontWeight:'bold',
    textAlign:'center'
}]
class Lists extends Component {
    render() {
        return(
          <div>
            <Header headerTitle={headerTitle[0]} title={title}/>
            <Cards title={cardsTitle[0]} cardsAlt = {cardsTitle[0]} cardsImg={cardsImg[0]} link={link[0]} color={titleColor[0]}/>
            <Cards title={cardsTitle[1]} cardsAlt = {cardsTitle[1]} cardsImg={cardsImg[1]} link={link[1]} color={titleColor[0]}/>
            <Cards title={cardsTitle[2]} cardsAlt = {cardsTitle[2]} cardsImg={cardsImg[2]} link={link[2]} color={titleColor[0]}/>
            <Cards title={cardsTitle[3]} cardsAlt = {cardsTitle[3]} cardsImg={cardsImg[3]} link={link[3]} color={titleColor[0]}/>
          </div>
        );
    }
    
}
export default Lists;
