const categorias = [
  {
    nombre: "𝑻𝑨𝑪𝑶𝑺 𝑰𝑵𝑫𝑰𝑽𝑰𝑫𝑼𝑨𝑳𝑬𝑺",
    color: "#B31C0B",
    productos: [
      { nombre: "TACO DE CARNITAS", precio: 25, imagen: "imagenes/tacoscarnitas/tacocarnitas1.jpg" },
      { nombre: "REFRESCO", precio: 23, imagen: "imagenes/refrescos/refrescos.jpg" },
      { nombre: "QUESADILLA", precio: 10, imagen: "imagenes/tacoscarnitas/quesadilla.jpg" },
      { nombre: "ORDEN DE HUESITOS", precio: 50, imagen: "imagenes/tacoscarnitas/huesitos.jpg" }
    ]
  },
  {
    nombre: "𝑷𝑨𝑳 𝑨𝑵𝑻𝑶𝑱𝑶",
    color: "#B31C0B",
    productos: [
      { nombre: "ORDEN DE CHAMORRO", precio: 50, imagen: "imagenes/tacoscarnitas/chamorro.jpg" },
      { nombre: "1/2 DE CHAMORRO CON PEPINOS, RABANOS, JICAMA Y TORTILLAS (INCLUYE REFRESCO BIG COLA DE 300 ML)", precio: 100, imagen: "imagenes/tacoscarnitas/chamorro2.jpg" },
      {
      nombre: "BUFFET SURTIDA (LUNES A JUEVES)<br>- TACOS ILIMITADOS<br>- QUESADILLAS Y CHICHARRÓN<br>- REFRESCO ILIMITADO",
      precio: 83,
      imagen: "imagenes/tacoscarnitas/buffet.jpg"
      },
      {
      nombre: "BUFFET ESPECIAL (NO COMBINADOS)<br>-TACOS ILIMATADOS DE <br>- CUERITO<br>- COSTILLA<br>- FALDA<br>- CHAMORRO<br>- TROMPA<br>- CACHETE<br>- OREJA<br>- LENGUA<br>- MACIZA<br>- MOLLEJA<br>- BARRIGA<br>- SURTIDA<br>- BUCHE O NANA ",
      precio: 95,
      imagen: "imagenes/tacoscarnitas/buffet.jpg"
      }
    ]
  },
  {
  nombre: "𝑩𝑼𝑭𝑭𝑬𝑻",
  color: "#B31C0B",
  productos: [
    {
      nombre: "BUFFET SURTIDA (LUNES A JUEVES)<br>- TACOS ILIMITADOS<br>- QUESADILLAS Y CHICHARRÓN<br>- REFRESCO ILIMITADO",
      precio: 83,
      imagen: "imagenes/tacoscarnitas/buffet.jpg"
    },
    {
      nombre: "𝘽𝙐𝙁𝙁𝙀𝙏 𝙀𝙎𝙋𝙀𝘾𝙄𝘼𝙇 (NO COMBINADOS)<br>-TACOS ILIMATADOS DE <br>- CUERITO<br>- COSTILLA<br>- FALDA<br>- CHAMORRO<br>- TROMPA<br>- CACHETE<br>- OREJA<br>- LENGUA<br>- MACIZA<br>- MOLLEJA<br>- BARRIGA<br>- SURTIDA<br>- BUCHE O NANA ",
      precio: 95,
      imagen: "imagenes/tacoscarnitas/buffet.jpg"
    }
  ]
  }
];

let catIndex = 0;

function mostrarProductos(lista) {
  const grid = document.getElementById("productosGrid");
  grid.innerHTML = "";

  const soloUno = lista.length === 1;

  lista.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("producto-card");

    if (soloUno) {
      card.classList.add("producto-grande");
    }

    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" class="producto-img">
      <div class="producto-nombre">${p.nombre}</div>
      <div class="producto-precio">$${p.precio}</div>
    `;

    grid.appendChild(card);
  });
}

function mostrarCategoria() {
  const categoria = categorias[catIndex];
  document.querySelector(".categoria-titulo").textContent = `𝑶𝑭𝑬𝑹𝑻𝑨𝑺 ${categoria.nombre}`;
  document.querySelector("body").style.backgroundColor = categoria.color;
  mostrarProductos(categoria.productos);
  catIndex = (catIndex + 1) % categorias.length;
}

// Ejecutar inicialmente
mostrarCategoria();
setInterval(mostrarCategoria, 5000);
