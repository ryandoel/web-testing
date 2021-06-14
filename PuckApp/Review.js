	
	let i = 30;
	let iv;
	let startTimer = document.querySelector("#startTimer");
	let cancelTimer = document.querySelector("#cancelTimer");
	
	document.addEventListener("DOMContentLoaded", function () {
    // Gauges

    const gauge1 = document.getElementById("gauge1");
    const gauge2 = document.getElementById("gauge2");
	const gauge3 = document.getElementById("gauge3");
    const gauge4 = document.getElementById("gauge4");

    const opts = {
        angle: 0.25, // The span of the gauge arc
        lineWidth: 0.10, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: "#fff", // Fill color
        },
        fontSize: 50,
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
    gaugeObject1.set(30); // set actual value
    gaugeObject1.setTextField(document.getElementById("gauge1Value"));

    opts.colorStop = "#CF53F9";
    const gaugeObject2 = new Donut(gauge2).setOptions(opts); // create sexy gauge!

    gaugeObject2.maxValue = 30; // set max gauge value
    gaugeObject2.setMinValue(0); // set min value
    gaugeObject2.set(Math.floor(Math.random() * 30)); // set actual value - random in this case
    gaugeObject2.setTextField(document.getElementById("gauge2Value"));
  
    opts.colorStop = "#e95f71";
    const gaugeObject3 = new Donut(gauge3).setOptions(opts); // create sexy gauge!

    gaugeObject3.maxValue = 3000; // set max gauge value
    gaugeObject3.setMinValue(0); // set min value
    gaugeObject3.set(Math.floor(Math.random() * 3000)); // set actual value - random in this case
    gaugeObject3.setTextField(document.getElementById("gauge3Value"));

    opts.colorStop = "#7127AC";
    const gaugeObject4 = new Donut(gauge4).setOptions(opts); // create sexy gauge!

    gaugeObject4.maxValue = 3000; // set max gauge value
    gaugeObject4.setMinValue(0); // set min value
    gaugeObject4.set(Math.floor(Math.random() * 3000)); // set actual value - random in this case
    gaugeObject4.setTextField(document.getElementById("gauge4Value"));  

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
