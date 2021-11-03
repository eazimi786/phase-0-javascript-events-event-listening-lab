
// input variable created
const input = document.getElementById("input");

// Event listner wrapped in a function addingEventListener()
function addingEventListener() {
  input.addEventListener("click", function (event) {
    alert("I was clicked!");
  });
}
addingEventListener();