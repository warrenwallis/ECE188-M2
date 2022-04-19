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
    TINYTYPE.showUI();

    // add input event handlers
    $('#button0').on('click', TINYTYPE.clickButton0);
    $('#button1').on('click', TINYTYPE.clickButton1);
    $('#button2').on('click', TINYTYPE.clickButton2);
    $('#button3').on('click', TINYTYPE.clickButton3);
    $('#button4').on('click', TINYTYPE.clickButton4);
    $('#button5').on('click', TINYTYPE.clickButton5);
    $('#button6').on('click', TINYTYPE.clickButton6);
    $('#button7').on('click', TINYTYPE.clickButton7);
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
            $('#button1').text('.  BCDF  .');
            $('#button2').text('. GHJK .');
            $('#button3').text('. LMNP .');
            $('#button4').text('. QRST .');
            $('#button5').text('. VWXZ .');
            break;
        case 1:
            console.log('page == 1');
            $('#button0').text('A');
            $('#button1').text('E');
            $('#button2').text('I');
            $('#button3').text('O');
            $('#button4').text('U');
            $('#button5').text('Y');
            break;
        case 2:
            console.log('page == 2');
            $('#button0').text('B');
            $('#button1').text('C');
            $('#button2').text('D');
            $('#button3').text('F');
            $('#button4').text('BACK');
            $('#button5').text('');
            break;
        case 3:
            console.log('page == 3');
            $('#button0').text('G');
            $('#button1').text('H');
            $('#button2').text('J');
            $('#button3').text('K');
            $('#button4').text('BACK');
            $('#button5').text('');
            break;
        case 4:
            console.log('page == 4');
            $('#button0').text('L');
            $('#button1').text('M');
            $('#button2').text('M');
            $('#button3').text('P');
            $('#button4').text('BACK');
            $('#button5').text('');
            break;
        case 5:
            console.log('page == 5');
            $('#button0').text('Q');
            $('#button1').text('R');
            $('#button2').text('S');
            $('#button3').text('T');
            $('#button4').text('BACK');
            $('#button5').text('');
            break;
        case 6:
            console.log('page == 6');
            $('#button0').text('V');
            $('#button1').text('W');
            $('#button2').text('X');
            $('#button3').text('Z');
            $('#button4').text('BACK');
            $('#button5').text('');
            break;            
    }
    $('#textbox').focus();
}

TINYTYPE.clickButton0 = function (e) {
    switch(page) {
        case 0:
            page = 1;
            break;
        default:
            $('#textbox').val($('#textbox').val() + $('#button0').text());
            page = 0;
            break;
    }
    
    TINYTYPE.showUI();
}

TINYTYPE.clickButton1 = function (e) {
    switch(page) {
        case 0:
            page = 2;
            break;
        default:
            $('#textbox').val($('#textbox').val() + $('#button1').text());
            page = 0;
            break;
    }
    
    TINYTYPE.showUI();
}

TINYTYPE.clickButton2 = function (e) {
    switch(page) {
        case 0:
            page = 3;
            break;
        default:
            $('#textbox').val($('#textbox').val() + $('#button2').text());
            page = 0;
            break;
    }
    
    TINYTYPE.showUI();
}

TINYTYPE.clickButton3 = function (e) {
    switch(page) {
        case 0:
            page = 4;
            break;
        default:
            $('#textbox').val($('#textbox').val() + $('#button3').text());
            page = 0;
            break;
    }
    
    TINYTYPE.showUI();
}

TINYTYPE.clickButton4 = function (e) {
    switch(page) {
        case 0:
            page = 5;
            break;
        case 1:
            $('#textbox').val($('#textbox').val() + $('#button4').text());
            page = 0;
        default:
            page = 0;
            break;
    }
    
    TINYTYPE.showUI();
}

TINYTYPE.clickButton5 = function (e) {
    switch(page) {
        case 0:
            page = 6;
            break;
        case 1:
            $('#textbox').val($('#textbox').val() + $('#button5').text());
            page = 0;
        default:
            break;
    }
    
    TINYTYPE.showUI();
}

TINYTYPE.clickButton6 = function (e) {
    $('#textbox').val($('#textbox').val() + ' ');
    TINYTYPE.showUI();
}

TINYTYPE.clickButton7 = function (e) {
    let result = $('#textbox').val();
    let size = result.length;
    $('#textbox').val(result.substring(0, size - 1));
    TINYTYPE.showUI();
}