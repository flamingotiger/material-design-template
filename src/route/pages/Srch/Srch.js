import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
import {title, headerColor} from '../headerSetting/headerSetting';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List } from 'material-ui/List';
import ListCard from '../../../components/ListCards/ListCard';
import classNames from 'classnames/bind';
import styles from './Srch.scss';

const cx = classNames.bind(styles);

const headerTitle = [
  'SEARCH',
]
class Srch extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword:'',
      contactData:[
        {
        primaryText: 'Brendan Lim',
        secondaryText: 'Hello',
        src: '/imgs/',
        bool: true,
      },{
        primaryText: 'Grace Ng',
        secondaryText: 'Hello',
        src: '/imgs/',
        bool: false,
      },{
        primaryText: 'Kerem Suer',
        secondaryText: 'Hello',
        src: '/imgs/',
        bool: false,
      },{
        primaryText: 'Eric Hoffman',
        secondaryText: 'Hello',
        src: '/imgs/',
        bool: false,
      },{
        primaryText: 'Raquel Parrado',
        secondaryText: 'Hello',
        src: '/imgs/',
        bool: false,
      }]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      keyword: e.target.value
    });
  }
    render() {
      const mapToComponents = (data) =>{
        data.sort();
        data = data.filter(
          (contact) => {
            return contact.primaryText.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
          }
        )
        return data.map((contact, i) => {
          return (
            <ListCard
              primaryText={contact.primaryText}
              secondaryText={contact.secondaryText}
              src={contact.src + (i+1) + '.jpg'}
              nestedSrc={contact.src + (i+2) + '.jpg'}
              bool={contact.bool}
              key={i}
            />
          )
        })
      }
        return(
            <div>
              <Header headerTitle={headerTitle[0]} title={title} headerColor={headerColor[4]}/>
              <div className ={cx('srch_bg')} >
                <form className={cx('srch_form')}>
                  <input
                    className={cx('srch_input')}
                    value={this.state.keyword}
                    name='keyword'
                    placeholder='SEARCH'
                    onChange={this.handleChange}
                  />
                  <div className={cx('srch_btn')}>
                    <svg fill="rgba(255,255,255,0.5)" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                  </div>
                </form>
                </div>
                <MuiThemeProvider>
                    <List>
                      <div>{mapToComponents(this.state.contactData)}</div>
                    </List>
                </MuiThemeProvider>
            </div>
        );
    }
}
export default Srch;
