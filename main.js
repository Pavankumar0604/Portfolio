function sendEmail() {

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var number = document.querySelector("#number").value;
  var message = document.querySelector("#message").value;

  Email.send({
      Host: "smtp.gmail.com",
      Username: "penumurupavankumar@gmail.com",
      Password: "hwehlysymjvetvco",
      To: 'penumurupavankumar@gmail.com',
      From: name,
      Subject: email,number,
      Body: message,
  })
      .then(function (message) {
          alert("mail sent successfully")
      });
}