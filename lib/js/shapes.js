import { Force } from 'd3-force';

export default class Nodes {
    constructor(utx) {
        this.amount = utx.amount;
        this.index = utx.index;
        this.date = utx.date;
    }


}

const width = 300;
const height = 300;

let nodes = [{}, {}, {}, {}, {}];

let simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody())
    .strength(-10)
    .force('collide', d3.forceCollide().radius(2).strength(5))
    .force('x', d3.forceX(200).strength(0.1))
    .force('y', d3.forceY(200).strength(0.1))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .on('tick', ticked);

let node = d3.select('#svg').selectAll('.node')
   .data(nodes)
let node_enter = node.enter().append('g')
   .attr('class', 'node')
node_enter.append('circle')
   .attr('r', function(d){ return d.size })
   .attr('fill', '#000')

export function ticked() {
    let u = d3.select('svg')
        .selectAll('circle')
        .data(nodes)

    u.enter()
        .append('circle')
        .attr('r', 5)
        .merge(u)
        .attr('cx', function (d) {
            return d.x
        })
        .attr('cy', function (d) {
            return d.y
        });

    u.exit().remove();
}