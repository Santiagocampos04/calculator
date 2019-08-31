// Here we'll find all the Javascript code.

/*The main idea of this calculator is: The user write the nummbers in the screeninput
and the when the equal button is press, a function take the text in the screen and
evaluate the result. Allways we are working with a text in the screen/input.
*/


//the first function is for add nummbers to the screen
//I have to initializate this variable outside the function
var last=false;
function add(clicked_id){
  let pant = document.getElementById('screeninput').value;
  let num = document.getElementById(clicked_id).textContent;
  let clas= document.getElementById(clicked_id).className;

//this "if" identify if the last character is an opearation, dont let put two operator together.
  if (clas=="oper") { if (last) {
    pant=pant.slice(0, -1);
    document.getElementById('screeninput').value=pant+num;
    last=true;
  } else {
    document.getElementById('screeninput').value=pant+num;
    last=true;
  }} else {
    document.getElementById('screeninput').value=pant+num;
    last=false;}}

//This function here allows the user to delet the last character.
function dell(){
    let pant = document.getElementById('screeninput').value;
    pant=pant.slice(0, -1);
    document.getElementById('screeninput').value=pant;
}

//this funtion is AC. delet all in the screen.
function delet()
  {
    document.getElementById('screeninput').value="";
  }

//this function evaluate all the ecuation (that is a text) in the screen.
function result() {
  let pant =eval(document.getElementById('screeninput').value);
  document.getElementById("screeninput").value=pant ;

}
