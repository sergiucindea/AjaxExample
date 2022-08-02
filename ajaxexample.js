
function concatenate() {
    let fValue = jQuery("#Value1").val();
    let sValue = jQuery("#Value2").val();
    if (fValue && sValue) {
        jQuery.ajax({
            url: `AjaxExample/Concat?a=${fValue}&b=${sValue}`,
            success: function (response) {
                jQuery("#test").text(response);
            }
        });
    }
}

function convert() {
    let arr = jQuery("#Array").val();
    if (arr) {
        arr = arr.split(',');
    }

    jQuery.ajax({
        url: "AjaxExample/Convert",
        type: "POST",
        data: jQuery.param({ array : arr }),
        success: function (response) {
            jQuery("#test-conv").text(response);
            console.log(typeof response);
        }
    });
}

function evaluate(num1, num2, operation) {
    jQuery.ajax({
        url: `AjaxExample/${operation}?a=${num1}&b=${num2}`,
        success: function (response) {
            jQuery("#test").text(response);
        }
    })
}

function chooseOption() {
    let selectedOption = jQuery("#select-option option:selected");
    let operation = selectedOption.text();
    return operation;
}

function doOperation() {
    let val1 = jQuery("#Value1").val();
    let val2 = jQuery("#Value2").val();
    let option = chooseOption();

    if (val1 || val2 && option) {
        evaluate(val1, val2, option);
    } else {
        console.log("ok2");
    }

}

function negate() {
    let value = jQuery("#Value").val();
    if (value) {
        jQuery.ajax({
            url: `AjaxExample/Negate?a=${value}`,
            success: function (response) {
                jQuery("#test-neg").text(response);
            }
        })
    }
}

function convert() {
    let value = jQuery("#ValueConv").val().split(',');
    jQuery.ajax({
        url: `AjaxExample/Convert`,
        type: "POST",
        data: jQuery.param({ array: value }),
        success: function (response) {
            jQuery("#test-conv").text(response);
        }
    });
}

function run() {
    jQuery(".evaluate").click(doOperation);
    jQuery(".evaluate-negate").click(negate);
    jQuery(".evaluate-conv").click(convert);
}

run();