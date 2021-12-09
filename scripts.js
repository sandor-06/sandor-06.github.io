function opensurchmenu() {
  var x = document.getElementById("salamander");
  var e = document.getElementById('all');
  var sc = document.querySelector("::-webkit-scrollbar");
  e.style.opacity = "0.06";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}

//close search popup
function closesurchmenu() {
  var x = document.getElementById("salamander");
  var e = document.getElementById('all')
  if (x.style.display === "block") {
    x.style.display = "none";
    e.style.opacity = "1";
    document.body.style.background = "lightgray";
  }
}

// Hide the list ("myUL") element until something is inputted:
function yourFunction() {
  var x = document.getElementById("myUL");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}


//Filter the list ("myUL") element based on what is inputted:
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    sea = document.getElementsByClassName("salamander")
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
        if (input.length < 1) {
          sea.style.height = "100px";
        }
    }
}

//hide results if input is 0
          var myInput = document.getElementById("myInput");
          var salamander = document.getElementById("salamander");
          var length = document.getElementById("length");


          // When the user starts to type something inside the password field
          myInput.onkeyup = function() {


          // Validate length
          if(myInput.value.length <= 0) {
          document.getElementById("myUL").style.display = "none";
          } else {
          document.getElementById("myUL").style.display = "block";
          }
          }
