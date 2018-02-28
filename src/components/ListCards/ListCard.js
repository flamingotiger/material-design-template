import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

const styles = {
    paper:{
      width: '95%',
      margin: 'auto',
      marginTop: '10px',
      display: 'block',
    },
    profile:{
      padding: '45px 10px 50px 20px',
    },
    img:{
      width: '60px',
      height: '60px',
      marginRight: '20px',
      left: 0,
      top: '8px',
    }
  };
  

class ListCard extends Component{
  render(){
    return (
        <Paper style={styles.paper} zDepth={2} >
          <ListItem style={styles.profile}
            value={1}
            primaryText={this.props.primaryText}
            secondaryText={this.props.secondaryText}
            leftAvatar={<Avatar style={styles.img} src={this.props.src} />}
            nestedItems={
               this.props.bool ?
              [<ListItem
                  value={2}
                  primaryText={this.props.primaryText}
                  secondaryText={this.props.secondaryText}
                  leftAvatar={<Avatar src={this.props.nestedSrc} />}
                />] : []
              }  
            />
        </Paper>
    )
  }
  };

export default ListCard;