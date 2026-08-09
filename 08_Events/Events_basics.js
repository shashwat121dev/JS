// document.getElementById('owl').onclick = function () {
//     alert("You Clicked Owl")
// }

// attachEvent()
// jQuery - on

// Ye sab padho 

// type, timestamp, defaultPrevent, target, toElement, srcElement, currentTarget, 
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode, 

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("Clicked Inside the ul");  
// },false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("Owl Clicked");  
//     e.stopPropagation()
// },false)

// Bubbling -> Andar se bahar.. Yani false hone pe pahle owl clicked print hoga then clicked ul

// Capturing -> Bahar se andar.. Yani agr true hua to pahle clicked ul print hoga then owl clicked  

// document.getElementById('google').addEventListener('click',function (e) {
//     e.preventDefault()
//     e.stopPropagation()  // isse bubbling stop ho jati hai 
//     console.log("Google Clicked");
// },false)

// ++++++++++ Click on photo and it will disappear +++++++++++

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
    
},false)

// removeIt.parentNode.removeChild(removeIt)
