const button = document.getElementById("button");
// button.addEventListener(
//   "click",
//   function (event) {
//     changeColor();
//     event.preventDefault();
//   },
//   false
// );
button.addEventListener("click", changeColor, false);
// let newColor = (document.div.style.backgroundcolor = "	#FF0000");

// ----- function ------

function changeColor() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  //   console.log(firstName);
  if (firstName.length >= 5) {
    document.getElementById("div1").style.color = "#FF0000";
  } else {
    document.getElementById("div1").style.color = "green";
  }
  document.getElementById("div1").innerHTML = firstName;
}

// ----- new div -----

// const newDiv = document.createElement("div");
// let divFirstName = document.createTextNode(firstName);
// newDiv.appendChild(divFirstName);
// const currentDiv = document.getElementById("div1");
// document.body.insertBefore(newDiv, currentDiv);

// const newDiv2 = document.createElement("div");
// let divLastName = document.createTextNode(lastName);
// newDiv2.appendChild(divLastName);
// const currentDiv2 = document.getElementById("div2");
// document.body.insertBefore(newDiv2, currentDiv2);

// const newDiv3 = document.createElement("div");
// let divAge = document.createTextNode(age);
// newDiv3.appendChild(divAge);
// const currentDiv3 = document.getElementById("div3");
// document.body.insertBefore(newDiv3, currentDiv3);
