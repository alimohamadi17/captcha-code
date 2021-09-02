alert(
    'welcome'
)


//  step one;

var randomText = "";


var randomChars = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM"

//step two
// for create 6 charset for code we need for loop and function for event



function Ali() {

    for (var i = 0; i < 6; i++) {
        var randomNumber = Math.floor(Math.random() * randomChars.length)
        randomText += randomChars[randomNumber];
    }

    document.getElementById('content').innerHTML = randomText
    randomText = ''

}





