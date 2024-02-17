function checkFlag() {
    var userFlag = document.getElementById('flag').value.trim(); // Trim to remove leading/trailing whitespaces
    var correctFlag = 'CTF' + String.fromCharCode(123) + 'y0u' + String.fromCharCode(95) + 'W0n' + String.fromCharCode(95) + 'The' + String.fromCharCode(95) + 'Cha11enge' + String.fromCharCode(125);

    var secretFlag = 'SCT{iam_secret_but_1_am_not_flag}';

    if (userFlag === secretFlag) {
        document.getElementById('resultMessage').innerHTML = '<span style="color: #2ecc71;">Congratulations! It is the right flag: ' + correctFlag + '</span>';
    } else {
        document.getElementById('resultMessage').innerHTML = '<span style="color: #e74c3c;">Try again. It is not the right flag.</span>';
    }
}
