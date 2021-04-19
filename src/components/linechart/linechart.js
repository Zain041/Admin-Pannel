import React, { Component } from 'react'
import { Chart } from 'react-google-charts'

export default class LineChart extends Component {
  render() {
    return (
      <div>
        <Chart
          width={'100%'}
          height={'425px'}
          color="#7F48F7"
          chartType="LineChart"
          loader={<div>Loading Chart</div>}

          data={[
            // Note the third column definition
            ["x", "y", { role: "tooltip", type: "string", p: { html: true } }],
            [1, 400, returnToolTip(1400, '01/15/2020')],
            [2, 100, returnToolTip(2100, '01/15/2020')],
            [3, 500, returnToolTip(3500, '01/15/2020')],
            [4, 100, returnToolTip(4100, '01/15/2020')],
            [5, 600, returnToolTip(5600, '01/15/2020')],
            [6, 800, returnToolTip(6800, '01/15/2020')],
            [7, 100, returnToolTip(7100, '01/15/2020')],
            [8, 700, returnToolTip(8700, '01/15/2020')],
            [9, 100, returnToolTip(9100, '01/15/2020')],
            [10, 600, returnToolTip(10600, '01/15/2020')],
            [11, 400, returnToolTip(11400, '01/15/2020')],
            [12, 900, returnToolTip(12900, '01/15/2020')],
            [13, 500, returnToolTip(13500, '01/15/2020')],
            [14, 100, returnToolTip(14100, '01/15/2020')],
            [15, 900, returnToolTip(1590, '01/15/2020')],
            [16, 400, returnToolTip(16400, '01/15/2020')],
            [17, 1800, returnToolTip(171800, '01/15/2020')],
            [18, 500, returnToolTip(18500, '01/15/2020')],
            [19, 100, returnToolTip(19100, '01/15/2020')],
            [20, 600, returnToolTip(20600, '01/15/2020')],
          ]}
          
          options={{
            colors: ['#7F48F7'],
            curveType: 'function',
            legend: { position: 'none' },
            chartArea: { 'width': '85%', 'height': '75%' },
            smoothLine: true,
            tooltip: {
              isHtml: true, trigger: "visible"
            },
            hAxis: {
              title: 'X-axis',
              gridlines: {
                count: 0
              },
              viewWindow: {
                min: 1,
                max: 15
              },
            },
            vAxis: {
              title: 'Y-axis',
              viewWindow: {
                min: 0,
                max: 1800
              },
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}

function returnToolTip(heading, description) {
  return (
    "<div style='padding: 1rem'> <h6 style='font-weight: bolder; text-align: right'>" + heading + "</h6> <p style='font-weight: 500; color: #B2B4B3'>" + description + "</p> </div>"
  );
}