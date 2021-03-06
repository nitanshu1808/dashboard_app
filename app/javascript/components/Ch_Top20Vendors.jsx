import React from 'react';
import Highcharts from 'highcharts';
import drilldown from 'highcharts/modules/drilldown.js';
import HC_exporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

drilldown(Highcharts);
HC_exporting(Highcharts);

const Ch_Top20Vendors = (props) => {
 function getSeriesData(arr){
    
    let vendor_groups = arr.reduce((y, x) => {
      (y[x['vendor_name']] = y[x['vendor_name']] || []).push(x);
      return y;
    }, {});
  
    let series_data = Object.keys(vendor_groups)
    .map(vendor_name => {
      return {
        name: vendor_name,
        y: vendor_groups[vendor_name].length,
        sliced: true,
        selected: true,
        drilldown: vendor_name
      }
    })
    .sort((a, b) => b["y"] - a["y"])
    .slice(0, 20);

    let drilldown_data =  Object.keys(vendor_groups)
    .map(vendor_name => {
      let status_groups = vendor_groups[vendor_name].reduce((y, x) => {
        (y[x['status']] = y[x['status']] || []).push(x);
        return y;
      }, {});
      return {
        name: vendor_name,
        id: vendor_name,
        data: Object.keys(status_groups).map(status => [status, status_groups[status].length])
      }
    });

    return {
      series_data: series_data,
      drilldown_data: drilldown_data
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
            },
            pie: {
              colors: (function () {
                  var colors = [],
                      base = 	"#ff8000", //orange
                      i;
              
                  for (i = 0; i < 20; i++) {
                      colors.push(Highcharts.color(base).brighten((i-10) / 32).get());
                  }
                  return colors;
              }())
            }
        },
          series: [{
            name: 'Vendors',
            colorByPoint: true,
            data: chart_data.series_data
          }],
          drilldown: {
            series: chart_data.drilldown_data
          },
          credits: {
            enabled: false
          }
        }}
      />
    </div>
  );
};

Ch_Top20Vendors.propTypes = {};

export default Ch_Top20Vendors;
