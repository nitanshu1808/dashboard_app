import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = (props) => {

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'pie',
          },
          title: {
            text: 'Actionable Items'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
          },
          plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y}'
                }
            }
        },
          series: [{
            name: 'Actionable Items',
            colorByPoint: true,
            data: [{
                name: 'Wrong Address',
                y: 120,
                sliced: true,
                selected: true
            }, {
                name: 'Stale Orders',
                y: 41
            }, {
                name: 'Failed Payments',
                y: 15
            }, {
                name: 'Undelivered',
                y: 4.67
            }, {
                name: 'Other',
                y: 21
            }]
        }]
        }}
      />
    </div>
  );
};

Chart.propTypes = {};

export default Chart;
