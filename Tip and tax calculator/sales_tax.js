"use strict"

//Run program useing this main processing function
$(document).ready( function() {
    $("#calculate").click(function() {

        //Grab user input
        var subtotal = parseFloat($("#subtotal").val());
        var taxRate = parseFloat($("#tax_rate").val());
        var tip = parseFloat($("#tip").val());

        //Data validation
        
        //Declare the correctValidationCount variable
        var correctValidationCount = 0;
        
        //Handle the subtotal data validation
        if (isNaN(subtotal) || subtotal <= 0) {
            $("#subtotal").next().text("Subtotal must be higher than zero");
        }
        else if (isNaN(subtotal) == false) {
            $("#subtotal").next().text("");
            correctValidationCount++;
        }

        //Handle the taxRate data validation
        if (isNaN(taxRate) || taxRate < 0 || taxRate > 100) {
            $("#tax_rate").next().text("Tax must be between 0 and 100");
        }
        else if (isNaN(taxRate) == false) {
            $("#tax_rate").next().text("");
            correctValidationCount++;
        }

        //Handle the tip data validation
        if (isNaN(tip) || tip < 0) {
            $("#tip").next().text("Tip must be a number");
        }
        else if (isNaN(subtotal) == false) {
            $("#tip").next().text("");
            correctValidationCount++;
        }
        
        //Run calculculations
        if (correctValidationCount == 3) {
            var total = 0;
            var salesTax = (subtotal * taxRate / 100);
            var tipAmount = (subtotal * tip / 100);
            total = (total + subtotal + salesTax + tipAmount);

            //Display results
            $("#sales_tax").val(salesTax);
            $("#tip_amount").val(tipAmount);
            $("#total").val(total);
        }
        
    }); //End calculate button

    //Run the clear button
    $("#clear").click(function() {
        //debugger;
        //Clear the span error messages
        $("#subtotal").next().text("");
        $("#tax_rate").next().text("");
        $("#tip").next().text("");

        //Clear the text boxes
        $("#subtotal").val("");
        $("#tax_rate").val("");
        $("#tip").val("");
        $("#sales_tax").val("");
        $("#tip_amount").val("");
        $("#total").val("");

    }); //End the clear button

}); //End ready

