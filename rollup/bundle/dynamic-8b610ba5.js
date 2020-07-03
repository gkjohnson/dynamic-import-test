'use strict';

console.log( 'loaded dynamic import' );

function testFunc() {

    console.log( 'inside dynamically imported function' );

}

exports.testFunc = testFunc;
