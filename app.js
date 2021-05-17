// function fun(){
//     var a = document.getElementById('fff')
//     a.value = "Rafeh"
// }
// function fun(){
//     var a = document.getElementById('rr')
//     a.innerHTML = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>"
// }
// function get(){
//     var a = document.getElementById('gg')
//     a.className = "ff"
// }

// function get(){
//     var a = document.getElementById('gg')
//     a.className = "ff"
// }

// function get(){
//     var a = document.getElementById('rr')
//     a.className += " ff gg"
// }

function get(){
    var a = document.getElementsByTagName('p')
    // a[1].style.color = "red"
    for(var i = 0; i<=a.length; i++){
        a[i].style.color = "blue"
    }
}