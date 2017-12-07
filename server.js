const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const jsonServer = require('express')();
const request = require('request');
const config = require('./webpack.config');
const host = 'localhost';
const port = 3000;
const apiPort = 8080;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}).listen(port, host, function(err, result) {
  if (err) console.error(err);
  console.log(`Dev Server Listening at http://${ host }:${ port }`);
});

jsonServer.listen(apiPort, () =>
  console.log(`API Server Listening at http://${ host }:${ apiPort }`)
);
jsonServer.get('/forecast/:latlong', (req, res, next) => {
  const latlong = req.params.latlong;
  if (typeof latlong !== 'string' || latlong.indexOf(',') === -1) {
    const err = new Error('Invalid Coordinates.');
    err.statusCode = 400;
    next(err);
    return;
  }
  res.append('Access-Control-Allow-Origin', '*');
  request(
    `https://api.darksky.net/forecast/${ process.env.API_KEY }/${ latlong }`
  ).pipe(res);
});
