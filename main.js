const input = document.querySelectorAll(".input");
const checkButton= document.querySelector("#check-button");
const output=document.querySelector("#output");


function clickHandler()
{  var firstInput = input[0].value;
   var secondInput = input[1].value;
   var thirdInput = input[2].value;
   //console.log(firstInput);;

function validateInput(input1,input2,input3){
   if(input1>0 && input2>0 && input3>0)
     return true;
   else
   return false;

}


   if(firstInput.length>0 && secondInput.length>0 && thirdInput.length>0)
   {    var input1=Number(firstInput);
      var input2=Number(secondInput);
      var input3=Number(thirdInput);
       var checkInput = validateInput(input1,input2,input3)
      if(checkInput)
      {   
        var totalInitialPrice=input1 *input2;
        var totalCurrentPrice=input3 * input2;
        if(totalInitialPrice>totalCurrentPrice)
        { 

        }
        else 
        {   
           
        }
      }
      else
      showMessage("Please enter valid inputs 😊")

   }
   else
   {  
      showMessage("Please enter all the required input fields.")
   }



}







checkButton.addEventListener("click", clickHandler);