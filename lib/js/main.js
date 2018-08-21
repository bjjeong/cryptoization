import * as d3 from 'd3';

let index = 0;
let nodes = [{"size": 5}, {"size": 1}];

const width = 960;
const height = 600;

let svg = d3.select('svg')
    .attr("width", width)
    .attr("height", height);

let simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collide', d3.forceCollide().radius(2).strength(5))
    .force('x', d3.forceX(200).strength(0.1))
    .force('y', d3.forceY(200).strength(0.1))
    .on('tick', ticked);

var node = d3.select('#svg').selectAll('.node').data(nodes);

var nodeEnter = node.enter().append('g').attr('class', 'node');
nodeEnter.append('circle').attr('r', function (d) {
    return d.size*10;
}).attr('fill', '#fff');

function ticked() {
    d3.select('#svg').selectAll('.node')
        .attr('transform', function (d) {
            return 'translate(' + d.x + ',' + d.y + ')';
        });
}

function render() {
    // .on("mousedown", mousedown)
    // .on("mousemove", mousemove);
}

function restart() {
    node = node = d3.select('#svg').selectAll('.node').data(nodes);

    nodeEnter = node.enter().attr('class', 'node');
    nodeEnter.append('circle').attr('r', function (d) {
        return d.size * 10;
    }).attr('fill', '#fff');
    // node = node.enter().append("circle").attr("fill", function (d) {
    //     return color(d.id);
    // }).attr("r", 8).merge(node);

    // simulation.nodes(nodes);
}

function initialize() {
    const wss = "wss://ws.blockchain.info/inv";
    const connection = new WebSocket(wss);

    connection.onerror = error => {
        console.log('Error with the connection', error);
    };

    connection.onopen = () => {
        console.log('Websocket connected');
        connection.send(JSON.stringify({
            "op": "unconfirmed_sub"
        }));
    };

    connection.onmessage = message => {
        let response = JSON.parse(message.data);
        const date = new Date(0);
        date.setUTCSeconds(response.x.time);

        if(response.op === "utx") {
            let total = 0;

            for(let i = 0; i < response.x.out.length; i++) {
                total += response.x.out[i].value;
            }

            response.amount = total / 100000000;
            response.index = index++;
            response.date = date;

        }

        // console.log(response);
        // nodes.push({"size": +response.amount});
        // restart();
        
    };
    render();
    
}

window.addEventListener('load', initialize());