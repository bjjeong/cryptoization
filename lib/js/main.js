import * as d3 from 'd3';

let index = 0;
let color = d3.scaleOrdinal(d3.schemeCategory10);
let nodes = [];
let grandTotal = 0;
document.getElementById("amount").innerHTML = "$" + grandTotal;

const width = window.innerWidth;
const height = window.innerHeight;

let svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height);

let g = svg.append('g')
    .attr('class', 'everything');

let simulation = d3.forceSimulation()
    .nodes(nodes)
    .force('charge', d3.forceManyBody().strength(function(d) {
        if(d.size > 200)
            return -250;

        return -180;
    }))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collide', d3.forceCollide().radius(function (d) {
        if (d.size > 200)
            return 250;

        return d.size;
    }))
    .force('x', d3.forceX(5))
    .force('y', d3.forceY(2))
    .alphaTarget(.5)
    .on('tick', ticked);

function ticked() {
    d3.select('#svg').selectAll('.node')
        .attr('transform', function (d) {
            return 'translate(' + d.x + ',' + d.y + ')';
        });
}

function restart() {

    let node = d3.select('g').selectAll('.node').data(nodes);

    let nodeEnter = node.enter().append('g').attr('class', 'node');
    nodeEnter.append('circle')
    .attr('r', function (d) {
        if(d.size > 200)
            return 200;
        else if(d.size < 2)
            return 2;
        else
            return d.size;
            
    }).attr('fill', function (d) {
        return color(d.size);
    });

    nodeEnter.append('text')
    .attr('dx', 6)
    .text(function (d) {
        return `$${d.price}`;
    });

    let dragHandler = d3.drag()
        .on("start", dragStart)
        .on("drag", dragDrag)
        .on("end", dragEnd);

    dragHandler(nodeEnter);

    let zoomHandler = d3.zoom()
        .on("zoom", function() {
            g.attr("transform", d3.event.transform);
        });

    zoomHandler(svg); 
    
    simulation.nodes(nodes);
}

function initialize() {
    const wss = 'wss://ws.blockchain.info/inv';
    const connection = new WebSocket(wss);
    let btcToUSD;

    fetch('https://blockchain.info/ticker')
        .then(res => res.json())
        .then((out) => {
            btcToUSD = out['USD']['15m'];
        }).catch(err => console.error(err));

    connection.onerror = error => {
        console.log('Error with the connection', error);
    };

    connection.onopen = () => {
        console.log('Websocket connected');
        connection.send(JSON.stringify({
            'op': 'unconfirmed_sub'
        }));
    };

    connection.onmessage = message => {
        let response = JSON.parse(message.data);
        const date = new Date(0);
        date.setUTCSeconds(response.x.time);

        if(response.op === 'utx') {
            let total = 0;

            for(let i = 0; i < response.x.out.length; i++) {
                total += response.x.out[i].value;
            }

            response.amount = total / 100000000;
            response.index = index++;
            response.date = date;
            response.dollar = Math.ceil(response.amount * btcToUSD);
        }

        let play = document.getElementById('play');
        let pause = document.getElementById('pause');

        if (play.hasAttribute('hidden')) {
            nodes.push({'size': +response.amount, 'price': +response.dollar});
            grandTotal += response.dollar;
        }

        document.getElementById("amount").innerHTML = "$" + grandTotal;

        restart();    
    };    
}  

function dragStart(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragDrag(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragEnd(d) {
    d.fx = null;
    d.fy = null;
}

window.addEventListener('load', initialize());