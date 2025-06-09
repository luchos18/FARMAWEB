document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-registro");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("¡Registro exitoso! Serás redirigido a la página principal.");
      window.location.href = "farmacia.html";
    });
  }
});
function buscar() {
  const texto = document.getElementById("input-busqueda").value.toLowerCase();
  if (texto.includes("paracetamol")) {
    window.location.href = "productos.html";
  } else if (texto.includes("registro")) {
    window.location.href = "registro.html";
  } else {
    alert("No se encontró ningún resultado relacionado.");
  }
}
function buscar() {
  const texto = document.getElementById("input-busqueda").value.toLowerCase().trim();

  const rutas = {
    "inicio": "index.html",
    "farmacia": "index.html",
    "salud": "index.html",
    "producto": "productos.html",
    "productos": "productos.html",
    "paracetamol": "productos.html",
    "ibuprofeno": "productos.html",
    "aspirina": "productos.html",
    "vitaminas": "productos.html",
    "registro": "registro.html",
    "registrarse": "registro.html",
    "crear cuenta": "registro.html",
    "servicios": "servicios.html",
    "servicio": "servicios.html",
    "consulta": "servicios.html",
    "entrega": "servicios.html",
    "domicilio": "servicios.html",
    "nosotros": "nosotros.html",
    "quienes somos": "nosotros.html",
    "historia": "nosotros.html",
    "contacto": "contacto.html",
    "contactarnos": "contacto.html",
    "ayuda": "contacto.html"
  };

  for (let clave in rutas) {
    if (texto.includes(clave)) {
      window.location.href = rutas[clave];
      return;
    }
  }

  alert("No se encontró ningún resultado relacionado.");
}

