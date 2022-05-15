 //1.wap to print in javascript
 //console.log("Hello World");
 //alert("me")
 //document.write("this is document write")

 //2.Javascript console APl
 console.log("Hello World", 4 + 6);
 console.warn("it is not warning");
 console.error("it is not error");

 //3.javascript variables
 //what are variables = Containers are stored data values 
 // multi
 // Line
 // comment
 var number1 = 34;
 var number2 = 56;
 console.log(number1 + number2);
 //4. Data types in javascript 
 //numbers
 var num1 = 55;
 var num2 = 66;
 //string
 var str1 = "This is paragraph"
 var str2 = "This is string 2"

 //Objects
 var marks = {
     ravi: 56,
     ram: 55,
 }
 console.log(marks);
 //Booleans
 var a = true;
 var b = false;
 console.log(a, b);

 //null
 var und = undefined;
 console.log(und);
 var n = null;
 console.log(null);


 //Arrays

 var arr = [1, 2, 3, "babu", 4, 5, ]
 console.log(arr);

 //operators
 //1.Arithmetic operators
 var a = 11;
 var b = 22;
 console.log("The value of a-b is=", a - b);
 console.log("The value of a+b is=", a + b);
 console.log("The value of a*b is=", a * b);
 console.log("The value of a/b is=", a / b);

 //2.Assignment oper.
 var c = b;
 //c+=2;
 c -= 2; //c=c-2;
 //c*=2;
 //c/=2;
 console.log(c);

 //Comparision oper.
 var x = 34;
 var y = 45;
 console.log(x == y);

 //logical oper.
 //logical AND
 console.log(true && false);
 //logical OR
 console.log(true || false);

 //logical NOT  
 //  console.log(!false);
 //  console.log(!true);
 //Function in Java Script
 //DRY = DO not Repeat yourself
 //  function avg(a, b) {
 //      return (a + b) / 2;
 //  }

 //  c1 = avg(4, 6);
 //  c2 = avg(14, 16);
 //  console.log(c1, c2);


 //Conditional in Javascript
 // //  var age = 4;
 // //  if (age > 18) {
 // //      console.log('you are not a kid');
 // //  } else {
 // //      console.log('you are kid');
 //  }
 age = 25;
 //  if -else ladder
 if (age > 32) {
     console.log("You are not a kid");
 } else if (age > 26) {
     console.log("Bache ni rahe");
 }
 console.log("end of ladder");

 //LOops in JS
 var arr = [1, 2, 3, 4, 5, 6, 7];
 //  console.log(arr);
 for (var i = 0; i < arr.length; i++) {
     if (i == 2) {
         //  break;
         continue;
     }
     console.log(arr[i]);

 }
 //  arr.forEach(function(element) {
 //          console.log(element);

 //      })
 //  let j = 0;
 //  const ac = 0;
 //  ac++;
 let j = 10;
 //  while (j < arr.length) {
 //      console.log(arr[j]);
 //      j++;
 //  }

 do {
     console.log(arr[j])
     j++;
 } while (j < arr.length);

 let myArr = ["Fan ", "CAmera", 34, null, true];
 //Array methods
 console.log(myArr.length);
 //myArr.pop(); release last array of this method -->>true left in array
 //myArr.push("Durvesh")//add the arra in the last
 //  myArr.shift()//tp shift the fan in the array
 const newlen = myArr.unshift("HARRY")
 console.log(newlen); //adding harry to the starting of the array list
 console.log(myArr);

 //String Methods in JS
 let myLovelyString = "Harry is a good boy";
 //  console.log(myLovelyString.length);
 //  console.log(myLovelyString.indexOf("good"));
 //  console.log(myLovelyString.lastIndexOf("boy"));
 //  console.log(myLovelyString.slice(1, 4))
 d = myLovelyString.replace("Harry", "Rohan");
 //  d = d.replace("good ", "bad");
 //  console.log(d, myLovelyString)

 let myDate = new Date();
 //  console.log(myDate);
 //  console.log(myDate.getTime());
 //  console.log(myDate.getFullYear());
 //  console.log(myDate.getDay());
 //  console.log(myDate.getMinutes());
 //  console.log(myDate.getHours());

 // DOM Manipulation/////////////////////////////////////////dommmmmmmmmmmmmm
 let elem = document.getElementById('click');
 console.log(elem);
 let elemClass = document.getElementsByClassName("container");
 console.log(elemClass);
 //  elemClass[0].style.background = "blue";
 elemClass[0].classList.add("bg-primary")
 elemClass[0].classList.add("text-success");
 //  console.log(elem.innerHTML);
 //  console.log(elem.innerText);
 //  console.log(elemClass[0].innerHTML);
 //  console.log(elemClass[0].innerText);
 tn = document.getElementsByTagName('div');
 console.log(tn);
 createdElement = document.createElement('p');
 createdElement.innerText = "This is a created para";
 tn[0].appendChild(createdElement);
 createdElement2 = document.createElement('b');
 createdElement2.innerText = "This is a created bold";
 tn[0].replaceChild(createdElement2, createdElement);

 //Selecting Using Query
 sel = document.querySelector('.container');
 console.log(sel);
 sel = document.querySelectorAll('.container');
 console.log(sel);


 //Events in JS
 //  firstContainer.addEventListener('click', function() {
 //      document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
 //      console.log("Clicked on container")
 //  })

 //  function clicked() {
 //      console.log('button was clicked');
 //  }
 //  window.onload = function() {
 //          console.log('The document was loaded');
 //      }
 //  firstContainer.addEventListener('click', function() {
 //      console.log('Click Hua')
 //  })
 //  firstContainer.addEventListener('mouseover', function() {
 //      console.log('Mouse on container')
 //  })
 //  firstContainer.addEventListener('mouseout', function() {
 //      console.log('Mouse out container')
 //  })
 let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
 firstContainer.addEventListener('mouseup', function() {
     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
     console.log("mouse up when click on container")
 })
 firstContainer.addEventListener('mousedown', function() {
     document.querySelectorAll('.container')[1].innerHTML = "<b> We Have clicked</b>";
     console.log('Mouse down container')
 })
 var summ = 0;
 //Arrow Function
 //  function summ(a, b) {
 //      return a + b;

 //   }
 //  var summ;
 //  summ = a, b => {
 //      return a + b;
 //  }
 logkaro = () => {
         console.log("I am your log")
     }
     //setTimeout and Setinterval
     //  setTimeout(logkaro, 2000);
     //  setInterval(logkaro, 2000);
     //  clr = setInterval(logkaro, 2000);
     //  use clearInterval(clr)/clearTiimeout(clr) to cancel setInterval/setTimeout

 //Javascript localStorage

 // localStorage.setItem('name','harry')
 // localStorage)
 //  localStorage.getItem('name');
 localStorage.removeItem('name')
 localStorage.clear();

 //JSoN
 obj = { name: "harry", length: 1, a: { this: 'tha"t' } }
 jso = JSON.stringify(obj);
 console.log(typeof json)
 console.log(jso)
 parsed = JSON.parse({ "name": "harry", "length": 1, "a": { "this": "tha\"t" } })
 console.log(parsed);