import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import SvgIcon from 'material-ui/SvgIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Nav from '../Nav/Nav';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import styles from './styles';
import MenuItem from 'material-ui/MenuItem';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false, setopen: false,
      };
    }
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});
    
    setToggle =() => this.setState({setopen: !this.state.setopen});
    setClick = (event) => {
      // This prevents ghost click.
      event.preventDefault();

      this.setState({
        setopen: true,
        anchorEl: event.currentTarget,
      });
    };
    setRequestClose = () => {
    this.setState({
      setopen: false,
      });
    };
    render() {
        return(
          <div>
            <MuiThemeProvider>
              <AppBar
                className='appBar'
                style={this.props.headerColor}
                title={this.props.headerTitle}
                titleStyle={styles.appBar}
                label="Open Drawer"
                iconElementLeft={
                  <SvgIcon onClick={this.handleToggle} style={styles.menuColor} >
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                  </SvgIcon>
                }
                iconElementRight={
                  <div>
                  <SvgIcon onClick={this.setClick} style={styles.menuColor} >
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                  </SvgIcon>
                    <Popover
                      open={this.state.setopen}
                      anchorEl={this.state.anchorEl}
                      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      onRequestClose={this.setRequestClose}
                    >
                      <Menu>
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Sign in" />
                      </Menu>
                    </Popover>
                  </div> 
                }
              />
               
              </MuiThemeProvider>
              <MuiThemeProvider>
              <Drawer
                docked={false}
                width={280}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
              >
              <div 
                className='navAppBar'
                style={styles.navAppBar}
                onClick={this.handleClose} 
              >
                <div>
                  Material Design UI <br/>Template WebApp
                </div>
                <div style={styles.small}>
                  This is react WebApp
                </div>
                <RaisedButton
                  href="https://github.com/honghakbum"
                  target="_blank"
                  label="Github"
                  secondary={true}
                  style={styles.button}
                />
              </div>
              <div onClick={this.handleClose}>
                <Nav title={this.props.title}/>
              </div>
              </Drawer>
            </MuiThemeProvider>
          </div>
        );
    }
}

export default Header;
