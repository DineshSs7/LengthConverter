function converter(){
    let cmvalue = document.getElementById("input").value;
    let inchvalue = cmvalue/2.54
    let result = document.getElementById("result")
    result.innerHTML=inchvalue.toFixed(2)+" Inches" 

}
