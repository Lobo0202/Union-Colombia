// JSON de usuarios registrados (solo como ejemplo)
var users = [
    { username: "usuario1", password: "contraseña1" },
    { username: "usuario2", password: "contraseña2" },
    { username: "usuario3", password: "contraseña3" }
  ];
  
  // Función para validar las credenciales
  function validarCredenciales() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Buscar el usuario en el JSON
    var usuarioValido = users.find(function(user) {
      return user.username === username && user.password === password;
    });
  
    if (usuarioValido) {
      // El usuario ha iniciado sesión correctamente
      alert("¡Inicio de sesión exitoso!");
    } else {
      // Las credenciales son inválidas
      alert("Nombre de usuario o contraseña incorrectos.");
    }
  }
  
  // Asignar la función de validación al formulario
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar envío del formulario
    validarCredenciales();
  });
  