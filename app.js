const val = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');


// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true
    }
  },
  handler: function() {
    console.log('Adding new note', argv);
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note');
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Reading note',
  handler: function() {
    console.log('Reading note');
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function() {
    console.log('Listing notes');
  }
})
