import React from 'react';
import Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

HC_exporting(Highcharts);

const Ch_OrdersByStatus = (props) => {
 function getSeriesData(arr){
    
    let status_groups = arr.reduce((y, x) => {
      (y[x['status']] = y[x['status']] || []).push(x);
      return y;
    }, {});
  
    let series_data = Object.keys(status_groups)
    .map(status => {
      return {
        name: status,
        y: status_groups[status].length,
        sliced: false,
        selected: true,
      }
    });
    return {
      series_data: series_data,
    }
  }
  
  const chart_data = getSeriesData(props.data);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'pie',
          },
          title: {
            text: null
          },
          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<b>{point.name} ({point.y} orders)</b>'
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
            name: 'Statuses',
            colorByPoint: true,
            data: chart_data.series_data
          }],
          credits: {
            enabled: false
          }
        }}
      />
    </div>
  );
};

Ch_OrdersByStatus.propTypes = {};

export default Ch_OrdersByStatus;
