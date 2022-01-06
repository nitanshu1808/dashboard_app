import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Ch_VendorsPieChart = (props) => {

  function getSeries(arr){
    let groups = arr.reduce((y, x) => {
      (y[x['vendor_name']] = y[x['vendor_name']] || []).push(x);
      return y;
    }, {});
  
    return Object.keys(groups)
    .map(vendor_name => {
      return {
        name: vendor_name,
        y: groups[vendor_name].length,
        sliced: true,
        selected: true
      }
    }).sort((a, b) => {
      var x = a[y]; var y = b[y];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    })
    .slice(0, 20);
  }
  
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
            name: 'Vendors',
            colorByPoint: true,
            data: getSeries(props.data)
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
