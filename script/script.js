(function(){
	var drawingCanvas = document.getElementById('canv');
    var context = drawingCanvas.getContext('2d');
    context.moveTo(6,6);
    context.lineTo(50,50);
    context.lineWidth=12;
    context.strokeStyle = "#fff";
	context.stroke();

	var drawingCanvas = document.getElementById('canv1');
    var context = drawingCanvas.getContext('2d');
    context.moveTo(6,6);
    context.lineTo(35,35);
    context.lineTo(6,60);
    context.lineWidth=12;
    context.strokeStyle = "#fff";
	context.stroke();
})();