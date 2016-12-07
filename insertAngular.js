var linesert = require( "linesert" );
var ANSI_GREEN = '\x1b[32m';
var ANSI_DEFAULT = '\x1b[0m';
var ANSI_RED = '\x1b[35m';
var path = __dirname + '/app/app.module.ts';

var importStatement = "import * as angular from 'angular';";

function insertAngularStatement(path){
  linesert(path).beforeLine(1).insert(importStatement, function(err, result){
    if(err){
      console.log(ANSI_RED, 'error while inserting into ' + path, ANSI_DEFAULT);
    }else{
      console.log(ANSI_GREEN,'successfully inserted angular into ' + ANSI_DEFAULT );
    }
  });
}
