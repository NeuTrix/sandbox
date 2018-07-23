//   work a csv file

let button = document.createElement("button")
//  button.innerHTML = "test"
 let btext = document.createTextNode("battled")
 button.appendChild(btext)
 document.body.appendChild(button)
 let bar = document.getElementById('bar')
 button.onclick = function() {
  //  bar.value ='25'
   let temp = document.createTextNode("25%")
   bar.removeChild(bar.firstChild)
   bar.setAttributeNode(document.createAttribute("pickle", 1000))
   bar.setAttribute('value',5)
   console.log(bar.attributes)
   console.log(bar.children)

 }
 console.log(bar.value)
 console.log('type: ', bar.parentNode)
 console.log('children: ', bar.childNodes)
 console.log('first: ', bar.firstChild.textContent)
 console.log('last: ', bar.lastChild.textContent)
 console.log(bar.attributes.length)
 console.log('get name ==>',bar.getAttribute('max'))
 console.log(bar.name)
 for(let i=0; i<bar.attributes.length; i++){
  console.log(bar.attributes[i])
 }


// === create and append a node =====
//  let button = document.createElement('button')
//  let button_text = document.createTextNode("Little");
//  button.appendChild(button_text);
//  document.body.appendChild(button)

//  button.onclick = () => {
//    alert("it worked!!!")
//  }

//  console.log(window.Cache())

// json object

// let heading = document.createElement("h1");
// document.body.appendChild(heading)
// let doc = document.getElementsByTagName('html')[0]

// let list = (node) => {
//   let kids = node.children
//   if (kids.length <= 0) {
//     return 
//   } else {
//     for (let i = 0; i < kids.length; i++) {
//       let long = kids[i].children.length
//       console.log(long, '==>',kids[i])
//       list(kids[i])
//     }
//   }
// }

// print(doc)
// for (let i = 0; i < pars.length; i++) {
//   console.log(pars[i].innerText)
// }

// pars.forEach( p => 

  // {return console.log(p)}
// )

// ====== Exercise 3.5 ===== basic structure
// let api_key = process.env.API_KEY_OMDB
// let url = `http://www.omdbapi.com/?apikey=${api_key}&t=starwars&y=2016`
// let xhr = new XMLHttpRequest()
// xhr.open('GET', url, 'true');
// xhr.responseType = 'text'; // ensure data format
// xhr.send() // make he request

// xhr.onload = () => { // asycnc call back
//   if (xhr.status === 200) { // ensre success
//     let data = JSON.parse(xhr.response)
//     console.log(data)
//     document.getElementById('message').innerHTML = data.city
//   }
// }



// ===== Exercise 3: AJAX =====

// let xhr = new XMLHttpRequest()
// // xhr.open('GET','data.jhson','true');
// xhr.open('GET','data.json','true');
// xhr.responseType = 'text'; // ensure data format
// xhr.send() // make he request
// xhr.onreadystatechange = function(){
//   // let data = xhr.responseText;
//   // let cup = JSON.parse(data);
//   // console.log(xhr.readyState)
//   // console.log(xhr.status)
//   console.log(xhr.statusText)
//   // console.log(xhr.response)
//   // console.log(xhr.responseText)
//   // console.log(data)
//   // console.log(cup)
// }  

// xhr.onload = () => {
//   if (xhr.status === 200) { // ensre success
    
//     let data = JSON.parse(xhr.response)
//     console.log(data)
//     document.getElementById('message').innerHTML = data.city
//   }
// }


// ===== Exercise 2: JSON =====
// let theData1 = '{"first":"Michael", "kids":{"daughter":"Gigi", "last":"Caelum"}, "city":"San Francisco"}'
// let myObj = JSON.parse(theData1)

// console.log(myObj)

// document.getElementById('message').innerHTML = myObj.kids.daughter

