import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Graph.scss';
import Chart from '../../components/Chart/Chart';

const cx = classNames.bind(styles);

class Graph extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{}
    }
  }
  componentWillMount(){
    this.getChartData();
  }
  getChartData(){
    //Ajax calls here
    this.setState({
      chartData:{
  				labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  				datasets:[
  					{
  						label:'Population',
  						data:[
  							621212,
  							281212,
  							101212,
  							181212,
  							921212,
  							421212
  						],
  						backgroundColor:[
  							'rgba(255, 99, 132, 0.6)',
  							'rgba(54, 162, 86, 0.6)',
  							'rgba(75, 206, 192, 0.6)',
  							'rgba(153, 192, 255, 0.6)',
  							'rgba(255, 102, 64, 0.6)',
  							'rgba(255, 159, 132, 0.6)'
  						]
  					}
  				]
        }
    });
  }
    render() {
        return(
          <div>
            <div className={cx('hd')}>Graph</div>
              <div className={cx('content')}>
                <Chart 
                  chartData={this.state.chartData} 
                  location='차트제목입니다'
                  legendPosition='bottom'
                  />
              </div>
          </div>
        );
    }
}
export default Graph;
