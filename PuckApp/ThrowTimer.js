	
	let i = 30;
	let iv;
	let startTimer = document.querySelector("#startTimer");
	let cancelTimer = document.querySelector("#cancelTimer");
	
	document.addEventListener("DOMContentLoaded", function () {
    // Gauges

    const gauge1 = document.getElementById("gauge1");
    

    const opts = {
        angle: 50, // The span of the gauge arc
        lineWidth: 0.08, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: "#fff", // Fill color
        },
        fontSize: 20,
        limitMax: true, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: "#6F6EA0", // Colors
        colorStop: "#C0C0DB", // just experiment with them
        strokeColor: "#eee", // to see which ones work best for you
        generateGradient: false,
        scaleOverride: true,
        highDpiSupport: true, // High resolution support
    };

    opts.colorStop = "#864DD9";
    const gaugeObject1 = new Donut(gauge1).setOptions(opts); // create sexy gauge!

    gaugeObject1.maxValue = 30; // set max gauge value
    gaugeObject1.setMinValue(0); // set min value
	gaugeObject1.animationSpeed = 4; // set animation speed (32 is default value)
    gaugeObject1.set(30); // set actual value
    gaugeObject1.setTextField(document.getElementById("gauge1Value"));

    opts.colorStop = "#CF53F9";
   
	//gaugeObject1.set(30);

	startTimer.addEventListener("click", function () {

		iv = setInterval(function () {
			gaugeObject1.set(i);
			i--
			if(i==-1){
				clearInterval(iv);
			}
		}, 1000);
	
	})


	cancelTimer.addEventListener("click", function () {
		clearInterval(iv);
	})



});
