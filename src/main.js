//
//
//

var ISKETCH = ISKETCH || {}

$(document).ready(() => {
    //
    //  TIP: how you print information
    //
    console.log('Welcome to iSketch!')

    // initialize the canvas
    $('#tbMain').css('background-color', '#eeeeee');

    // add input event handlers
    $('#cvsMain').on('mousedown', ISKETCH.canvasMouseDown);
    $('#cvsMain').on('mouseup', ISKETCH.canvasMouseUp);
})

//
//
//
ISKETCH.canvasMouseDown = function (e) {
    ISKETCH.context.clearRect(0, 0, $('#cvsMain').width(), $('#cvsMain').height());
    ISKETCH.context.beginPath();

    let rect = $('#cvsMain')[0].getBoundingClientRect();
    let x = e.clientX - rect.left, y = e.clientY - rect.top
    ISKETCH.context.moveTo(x, y);
    ISKETCH.context.stroke();

    ISKETCH.isDragging = true;

    // -------------------------------------------------------------------------------
    // create an empty array to store the user's mouse coordinates
    //
    ISKETCH.coords = []
    //
    // TODO: add the mouse down coordinates to this array
    // TIP: array.push(element)
    //
    let coord = {x: undefined, y: undefined}


    // -------------------------------------------------------------------------------
}

//
//
//
ISKETCH.canvasMouseMove = function (e) {
    if (!ISKETCH.isDragging) return;

    let rect = $('#cvsMain')[0].getBoundingClientRect();
    let x = e.clientX - rect.left, y = e.clientY - rect.top
    ISKETCH.context.lineTo(x, y);
    ISKETCH.context.moveTo(x, y);
    ISKETCH.context.stroke();

    // -------------------------------------------------------------------------------
    // TODO: add the mouse move coordinates to the array



    // -------------------------------------------------------------------------------
}


//
//
//
ISKETCH.canvasMouseUp = function (e) {
    ISKETCH.isDragging = false;
    ISKETCH.context.closePath();

    // -------------------------------------------------------------------------------
    // TODO: add the mouse up coordinates to the array

    // TODO: print the array
    
    // -------------------------------------------------------------------------------
}

