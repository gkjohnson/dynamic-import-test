(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    console.log( 'index.js loaded' );

    setTimeout( () => {

        console.log( 'starting dynamic import' );
        Promise.resolve().then(function () { return dynamic; })
            .then( ( { testFunc } ) => {

                testFunc();

            } );

    }, 1000 );

    console.log( 'loaded dynamic import' );

    function testFunc() {

        console.log( 'inside dynamically imported function' );

    }

    var dynamic = /*#__PURE__*/Object.freeze({
        __proto__: null,
        testFunc: testFunc
    });

})));
