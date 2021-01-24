function tbox(input_id, output_id) {
    var slider = document.getElementById(input_id);
    var output = document.getElementById(output_id);
    output.innerHTML = (slider.value) / 100; // Display the default slider value
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
        output.innerHTML = (this.value) / 100;
    }
}

function waterlevel(x) {
    var aroow = document.getElementsByClassName('arrow_var')[0];
    var incr = x + "pt";
    document.getElementById('currlevel').style["height"] = incr;


    aroow.style["top"] = 365 + 'pt';

    //console.log(aroow.style["top"] + incr);
    var sum = parseInt(aroow.style["top"]) - parseInt(incr);
    aroow.style["top"] = sum + 'pt';
    //console.log(sum); 
    //console.log(aroow.style["top"]);

}

function depthbox(y) {
    var lbox = document.getElementsByClassName('box')[0];
    console.log(lbox.style.top - '50px');
    lbox.style["top"] = lbox.style.top + (y + "px");
    document.getElementsByClassName('weightmachine1')[0].style["top"] = "-20px" + y + "px";
}

