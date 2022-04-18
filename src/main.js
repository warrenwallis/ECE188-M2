//
//
//

var TINYTYPE = TINYTYPE || {}
let page = 0;

$(document).ready(() => {
    //
    //  TIP: how you print information
    //
    console.log('Welcome to TINYTYPE!')

    // initialize the canvas
    $('#tbMain').css('background-color', '#eeeeee');
    TINYTYPE.showUI();

    // add input event handlers
    $('#button0').on('click', TINYTYPE.clickButton0);
    $('#button1').on('click', function(){
        console.log('clicked button1');
    });
    $('#button2').on('click', function(){
        console.log('clicked button2');
    });
    $('#button3').on('click', function(){
        console.log('clicked button3');
    });
    $('#button4').on('click', function(){
        console.log('clicked button4');
    });
    $('#button5').on('click', function(){
        console.log('clicked button5');
    });
    $('#button6').on('click', function(){
        console.log('clicked button6');
    });
    $('#button7').on('click', function(){
        console.log('clicked 7');
    });
})

//
//
//
// function for updating buttons based on what window the user is in
// 0 = main, 1 = aeiouy, 2 = bcdf, 3 = ghjk, 4 = lmnp, 5 = qrst, 6 = vwxz 
// have hard mappings to buttons and choos which mapping to show based on window
// 0 = aeiou, a, b, g, l, q, v; 1 = bcdf, e, c, h, m, r, w; 2 = ghjk, i, d, j, n, s, x; 3 = lmnp, o, f, k, p, t, z; 4 = qrst, u, back; 5 = vwxz, y; 6 = space; 7 = delete

TINYTYPE.showUI = function () {
    console.log('called showUI function');
    switch(page) {
        case 0:
            console.log('page == 0');
            $('#button0').text('AEIOUY');
            $('#button1').text('BCDF');
            $('#button2').text('GHJK');
            $('#button3').text('LMNP');
            $('#button4').text('QRST');
            $('#button5').text('VWXZ');
            break;
        case 1:
            console.log('page == 1');
            $('#button0').text('A');
            $('#button1').text('E');
            $('#button2').text('I');
            $('#button3').text('O');
            $('#button4').text('U');
            $('#button5').text('Y');
    }
}

TINYTYPE.clickButton0 = function (e) {
    switch(page) {
        case 0:
            page = 1;
            TINYTYPE.showUI();
            break;
    }
}