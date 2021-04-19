import React, { Component } from 'react'
import { Chart } from 'react-google-charts'

export default class LineChart extends Component {
  render() {
    return (
      <div>
        <Chart
          width={'100%'}
          height={'325px'}
          color="#7F48F7"
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['', ''],
            [1, 10],
            [2, 23],
            [3, 17],
            [4, 18],
            [5, 9],
            [6, 11],
            [7, 27],
            [8, 33],
            [10, 4],
            [12, 32],
            [15, 50],
          ]}
          options={{
            colors: ['#7F48F7'],
            curveType: 'function',
            legend: { position: 'none' },
            chartArea: { 'width': '85%', 'height': '75%' },
            smoothLine: true,
            tooltip: {
              isHtml: true
            },
            hAxis: {
              gridlines: {
                count: 0
              },
              viewWindow: {
                min: 1,
                max: 15
              },
            },
            vAxis: {
              viewWindow: {
                min: 0,
                max: 50
              },
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}
