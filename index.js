function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const seviceID = "service_ogp1nu4";
    const templateID = "template_yv62u0v";

emailjs
    .send(seviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully")
    })
    .catch((err) => console.log(err));
}

