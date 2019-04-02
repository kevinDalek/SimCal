$(document).ready(function(){


$("#submit").on("click",function(){
//retrieving the values from the textbox
var num1 = parseFloat($("#num1").val());
var num2 = parseFloat($("#num2").val());
var operation = $("#operator").val();
//declaring variable to store result obtained from calculation 
var result = 0;

//validation check for number
if ($.isNumeric(num1) == false){
	alert("First Input is invalid");
	return false;
}else if($.isNumeric(num2) == false){
	alert("Second Input is invalid");
	return false;
	
}else if(!$("#operator").val()){//validation check to check if user has selected an operation from the drop-down
	alert("Please select the operation you want to perform");
	return false;

}else{
    //performing operation that user has selected +, -, *, /
   if (operation == "addition") {
    result = num1+num2;
     $("#myResult").html("Operation:<br><br>"+num1+" + "+num2+"<br><br>Results:<br><br>"+parseFloat(result).toFixed(2)+"<br><br>");
   }
   else if(operation == "substraction"){
     result = num1-num2;
     $("#myResult").html("Operation:<br><br>"+num1+" - "+num2+"<br><br>Results:<br><br>"+parseFloat(result).toFixed(2)+"<br><br>");
   }
    else if(operation == "multiplication"){
      result = num1*num2;
     $("#myResult").html("Operation:<br><br>"+num1+" * "+num2+"<br><br>Results:<br><br>"+parseFloat(result).toFixed(2)+"<br><br>");
   }
   
     else if(operation == "division"){
       result = num1/num2;
     $("#myResult").html("Operation:<br><br>"+num1+" / "+num2+"<br><br>Results:<br><br>"+parseFloat(result).toFixed(2)+"<br><br>");
   }
}


});

});//end of main jquery class