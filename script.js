const form = document.getElementById("form1");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const contraseña = document.getElementById("contraseña").value;

  console.log(nombre, email, contraseña);

  if (
    nombre == "Camilo" &&
    email == "camilo007jv04@gmail.com" &&
    contraseña == "camilo007"
  ) {
    const result = document.getElementById("result");
    result.innerHTML = `<center>Admitido ${nombre} <h3><a href="principal.html"><h3>Pulse aquí para continuar</h3></a></center>`;
    alert("Admitido, puede pasar "+nombre);
  } else {
    alert("Tu no eres Camilo, por favor ingresa de nuevo");
  }
});
