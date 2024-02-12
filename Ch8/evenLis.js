 // There are 2 way of operating event => 1)Inline  2)addEventistener

const Box = document.getElementById("box");

Box.addEventListener("click", function() {
    // This code will run when the button is clicked
    console.log("Button clicked!");
    console.log=("yes");
    alert("Hello from the click listener!");
});

Box.addEventListener("mouseout",mouseout); 
    function mouseout() {
    Box.style.backgroundColor = "";
    Box.textContent=" ";
};

Box.addEventListener("mouseover",clickListener);
function clickListener(){
    Box.style.backgroundColor="red";
    // alert("hovered");
    Box.textContent="HOVERED !";
}
// Box.removeEventListener("mouseout",mouseout);