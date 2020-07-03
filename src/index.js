console.log( 'index.js loaded' );

setTimeout( () => {

    console.log( 'starting dynamic import' );
    import( './dynamic.js' )
        .then( ( { testFunc } ) => {

            testFunc();

        } );

}, 1000 );
