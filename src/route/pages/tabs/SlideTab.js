import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Cards from '../../../components/Cards/Cards';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 10,
    marginBottom: 12,
    fontWeight: 400,
    marginLeft:20
  },
  tab: {
    background:'rgb(103, 58, 183)',
    letterSpacing:4
  }
};

class SlideTab extends Component {
  constructor(props){
    super(props);
    this.state = {
      slideIndex: 0,
      iron:[
        {
          url:'https://chakuti.files.wordpress.com/2011/01/iron_man_v3.jpg',
          title: 'iron man1',
          link:'/tab/slide',
        },
        {
          url:'https://moatoon.com/data/file/mov/thumb-1511439074349_600x855.jpg',
          title: 'iron man2',
          link:'/tab/slide',
        },
        {
          url:'http://cfile23.uf.tistory.com/image/26605E50517BCCAB31EB5E',
          title: 'iron man3',
          link:'/tab/slide',
        }
      ],
      captain:[
        {
          url:'http://mblogthumb1.phinf.naver.net/20140210_260/7lovei_1392038142650hrSaE_JPEG/1.jpg?type=w2',
          title: 'CAPTAIN AMERICA1',
          link:'/tab/slide',
        },
        {
          url:'http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2014/03/2014032414231643242-540x769.jpg',
          title: 'CAPTAIN AMERICA2',
          link:'/tab/slide',
        },
        {
          url:'http://uc.herocomics.kr/b/b3/image_QwYlGcK.jpg',
          title: 'CAPTAIN AMERICA3',
          link:'/tab/slide',
        }
      ],
      thor:[
        {
          url:'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/5a/Thor_Official_Poster.jpg/revision/latest?cb=20121220212004',
          title: 'thor1',
          link:'/tab/slide',
        },
        {
          url:'https://vignette.wikia.nocookie.net/theavengersmovie/images/9/93/Thor_The_Dark_World_Poster.jpg/revision/latest?cb=20130920071146',
          title: 'thor2',
          link:'/tab/slide',
        },
        {
          url:'http://cfile10.uf.tistory.com/image/99F92F3359FAF09D1F2E69',
          title: 'thor3',
          link:'/tab/slide',
        }
      ]
    }
  }
  handleChange = (value) =>{
    this.setState({
      slideIndex: value,
    });
  }
    render() {
      const pictureMap = (data) => {
        return data.map((contact, i) => {
          return (
            <Cards 
              cardsImg={contact.url}
              title={contact.title}
              link={contact.link}
              key={i}
            />
          )
          })
      }
        return(
          <div>
            <MuiThemeProvider>
              <Tabs
                onChange={this.handleChange}
                value={this.state.slideIndex}
              >
                <Tab label="ironman" value={0} buttonStyle={styles.tab} />
                <Tab label="captain" value={1} buttonStyle={styles.tab} />
                <Tab label="thor" value={2} buttonStyle={styles.tab} />
              </Tabs>
            </MuiThemeProvider>
            <MuiThemeProvider>
              <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={this.handleChange}
              >
                <div>
                  <h2 style={styles.headline}>This is a ironman</h2>
                  <div>{pictureMap(this.state.iron)}</div>
                </div>
                <div>
                  <h2 style={styles.headline}>This is a Chaptain</h2>
                  <div>{pictureMap(this.state.captain)}</div>
                </div>
                <div>
                  <h2 style={styles.headline}>This is a Thor</h2>
                  <div>{pictureMap(this.state.thor)}</div>
                </div>
              </SwipeableViews>
            </MuiThemeProvider>
          </div>
        );
    }
}
export default SlideTab;