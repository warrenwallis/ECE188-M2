//
//
//

var TINYTYPE = TINYTYPE || {}

$(document).ready(() => {
    //
    //  TIP: how you print information
    //
    console.log('Welcome to TINYTYPE!')

    // initialize the canvas
    $('#tbMain').css('background-color', '#eeeeee');

    // add input event handlers
    $('#button0').on('click', function(){
        console.log('clicked button0');
    });
})

//
//
//
// function for updating buttons based on what window the user is in
// 0 = main, 1 = aeiouy, 2 = bcdf, 3 = ghjk, 4 = lmnp, 5 = qrst, 6 = vwxz 
// have hard mappings to buttons and choos which mapping to show based on window
// 0 = aeiou, a, b, g, l, q, v; 1 = bcdf, e, c, h, m, r, w; 2 = ghjk, i, d, j, n, s, x; 3 = lmnp, o, f, k, p, t, z; 4 = qrst, u; 5 = vwxz, y; 6 = space; 7 = delete
