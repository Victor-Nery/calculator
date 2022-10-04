const result = document.getElementById ('result')


function insert(number){
    var numeral = result.innerHTML
    result.innerHTML= numeral + number
}


function clean (){
    result.innerHTML= '';
}


function deleteNumber (){
    var back = result.innerHTML
    result.innerHTML = back.substring(0, back.length -1)
}


function calculate(){
    var calculating = result.innerHTML
    if(calculating){
        result.innerHTML = eval(calculating)
    }
    else{
        result.innerHTML = ''
    }
}
