import { Component, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-example',
  templateUrl: './d3-example.component.html',
  styleUrls: ['./d3-example.component.css']
})
export class D3ExampleComponent implements AfterContentInit {
  width = Math.max(960, innerWidth);
  height = Math.max(500, innerHeight);
  i = 0;
  svg = d3.select("svg")
  .attr("width", this.width)
  .attr("height", this.height);
  constructor() { }

  ngAfterContentInit() {
    this.svg.append("rect")
      .attr("width",this.width)
      .attr("height", this.height)
      .on("ontouchstart" in document ? "touchmove" : "mousemove", this.particle);
  }
  particle() {
    var m = d3.mouse(this);
    this.svg.insert("circle", "rect")
    .attr("cx", m[0])
    .attr("cy", m[1])
    .attr("r", 1e-6)
    .style("stroke", d3.hsl((this.i = (this.i + 1) % 360), 1, .5))
    .style("stroke-opacity", 1)
  .transition()
    .duration(2000)
    .ease(Math.sqrt)
    .attr("r", 100)
    .style("stroke-opacity", 1e-6)
    .remove();
    console.log("Particle is running")
    d3.event.preventDefault();
  }
}
