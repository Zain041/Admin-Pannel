import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { year: 'Mon', population: 9 },
  { year: 'Tue', population: 12 },
  { year: 'Wed', population: 5 },
  { year: 'Thu', population: 18 },
  { year: 'Fri', population: 22 },
  { year: 'Sat', population: 21 },
  { year: 'Sun', population: 15 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart height={265}

          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            color="#7F48F7"
            valueField="population"
            argumentField="year"
          />
          <Title text="" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
