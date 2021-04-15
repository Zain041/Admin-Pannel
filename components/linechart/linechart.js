import React, { Component } from 'react'
import {Chart} from 'react-google-charts'

export default class LineChart extends Component {
    render() {
        return (
            <div>
                <Chart
  width={'100%'}
  height={'322px'}
  color="#7F48F7"
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['', ''],
    [0, 0],
    [1, 5],
    [2, 16],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ]}
  options={{
      colors:['#7F48F7'],
    hAxis: {
    //   title: 'Time',
    },
    vAxis: {
    //   title: 'Popularity',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>  
            </div>
        )
    }
}
