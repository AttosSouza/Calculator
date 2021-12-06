/* insert the values into the calculator */
function insert (num) {
    var number = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = number + num
}

/* Clean the values */
function clean () {
    document.getElementById('result').innerHTML = ""
}

/* Erase the values one by one */
function back () {
    var result = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1) 
}

/* It makes the calculate */
function calculate () {
    var result = document.getElementById('result').innerHTML
    if (result) {
        document.getElementById('result').innerHTML = eval(result)
    } else {
        document.getElementById('reuslt').innerHTML = "Nothing..."
    }
}