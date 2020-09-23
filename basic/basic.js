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
  let profession = document.getElementById("profession");
  let blue = document.getElementById("blue");
  console.log(firstName);
  if (firstName.length >= 5) {
    document.getElementById("div1").style.color = "#FF0000";
  } else {
    document.getElementById("div1").style.color = "green";
  }

  if (lastName.length >= 5) {
    document.getElementById("div2").style.color = "#FF0000";
  } else {
    document.getElementById("div2").style.color = "green";
  }

  if (profession.value == 1) {
    document.getElementById("div1").style.backgroundColor = "violet";
    document.getElementById("div2").style.backgroundColor = "violet";
    document.getElementById("div3").style.backgroundColor = "violet";
  } else if (profession.value == 2) {
    document.getElementById("div1").style.backgroundColor = "blue";
    document.getElementById("div2").style.backgroundColor = "blue";
    document.getElementById("div3").style.backgroundColor = "blue";
  } else if (profession.value == 3) {
    document.getElementById("div1").style.backgroundColor = "yellow";
    document.getElementById("div2").style.backgroundColor = "yellow";
    document.getElementById("div3").style.backgroundColor = "yellow";
  }

  document.getElementById("div1").innerHTML = firstName;
  document.getElementById("div2").innerHTML = lastName;
  document.getElementById("div3").innerHTML = age;
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
