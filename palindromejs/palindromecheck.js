let getInput = prompt("Enter a text: ");
function palindromeCheck(getInput) {
    let arrayValue = getInput.split("");
    let reversedArrayValues = arrayValue.reverse();
    let reversedString = reversedArrayValues.join("");
    if (getInput == reversedString) {
        alert("The word " + getInput + " is a palindrome.");
    }
    else {
        alert(`the word "${getInput}" is not a palindrome.`);
    }
}
palindromeCheck(getInput);


