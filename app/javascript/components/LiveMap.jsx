import React from 'react';
import * as d3 from 'd3';
import worldData from './WorldData';

const LiveMap = ({ dimensions, speed, frequency }) => {
  const svgRef = React.useRef(null);
  const { width, height } = dimensions;

  const usa = worldData.features.find((feature) => feature.id == 'USA');
  const can = worldData.features.find((feature) => feature.id == 'CAN');
  const gbr = worldData.features.find((feature) => feature.id == 'GBR');
  const fra = worldData.features.find((feature) => feature.id == 'FRA');
  const irl = worldData.features.find((feature) => feature.id == 'IRL');

  const weightedList = [
    usa, usa, usa, usa, usa, usa, usa, usa, usa, usa, usa, usa, usa, usa,
    gbr, gbr, gbr, gbr, gbr, gbr,
    irl, irl, irl, irl,
    fra, fra, fra,
    can, can, can
  ];

  const randomCountry = () => weightedList[weightedList.length * Math.random() | 0];

  const numberBetween = (min, max, decimalPlaces) => {
    const rand = Math.random()*(max-min) + min;
    const power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
  }

  const boundingBox = (coordinates) => {
    var minX = coordinates[0][0], maxX = coordinates[0][1],
        minY = coordinates[0][1], maxY = coordinates[0][1];

    coordinates.forEach(([x, y]) => {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    });

    return [minX, maxX, minY, maxY];
  }

  const randomPoint = (country) => {
    var coordinates;
    if (country.geometry['type'] == 'Polygon') {
      coordinates = country.geometry.coordinates[0];
    } else {
      var coordinates = country.geometry.coordinates[0][0];
      country.geometry.coordinates.forEach((c) => {
        if (d3.polygonArea(coordinates) < d3.polygonArea(c[0])) {
          coordinates = c[0];
        }
      });
    }

    const [minX, maxX, minY, maxY] = boundingBox(coordinates);

    while (true) {
      const lat = numberBetween(minX, maxX, 2);
      const lon = numberBetween(minY, maxY, 2);

      if (d3.polygonContains(coordinates, [lat, lon])) {
        return [lat, lon];
      }
    }
  }

  const createFromTo = () => {
    return [randomPoint(randomCountry()), randomPoint(randomCountry())];
  }

  React.useEffect(() => {
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove();
    const svg = svgEl.append("g");

    var projection = d3.geoMercator().scale(140).translate([width/2*1.4, height]);

    var path = d3.geoPath().projection(projection);

    // add background color
    svg.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "#0E6E7C");

    // draw world map
    svg.append("g")
      .selectAll("path")
      .data(worldData.features)
      .enter().append("path")
      .attr("fill", "#333")
      .attr("d", d3.geoPath().projection(projection))
      .style("stroke", "#888")
      .style("stroke-width", 1);

    const smallDelay = (cb) => setTimeout(cb, 500);

    const ping = (from, to) => {
      var link = {type: "LineString", coordinates: [from, to]};
      var linkReverse = {type: "LineString", coordinates: [to, from]};

      const start = svg.append('circle')
            .attr("cx", projection(from)[0])
            .attr("cy", projection(from)[1])
            .attr('r', 3)
            .style('fill', 'red');

      smallDelay(() => {
        const line = svg.append("path")
              .attr("d", path(link))
              .style("fill", "none")
              .style("stroke", "orange")
              .style("stroke-width", 3);

        const length = line.node().getTotalLength();

        line.attr("stroke-dasharray", length + " " + length)
          .attr("stroke-dashoffset", length)
          .transition()
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", 0)
          .duration(speed)
          .on("end", () => {
            const end = svg.append('circle')
                  .attr("cx", projection(to)[0])
                  .attr("cy", projection(to)[1])
                  .attr('r', 3)
                  .style('fill', 'red');

            smallDelay(() => {
              line.remove();

              start.style("opacity", 1)
                .transition().duration(400).style("opacity", 0)
                .on('end', () => start.remove());

              const lineReverse = svg.append("path")
                    .attr("d", path(linkReverse))
                    .style("fill", "none")
                    .style("stroke", "orange")
                    .style("stroke-width", 3);

              lineReverse.attr("stroke-dasharray", length + " " + length)
                .attr("stroke-dashoffset", 0)
                .transition()
                .ease(d3.easeLinear)
                .attr("stroke-dashoffset", length)
                .duration(speed)
                .on("end", () => {
                  smallDelay(() => {
                    lineReverse.remove();

                    end.style("opacity", 1)
                      .transition().duration(400).style("opacity", 0)
                      .on('end', () => end.remove());
                  });
                });
            });
          });
      });
    };

    setInterval(() => {
      const [from, to] = createFromTo();
      ping(from, to);
    }, frequency);
  });

  return <svg ref={svgRef} width={width} height={height} />;
}

export default LiveMap;
