let index = 0;

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

        if(response.op == 'utx') {
            let total = 0;

            for(let i = 0; i < response.x.out.length; i++) {
                total += response.x.out[i].value;
            }

            response.amount = total / 100000000;
            response.index = index++;
            response.date = date;

        }

        console.log(response);
    };
}

// window.addEventListener('load', initialize());