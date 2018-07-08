// json object

// ====== Exercise 3.5 ===== basic structure

let xhr = new XMLHttpRequest()
xhr.open('GET', 'data.json', 'true');
xhr.responseType = 'text'; // ensure data format

xhr.onload = () => { // asycnc call back
  if (xhr.status === 200) { // ensre success
    let data = JSON.parse(xhr.response)
    console.log(data)
    document.getElementById('message').innerHTML = data.city
  }
}

xhr.send() // make he request

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

