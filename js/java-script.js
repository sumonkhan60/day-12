
$('#addition').click(function () {
    var firstNumberValue = Number($('#firstNumber').val());
    var secondNumberValue = Number($('#secondNumber').val());

    var result = firstNumberValue + secondNumberValue;

    $('#result').val(result);
});

$('#subtraction').click(function () {
    var firstNumberValue = Number($('#firstNumber').val());
    var secondNumberValue = Number($('#secondNumber').val());

    var result = firstNumberValue - secondNumberValue;
    $('#result').val(result);
});

$('#multiplication').click(function () {
    var firstNumberValue = Number($('#firstNumber').val());
    var secondNumberValue = Number($('#secondNumber').val());

    var result = firstNumberValue * secondNumberValue;
    $('#result').val(result);
});

$('#division').click(function () {
    var firstNumberValue = Number($('#firstNumber').val());
    var secondNumberValue = Number($('#secondNumber').val());

    var result = firstNumberValue / secondNumberValue;
    $('#result').val(result);
});

$('#remainder').click(function () {
    var firstNumberValue = Number($('#firstNumber').val());
    var secondNumberValue = Number($('#secondNumber').val());

    var result = firstNumberValue % secondNumberValue;
    $('#result').val(result);
});










// $('#btn').click(function () {
//    var firstNameValue = $('#firstName').val();
//    var lastNameValue = $('#lastName').val();
//    var fullNameValue = firstNameValue+' '+lastNameValue;
//
//    $('#fullName').val(fullNameValue);
// });




 // $('#h1').html('Hello World') ;














//  var redBtnElement = document.getElementById('redBtn');
// redBtnElement.onmouseover = function () {
//     var divOneElement= document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'red';
//     divOneElement.className = 'class-one';
// };
// var greenBtnElement = document.getElementById('greenBtn');
// greenBtnElement.onmouseover = function () {
//     var divOneElement= document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'green';
//     divOneElement.className = 'class-two';
// };
// var blueBtnElement = document.getElementById('blueBtn');
// blueBtnElement.onmouseover = function () {
//     var divOneElement= document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'blue';
//     divOneElement.className = 'class-three';
// };
// var defaultBtnElement = document.getElementById('defaultBtn');
// defaultBtnElement.onmouseover = function () {
//     var divOneElement= document.getElementById('divOne');
//     divOneElement.className = 'my-style'
// };