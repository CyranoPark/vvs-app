'use strict';

const express = require('express');
const next = require('next');
const path = require('path');

const host = process.env.BASE_URL;
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const dev = env === 'development';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.use('/', express.static(path.resolve('public')));
        server.get('*', (req, res) => handle(req, res));

        server.listen(port, host, (err) => {
            if (err) throw err;

            console.log(`> Ready on port ${port} [${env}]`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
