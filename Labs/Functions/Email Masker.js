function maskEmail(email) {
    const atIndex = email.indexOf("@");
    const mask = email.slice(0, 1) + "*".repeat(atIndex - 2) + email.slice(atIndex -1);
    return mask;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));