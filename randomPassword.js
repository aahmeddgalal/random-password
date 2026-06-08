function generate() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    let passwordLength = Number(document.getElementById("length").value);

    let includeSymbols = document.getElementById("includeSymbols").checked;
    let includeNumbers = document.getElementById("includeNumbers").checked;

    if (includeSymbols) {
        characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    }

    if (includeNumbers) {
        characters += '0123456789';
    }

    document.getElementById("password1").innerText = "";
    document.getElementById("password2").innerText = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomChar1 = Math.floor(Math.random() * characters.length);
        let randomChar2 = Math.floor(Math.random() * characters.length);

        document.getElementById("password1").innerText += characters[randomChar1];
        document.getElementById("password2").innerText += characters[randomChar2];
    }
}

// im learning git and github so consider this a change

function copy(id) {
    let text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    document.getElementById(id).innerText = "Copied!";
    setTimeout(() => {
        document.getElementById(id).innerText = text;
    }, 2000);
}