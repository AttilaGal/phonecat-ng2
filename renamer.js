/*
 This is a helper script that can be used to recursively rename all 
 JavaScript files within a given directory into TypeScript files.
 call:
 node renamer <directory>
 */

var fs = require('fs');
var path = require('path');
var linesert = require( "linesert" );
var ANSI_GREEN = '\x1b[32m';
var ANSI_DEFAULT = '\x1b[0m';
var ANSI_RED = '\x1b[35m';

var importStatement = "import * as angular from 'angular';";

var walkSync = function(dir, filelist) {
  var files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if(getFileExtension(file) === 'js' || getFileExtension(file) === 'ts'){
        var renamed = file.slice(0, -3) + '.ts';
        fs.rename(path.join(dir, file), path.join(dir, renamed), function(err){
          err ? console.log(err) : null; //insertAngularStatement(path.join(dir, renamed));
          
        });
        path.join(dir, renamed)
      }
    }
  });
  return filelist;
};

var getFileExtension = function(file){
  var splitted = file.split('.');
  return splitted[splitted.length - 1];
};

function insertAngularStatement(pathToFile){
  linesert(pathToFile).beforeLine(1).insert(importStatement, function(err, result){
    if(err){
      console.log(ANSI_RED, 'error while inserting into ' + pathToFile, ANSI_DEFAULT);
    }else{
      console.log(ANSI_GREEN,'successfully inserted angular into ' + pathToFile + ANSI_DEFAULT );
    }
  });
}


walkSync(process.argv[2]);