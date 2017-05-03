const PouchDB = require('pouchdb');
const stacks = new PouchDB('docktor_stacks');

module.exports = class {
  onCreate () {
    this.state = {
      stacks: []
    };
    stacks.info().then(function (info) {
      console.log(info);
    });
  }
  refresh () {
  }
};
