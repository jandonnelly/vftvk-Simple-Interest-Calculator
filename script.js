function checkdata(){
    //Create references to the input elements we wish to validate
    var amount = document.getElementById("principal").value;
    var Rate   = document.getElementById("rate").value;
    var y  = document.getElementById("years").value;



    //Check if username field is empty
    if(amount.value == ""){
          alert("Please enter an amount");
          amount.focus();
          return false;
    }
   //Check if email field is empty
    if(Rate.value == ""){
          alert("Please select a rate");
          Rate.focus();
          return false;
    }  
    //Check if years field is empty 
    if(y.value == ""){
        alert("Please select a number of years");
        y.focus();
        return false;
  } 


   //If all is well return true.
    return true;
} 

function compute()
{
    // First we will check to see if the principal value has been provided by the user. There is no need to validate the other inputs as they are pre-populated with default options 
    var principal = document.getElementById("principal").value;
    if(principal == "" || principal <= 0)
    {
        alert("Please enter a value");
        document.getElementById("principal").focus();

        return ;
    }  


    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate / 100;

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    // Result to be displayed to the user when the compute button is clicked 
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
}


function SliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_display");
    output.innerHTML = slider.value; // Display the default slider value 10.50%

    // Updates the current slider value (each time you drag the slider handle)
    slider.oninput = function() 
    {
        output.innerHTML = this.value + "%";
    }  
}

        