import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { NavLink } from 'react-router-dom';
import SvgIcon from 'material-ui/SvgIcon';
import {List, ListItem} from 'material-ui/List';

const styles = {
  navLink: {
    width: '90%',
    height: '66px',
    marginTop: 10,
    marginLeft: '5%',
    textAlign: 'left',
    display: 'inline-block',
  },
  navLinkText: {
    fontSize: '14px',
    color: 'rgb(0, 188, 212)',
    lineHeight: '35px',
    padding:0,
    fontWeight: 'bold'
  },
  svgcolor: {
    color:'rgba(0,0,0,0.2)',
    marginTop: '22px',
  },
}

class Nav extends Component {
    render() {
        return(
          <div>
          <List>
            <NavLink exact to='/'>
              <Paper style={styles.navLink} zDepth={1} rounded={false}>
                <ListItem style = {styles.navLinkText}
                    primaryText={this.props.title[0]} 
                    leftIcon={
                      <SvgIcon color={'rgba(0,0,0,0.2)'} style={styles.svgcolor}>
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                      </SvgIcon>
                    }
                  >
                </ListItem>
              </Paper>
            </NavLink>
            <NavLink exact to='/tab'>
              <Paper style={styles.navLink} zDepth={1} rounded={false}>
                <ListItem style = {styles.navLinkText}
                    primaryText={this.props.title[1]}
                    leftIcon={
                      <SvgIcon color={'rgba(0,0,0,0.2)'} style={styles.svgcolor}>
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                      </SvgIcon>
                    }
                  >
                </ListItem>
              </Paper>
            </NavLink>
            <NavLink exact to='/posts'>
              <Paper style={styles.navLink} zDepth={1} rounded={false}>
                <ListItem style = {styles.navLinkText}
                    primaryText={this.props.title[2]}
                    leftIcon={
                      <SvgIcon color={'rgba(0,0,0,0.2)'} style={styles.svgcolor}>
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                      </SvgIcon>
                    }
                  >
                </ListItem>
              </Paper>
            </NavLink>
            <NavLink exact to='/charts'>
              <Paper style={styles.navLink} zDepth={1} rounded={false}>
                <ListItem style = {styles.navLinkText}
                    primaryText={this.props.title[3]}
                    leftIcon={
                      <SvgIcon color={'rgba(0,0,0,0.2)'} style={styles.svgcolor}>
                        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                      </SvgIcon>
                    }
                  >
                </ListItem>
              </Paper>
            </NavLink>
            <NavLink exact to='/search'>
              <Paper style={styles.navLink} zDepth={1} rounded={false}>
                <ListItem style = {styles.navLinkText}
                    primaryText={this.props.title[4]}
                    leftIcon={
                      <SvgIcon color={'rgba(0,0,0,0.2)'} style={styles.svgcolor}>
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                      </SvgIcon>
                    }
                  >
                </ListItem>
              </Paper>
            </NavLink>
            </List>
          </div>
        );
    }
}
export default Nav;
