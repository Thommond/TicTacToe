// Creating a table grid
function columns() {
  for(let columns = 0; columns < 3; columns++) {
   let row = document.querySelector(".table").insertRow(columns);
   let cell1 = row.insertCell(0);
   let cell2 = row.insertCell(-1);
   let cell3 = row.insertCell(-1);
  }
/**
Functions check what character's are
in an array to see if winning statements are
true later in the code
 */
}
function checkX(x)  {
  return x == "X";
}
function checkO(o)  {
  return o == "O" ;
}
// Calling the function
columns();
// Count is for player rotations
let count =  0;
// Creating the array's for the winning feature
let vertical1 = [];
let vertical2 = [];
let vertical3 = [];
let horizontal1 = [];
let horizontal2 = [];
let downward1 = [];
let downward2 = [];
let downward3 = [];
// Loads the code inside the function while the page loads
window.onload = function () {
// The alert only happens if the count is equal to zero
if (count == 0) {
alert("It's player One's turn!");
}
  //runs a function onclick of the table
  document.querySelector('.table').onclick = function(ev) {
    //count is equal to count plus one
    count = count + 1;
/**
The bottom two conditionals check the count and
if one of the statements is true it alerts the players
of who's turn it is
*/

if (count == 1 || count == 3 || count == 5 || count == 7 ) {
  alert("It is Player Two's turn")
}

else if (count == 2 || count == 4 || count == 6 || count == 8 ) {
  alert("It is Player One's turn")
}
    // Row index is pointing to the parent index
    let rowIndex = ev.target.parentElement.rowIndex;
    // Cell is also pointing to the parent index
    let cellIndex = ev.target.cellIndex;
    // Position is equal to query selector the table plus both index's
    let position = document.querySelector('.table').rows[rowIndex].cells[cellIndex];
    // A conditional for odd numbers
    if(count == 1 || count == 3 || count == 5 || count == 7 || count == 9) {
      // Let text equal to the new text node of x
    let text = document.createTextNode("X");
    // Adding text to the element
    position.appendChild(text);
    // Disables the double click on table elments
    position.style.pointerEvents = "none";
    // A conditional for even numbers
  }  else if (count == 2 || count == 4 || count == 6 || count == 8) {
    // Text is equal to the new string node of o
    let text = document.createTextNode("O");

    // Adding the text to the element
    position.appendChild(text);
    // Disables the double click as before
    position.style.pointerEvents = "none";
  }


/**
The below conditonals push the specified
characters to the array
*/

  if(rowIndex == 0 && cellIndex == 0) {
  downward1.push(position.innerHTML);
  vertical1.push(position.innerHTML);
  horizontal1.push(position.innerHTML);
} else if(rowIndex == 1 && cellIndex == 1) {
  downward2.push(position.innerHTML);
  vertical2.push(position.innerHTML);
  horizontal1.push(position.innerHTML);
  horizontal2.push(position.innerHTML);
} else if(rowIndex == 2 && cellIndex == 2) {
  downward3.push(position.innerHTML);
  vertical3.push(position.innerHTML);
  horizontal1.push(position.innerHTML);
} else if(rowIndex == 0 && cellIndex == 2) {
  downward3.push(position.innerHTML);
  vertical1.push(position.innerHTML);
  horizontal2.push(position.innerHTML);
} else if(rowIndex == 2 && cellIndex == 0) {
  downward1.push(position.innerHTML);
  vertical3.push(position.innerHTML);
  horizontal2.push(position.innerHTML);
} else if(rowIndex == 0) {
  if(cellIndex = 1) {
    downward2.push(position.innerHTML);
    vertical1.push(position.innerHTML);
  } else {
  downward1.push(position.innerHTML);
  vertical1.push(position.innerHTML);
}
} else if(rowIndex == 1) {
  if(cellIndex == 2) {
    downward3.push(position.innerHTML);
    vertical2.push(position.innerHTML);
  } else if(cellIndex == 1){
  downward2.push(position.innerHTML);
  vertical2.push(position.innerHTML);
} else if(cellIndex == 0) {
  downward1.push(position.innerHTML);
  vertical2.push(position.innerHTML);
}
} else if(rowIndex == 2) {
  if(cellIndex == 1) {
    downward2.push(position.innerHTML);
    vertical3.push(position.innerHTML);
  } else {
  downward3.push(position.innerHTML);
  vertical3.push(position.innerHTML);
}
}

/**
Conditional's below check if the array's
are 3 in length and  depending which is true then
*/
if(vertical1.length == 3) {
  if(vertical1.every(checkX) == true) {
    alert("Player one wins!");
  } else  if (vertical1.every(checkO) == true) {
    alert("Player two wins!");
  }
}
if(vertical2.length == 3) {
  if(vertical2.every(checkX) == true) {
    alert("Player one wins!");
  } else  if (vertical2.every(checkO) == true) {
    alert("Player two wins!");
  }
}
if(vertical3.length == 3) {
  if(vertical3.every(checkX) == true) {
    alert("Player one wins!");
  } else  if (vertical3.every(checkO) == true) {
    alert("Player two wins!");
  }
}
if(horizontal1.length == 3) {
  if(horizontal1.every(checkX) == true) {
    alert("Player one wins!");
  } else  if (horizontal1.every(checkO) == true) {
    alert("Player two wins!");
  }
}
if(horizontal2.length == 3) {
  if(horizontal2.every(checkX) == true) {
    alert("Player one wins!");
  } else  if (horizontal2.every(checkO) == true) {
    alert("Player two wins!");
  }
}

if(downward1.length == 3) {
  if(downward1.every(checkX) == true) {
    alert("Player one wins")
  }
  else if (downward1.every(checkO) == true) {
    alert("Player two wins")
  }
}

if(downward2.length == 3) {
  if(downward2.every(checkX) == true) {
    alert("Player one wins")
  }
  else if (downward2.every(checkO) == true) {
    alert("Player two wins")
  }
}

if(downward3.length == 3) {
  if(downward3.every(checkX) == true) {
    alert("Player one wins")
  }
  else if (downward3.every(checkO) == true) {
    alert("Player two wins")
  }
}

/**
The code below is checking if all the winning
statements are false and if so it alerts the players
 */

if (count == 9 && downward1.every(checkO) == false && downward1.every(checkX) == false && downward2.every(checkO) == false && downward2.every(checkX) == false && downward3.every(checkO) == false && downward3.every(checkX) == false
&& horizontal1.every(checkO) == false && horizontal1.every(checkX) == false && horizontal2.every(checkO) == false && horizontal2.every(checkX) == false && vertical1.every(checkO) == false && vertical1.every(checkX) == false
&& vertical2.every(checkO) == false && vertical2.every(checkX) == false && vertical3.every(checkO) == false && vertical3.every(checkX) == false) {
  alert("Oh no it's a draw")

}

  }
}



// This button restarts the page via refresh
let reload = document.querySelector('button');

reload.onclick = function() {
  location.reload(false);
}
