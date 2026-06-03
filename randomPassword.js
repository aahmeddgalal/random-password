function generate() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let passwordLength = document.getElementById("length").value

    document.getElementById("password1").innerText = ""
    document.getElementById("password2").innerText = ""

    if (document.getElementById("includeSymbols").checked) {
        characters += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    }

    if (document.getElementById("includeNumbers").checked) {
        characters += '0123456789'
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomChar1 = Math.floor(Math.random() * characters.length)
        let randomChar2 = Math.floor(Math.random() * characters.length)
        
        document.getElementById("password1").innerText += characters[randomChar1]
        document.getElementById("password2").innerText += characters[randomChar2]
    }
}

function copy(id) {
    let text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    document.getElementById(id).innerText = "Copied!";
    setTimeout(() => {
        document.getElementById(id).innerText = text;
    }, 2000);
}