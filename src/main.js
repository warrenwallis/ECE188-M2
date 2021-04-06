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
    $('#cvsMain')[0].width = 800;
    $('#cvsMain')[0].height = 500;
    $('#cvsMain').css('background-color', '#eeeeee');
    ISKETCH.context = $('#cvsMain')[0].getContext('2d');
    ISKETCH.context.strokeStyle = "#df4b26";
    ISKETCH.context.lineJoin = "round";
    ISKETCH.context.lineWidth = 5;

    // add input event handlers
    $('#cvsMain').on('mousedown', ISKETCH.canvasMouseDown);
    $('#cvsMain').on('mousemove', ISKETCH.canvasMouseMove);
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

