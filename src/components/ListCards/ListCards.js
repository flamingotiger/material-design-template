import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List } from 'material-ui/List';
import ListCard from './ListCard';

class ListCards extends Component{
  constructor(props){
    super(props);
    this.state={
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
    };
  }
  render(){
    const mapToComponents = (data) =>{
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
    return (
    <MuiThemeProvider>
        <List>
          <div>{mapToComponents(this.state.contactData)}</div>
        </List>
    </MuiThemeProvider>
    )
  }
};

export default ListCards;