import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Ch_OrdersVolumeComparison = (props) => {

  function getSeriesData(arr){
    arr = arr.slice(0,20);

    let vendor_groups = arr.reduce((y, x) => {
      (y[x['vendor_name']] = y[x['vendor_name']] || []).push(x);
      return y;
    }, {});
  
    let previous_month_data = Object.keys(vendor_groups)
    .map(vendor_name => {
      return [
        vendor_name,
        vendor_groups[vendor_name].length + Math.floor(Math.random() * 10) + 1
      ]
    });

    let current_month_data =  Object.keys(vendor_groups)
    .map(vendor_name => {

      return {
        name: vendor_name,
        y: vendor_groups[vendor_name].length  + Math.floor(Math.random() * 20) + 1
      }
    });

    return {
      previous_month_data: previous_month_data,
      current_month_data: current_month_data,
    }
  }
  
  const chart_data = getSeriesData(props.data);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'column',
          },
          title: {
            text: null
          },
          legend: {
            enabled: false
          },
          yAxis: [{
            allowDecimals: false,
            title: {
                text: 'Order Volume'
            },
            showFirstLabel: false
          }],
          xAxis: {
            type: 'category',
          },
          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<b>{point.name} ({point.y} orders)</b>'
          },
          plotOptions: {
            series: {
                grouping: false,
                borderWidth: 0
            }
          },
          series: [{
            name: 'Previous Month',
            linkedTo: 'current',
            color: 'rgb(158, 159, 163)',
            pointPlacement: -0.2,
            data: chart_data.previous_month_data
          }, {
            name: 'Current Month',
            id: 'current',
            colorByPoint: true,
            dataSorting: {
              enabled: true,
              matchByName: true
            },
            dataLabels: [{
              enabled: true,
              inside: true,
              style: {
                  fontSize: '16px'
              }
            }],
            data: chart_data.current_month_data
          }],
          credits: {
            enabled: false
          }
        }}
      />
    </div>
  );
};

Ch_OrdersVolumeComparison.propTypes = {};

export default Ch_OrdersVolumeComparison;
