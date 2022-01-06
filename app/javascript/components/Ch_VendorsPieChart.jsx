import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Ch_VendorsPieChart = (props) => {

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'pie',
          },
          title: {
            text: 'Orders by Vendor'
          },
          tooltip: {
            pointFormat: '<b>{point.y} orders</b>'
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
            name: 'Vendor 1',
            colorByPoint: true,
            data: [{
                name: 'Vendor 2',
                y: 120,
                sliced: true,
                selected: true
            }, {
                name: 'Vendor 3',
                y: 41
            }, {
                name: 'Vendor 4',
                y: 15
            }, {
                name: 'Vendor 5',
                y: 52
            }, {
                name: 'Vendor 6',
                y: 21
            }]
          }],
          credits: {
            enabled: false
          }
        }}
      />
    </div>
  );
};

Ch_VendorsPieChart.propTypes = {};

export default Ch_VendorsPieChart;
