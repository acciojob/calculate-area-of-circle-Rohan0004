 function calculateArea() {
            // Get the radius from the user using the prompt() function
             let radius = parseInt(prompt("Enter the radius of the circle:"));
            // write you code here and display the result to the user
	 if(Number.isInteger(radius) && radius > 0){
		 alert((Math.PI * Math.pow(radius, 2)).toFixed(2));
		
	 }else {
    alert("Please enter a positive integer for radius.");
}
           
}
calculateArea();
