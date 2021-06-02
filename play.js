const { connect } = require('./client');
const { setupInput } = require('./input');
const { IP, PORT } = require("./constants");
console.log("Connecting ...");

const conn = connect(IP, PORT);
setupInput(conn);