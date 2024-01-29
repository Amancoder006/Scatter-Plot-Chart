// ScatterPlot.tsx

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./ScatterPlot.css"; // Import the CSS file

interface ScatterPlotProps {
    data: { x: number; y: number }[];
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const margin = { top: 10, right: 40, bottom: 30, left: 30 },
            width = 700 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        const svg = d3
            .select("#area")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        const x = d3.scaleLinear().domain([0, 1000]).range([0, width]);
        svg
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        const y = d3.scaleLinear().domain([0, 1000]).range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));

        svg
            .selectAll("whatever")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", (d) => x(d.x))
            .attr("cy", (d) => y(d.y))
            .attr("r", 4);
    }, [data]);

    return <svg id="area" ref={svgRef} height={500} width={700}></svg>;
};

export default ScatterPlot;
