document.addEventListener("DOMContentLoaded", () => {

    // ============================================
    // FURIOUS GARAGE - CATÁLOGO DE 15 VEHÍCULOS
    // ============================================

    const vehiculos = [
        {
            id: 1,
            marca: "Toyota",
            modelo: "Supra MK4",
            anio: 1994,
            conductor: "Brian O'Conner",
            pelicula: "The Fast and the Furious (2001)",
            motor: "2JZ-GTE 3.0L Twin Turbo",
            potencia: "Preparación personalizada",
            precio: 125000,
            imagenLocal: "IMG/SUPRAJPG.jpg",
            imagenesAlternativas: [
                "IMG/SUPRA.JPG.jpg",
                "IMG/SUPRA.jpg",
                "IMG/SUPRA.JPG",
                "IMG/SUPRAJPG.jpeg"
            ],
            descripcion: "El Supra naranja de Brian es uno de los autos más reconocidos de la primera película."
        },
        {
            id: 2,
            marca: "Nissan",
            modelo: "Skyline GT-R R34",
            anio: 1999,
            conductor: "Brian O'Conner",
            pelicula: "2 Fast 2 Furious (2003)",
            motor: "RB26DETT 2.6L Twin Turbo",
            potencia: "Preparación personalizada",
            precio: 165000,
            imagenLocal: "IMG/NISSAN.JPG",
            descripcion: "El Skyline plateado con detalles azules se convirtió en uno de los símbolos de Brian."
        },
        {
            id: 3,
            marca: "Dodge",
            modelo: "Charger R/T 1970",
            anio: 1970,
            conductor: "Dominic Toretto",
            pelicula: "The Fast and the Furious (2001)",
            motor: "V8 preparado",
            potencia: "Preparación personalizada",
            precio: 190000,
            imagenLocal: "IMG/Dodge.jpg",
            descripcion: "El Charger negro representa la pasión de Dom por los muscle cars estadounidenses."
        },
        {
            id: 4,
            marca: "Mazda",
            modelo: "RX-7 VeilSide",
            anio: 1997,
            conductor: "Han Lue",
            pelicula: "Tokyo Drift (2006)",
            motor: "Rotativo 13B",
            potencia: "Preparación personalizada",
            precio: 145000,
            imagenLocal: "IMG/RX7.webp",
            descripcion: "El RX-7 naranja y negro de Han es uno de los autos más famosos de Tokyo Drift."
        },
        {
            id: 5,
            marca: "Mitsubishi",
            modelo: "Eclipse GSX",
            anio: 1995,
            conductor: "Brian O'Conner",
            pelicula: "The Fast and the Furious (2001)",
            motor: "2.0L Turbo",
            potencia: "Preparación personalizada",
            precio: 45000,
            imagenLocal: "IMG/ECLIPSE.jpg",
            descripcion: "El Eclipse verde fue uno de los primeros vehículos de Brian en la saga."
        },
        {
            id: 6,
            marca: "Honda",
            modelo: "S2000",
            anio: 2001,
            conductor: "Suki",
            pelicula: "2 Fast 2 Furious (2003)",
            motor: "2.0L VTEC",
            potencia: "Preparación personalizada",
            precio: 55000,
            imagenLocal: "IMG/S2000.jpg",
            descripcion: "El Honda S2000 rosa de Suki destaca por su llamativa personalización."
        },
        {
            id: 7,
            marca: "Mitsubishi",
            modelo: "Lancer Evolution VII",
            anio: 2002,
            conductor: "Brian O'Conner",
            pelicula: "2 Fast 2 Furious (2003)",
            motor: "4G63 2.0L Turbo",
            potencia: "Preparación personalizada",
            precio: 60000,
            imagenLocal: "IMG/LANCER.avif",
            descripcion: "El Evolution VII amarillo de Brian participa en las misiones de la segunda película."
        },
        {
            id: 8,
            marca: "Nissan",
            modelo: "350Z",
            anio: 2003,
            conductor: "Takashi (DK)",
            pelicula: "Tokyo Drift (2006)",
            motor: "V6 3.5L",
            potencia: "Preparación personalizada",
            precio: 48000,
            imagenLocal: "IMG/350Z.webp",
            descripcion: "El Nissan 350Z de DK es uno de los vehículos centrales de las carreras de drift."
        },
        {
            id: 9,
            marca: "Nissan",
            modelo: "Silvia S15",
            anio: 1999,
            conductor: "Han / Sean",
            pelicula: "Tokyo Drift (2006)",
            motor: "SR20DET Turbo",
            potencia: "Preparación personalizada",
            precio: 65000,
            imagenLocal: "IMG/SILVIA.webp",
            descripcion: "Conocido como Mona Lisa, el Silvia S15 aparece al inicio del aprendizaje de Sean."
        },
        {
            id: 10,
            marca: "Ford",
            modelo: "Mustang Fastback 1967",
            anio: 1967,
            conductor: "Sean Boswell",
            pelicula: "Tokyo Drift (2006)",
            motor: "Motor modificado",
            potencia: "Preparación personalizada",
            precio: 110000,
            imagenLocal: "IMG/MUSTANG.jpg",
            descripcion: "El Mustang Fastback protagoniza la carrera final de Tokyo Drift."
        },
        {
            id: 11,
            marca: "Volkswagen",
            modelo: "Jetta MK3",
            anio: 1995,
            conductor: "Jesse",
            pelicula: "The Fast and the Furious (2001)",
            motor: "Preparación deportiva",
            potencia: "Personalizada",
            precio: 35000,
            imagenLocal: "IMG/JETTA.webp",
            descripcion: "El Jetta blanco de Jesse es recordado por su estética tuning."
        },
        {
            id: 12,
            marca: "Mazda",
            modelo: "RX-7 FD",
            anio: 1993,
            conductor: "Dominic Toretto",
            pelicula: "The Fast and the Furious (2001)",
            motor: "Rotativo 13B",
            potencia: "Preparación personalizada",
            precio: 85000,
            imagenLocal: "IMG/RX7FD.jpg",
            descripcion: "El RX-7 rojo de Dom aparece en una de las primeras carreras de la saga."
        },
        {
            id: 13,
            marca: "Chevrolet",
            modelo: "Chevelle SS 1970",
            anio: 1970,
            conductor: "Dominic Toretto",
            pelicula: "Fast & Furious (2009)",
            motor: "V8",
            potencia: "Preparación personalizada",
            precio: 105000,
            imagenLocal: "IMG/CHEVELLE.jpg",
            descripcion: "El Chevelle SS es otro de los muscle cars clásicos asociados a Dom."
        },
        {
            id: 14,
            marca: "W Motors",
            modelo: "Lykan HyperSport",
            anio: 2013,
            conductor: "Dom / Brian",
            pelicula: "Furious 7 (2015)",
            motor: "Bóxer 3.7L Twin Turbo",
            potencia: "780 HP declarados",
            precio: 3400000,
            imagenLocal: "IMG/LYKAN.jpg",
            descripcion: "El Lykan HyperSport protagoniza una de las escenas más espectaculares de Furious 7."
        },
        {
            id: 15,
            marca: "Ford",
            modelo: "Escort RS1600",
            anio: 1970,
            conductor: "Brian O'Conner",
            pelicula: "Fast & Furious 6 (2013)",
            motor: "Motor preparado",
            potencia: "Personalizada",
            precio: 95000,
            imagenLocal: "IMG/ESCORT.avif",
            descripcion: "El Escort clásico de Brian aparece en la sexta entrega de la saga."
        }
    ];

    // ============================================
    // ELEMENTOS DE LA PÁGINA
    // ============================================

    const catalogo = document.getElementById("catalogoVehiculos");
    const buscarInput = document.getElementById("buscarVehiculo");
    const filtroPelicula = document.getElementById("filtrarPelicula");
    const filtroConductor = document.getElementById("filtrarConductor");
    const botonFavoritos = document.getElementById("botonFavoritos");
    const limpiarFiltros = document.getElementById("limpiarFiltros");
    const contador = document.getElementById("contadorVehiculos");

    if (!catalogo) {
        console.error("No se encontró el catálogo de vehículos.");
        return;
    }

    const formatoPrecio = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    });

    let favoritos = [];

    try {
        const guardados = JSON.parse(
            localStorage.getItem("furiousGarageFavoritos") || "[]"
        );
        favoritos = Array.isArray(guardados) ? guardados : [];
    } catch (error) {
        favoritos = [];
    }

    let busqueda = "";
    let peliculaActual = "Todas";
    let conductorActual = "Todos";
    let soloFavoritos = false;

    // ============================================
    // IMÁGENES LOCALES
    // ============================================

    function imagenRespaldo(auto) {
        const nombre = `${auto.marca} ${auto.modelo}`
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;");

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="1000" height="620">
                <rect width="1000" height="620" fill="#111116"/>
                <path d="M-100 600 L1000 120"
                      stroke="#e21d2b"
                      stroke-width="100"
                      opacity=".18"/>
                <text x="500" y="205"
                      font-family="Arial"
                      font-size="52"
                      font-weight="bold"
                      text-anchor="middle"
                      fill="#e21d2b">
                    FURIOUS GARAGE
                </text>
                <text x="500" y="315"
                      font-family="Arial"
                      font-size="38"
                      text-anchor="middle"
                      fill="white">
                    ${nombre}
                </text>
                <text x="500" y="385"
                      font-family="Arial"
                      font-size="24"
                      text-anchor="middle"
                      fill="#aaaaaa">
                    Fotografía no disponible
                </text>
            </svg>
        `;

        return "data:image/svg+xml;charset=utf-8," +
            encodeURIComponent(svg);
    }

    function rutasImagen(auto) {
        return [
            auto.imagenLocal,
            ...(auto.imagenesAlternativas || [])
        ].filter(Boolean);
    }

    // Carga las imágenes desde la carpeta IMG publicada.
    // Conserva exactamente las mayúsculas y minúsculas.
    // Mantiene el respaldo original cuando una imagen falla.

    function cargarImagenLocal(elemento, auto) {
        const rutas = rutasImagen(auto);
        const base = new URL(
            "/FURIOUS-GARAGE/",
            window.location.origin
        );

        let indice = 0;

        function intentarSiguiente() {
            if (indice >= rutas.length) {
                elemento.onerror = null;
                elemento.onload = null;
                elemento.src = imagenRespaldo(auto);

                console.error(
                    `No se pudo cargar la imagen de ${auto.modelo}.`,
                    rutas
                );
                return;
            }

            const ruta = rutas[indice++];
            const url = new URL(ruta, base).href;

            elemento.onerror = intentarSiguiente;

            elemento.onload = () => {
                elemento.onerror = null;
                auto.imagen = url;
            };

            elemento.src = url;
        }

        intentarSiguiente();
    }

    // ============================================
    // FILTROS
    // ============================================

    const peliculas = [...new Set(
        vehiculos.map(auto => auto.pelicula)
    )];

    peliculas.forEach(pelicula => {
        const opcion = document.createElement("option");
        opcion.value = pelicula;
        opcion.textContent = pelicula;
        filtroPelicula.appendChild(opcion);
    });

    const conductores = [...new Set(
        vehiculos.map(auto => auto.conductor)
    )].sort();

    conductores.forEach(conductor => {
        const opcion = document.createElement("option");
        opcion.value = conductor;
        opcion.textContent = conductor;
        filtroConductor.appendChild(opcion);
    });

    function guardarFavoritos() {
        try {
            localStorage.setItem(
                "furiousGarageFavoritos",
                JSON.stringify(favoritos)
            );
        } catch (error) {
            console.warn("No se pudieron guardar los favoritos.");
        }
    }

    function filtrarVehiculos() {
        return vehiculos.filter(auto => {
            const texto = [
                auto.marca,
                auto.modelo,
                auto.conductor,
                auto.pelicula
            ].join(" ").toLowerCase();

            return (
                texto.includes(busqueda) &&
                (peliculaActual === "Todas" ||
                    auto.pelicula === peliculaActual) &&
                (conductorActual === "Todos" ||
                    auto.conductor === conductorActual) &&
                (!soloFavoritos || favoritos.includes(auto.id))
            );
        });
    }

    // ============================================
    // MOSTRAR VEHÍCULOS
    // ============================================

    function mostrarVehiculos() {
        const resultados = filtrarVehiculos();

        contador.textContent =
            `${resultados.length} de ${vehiculos.length} vehículos`;

        catalogo.innerHTML = "";

        if (resultados.length === 0) {
            catalogo.innerHTML = `
                <div class="col-12">
                    <div class="sin-resultados">
                        <i class="bi bi-car-front"></i>
                        <h3>No encontramos vehículos</h3>
                        <p>Prueba con otros filtros.</p>
                    </div>
                </div>
            `;
            return;
        }

        resultados.forEach(auto => {
            const esFavorito = favoritos.includes(auto.id);
            const columna = document.createElement("div");

            columna.className = "col-md-6 col-xl-4";

            columna.innerHTML = `
                <article class="tarjeta-auto">
                    <div class="auto-foto">
                        <img
                            alt="${auto.marca} ${auto.modelo}"
                            loading="lazy"
                        >

                        <span class="auto-numero">
                            LEGEND #${String(auto.id).padStart(2, "0")}
                        </span>

                        <button
                            type="button"
                            class="auto-favorito ${esFavorito ? "activo" : ""}"
                            data-favorito="${auto.id}"
                            aria-label="Cambiar favorito"
                        >
                            <i class="bi ${
                                esFavorito ? "bi-heart-fill" : "bi-heart"
                            }"></i>
                        </button>
                    </div>

                    <div class="auto-info">
                        <span class="auto-pelicula">
                            ${auto.pelicula}
                        </span>

                        <h3>${auto.marca} ${auto.modelo}</h3>

                        <p class="auto-conductor">
                            <i class="bi bi-person-fill"></i>
                            ${auto.conductor}
                        </p>

                        <div class="auto-datos">
                            <span>
                                <i class="bi bi-calendar3"></i>
                                ${auto.anio}
                            </span>

                            <span>
                                <i class="bi bi-gear-fill"></i>
                                ${auto.motor}
                            </span>
                        </div>

                        <div class="auto-precio">
                            ${formatoPrecio.format(auto.precio)}
                            <small>PRECIO ILUSTRATIVO · USD</small>
                        </div>

                        <button
                            class="btn-detalles"
                            type="button"
                            data-detalle="${auto.id}"
                        >
                            VER DETALLES
                            <i class="bi bi-arrow-right"></i>
                        </button>

                        <button
                            class="btn btn-danger w-100 mt-2"
                            type="button"
                            data-comprar="${auto.id}"
                        >
                            <i class="bi bi-cart-fill"></i>
                            COMPRAR AHORA
                        </button>
                    </div>
                </article>
            `;

            catalogo.appendChild(columna);

            const imagen = columna.querySelector(".auto-foto img");
            cargarImagenLocal(imagen, auto);
        });
    }

    // ============================================
    // VENTANA DE DETALLES
    // ============================================

    const modalElemento = document.getElementById("modalVehiculo");

    const modal = bootstrap.Modal.getOrCreateInstance(
        modalElemento
    );

    function mostrarDetalles(id) {
        const auto = vehiculos.find(v => v.id === id);

        if (!auto) return;

        document.getElementById("tituloModalVehiculo")
            .textContent = `${auto.marca} ${auto.modelo}`;

        document.getElementById("contenidoModalVehiculo")
            .innerHTML = `
                <img
                    id="fotoModal"
                    alt="${auto.marca} ${auto.modelo}"
                    class="modal-imagen"
                >

                <h3 class="mt-4">
                    ${auto.marca} ${auto.modelo}
                </h3>

                <p class="text-secondary">
                    ${auto.descripcion}
                </p>

                <div class="modal-datos">
                    <div class="modal-dato">
                        <small>CONDUCTOR</small>
                        <strong>${auto.conductor}</strong>
                    </div>

                    <div class="modal-dato">
                        <small>PELÍCULA</small>
                        <strong>${auto.pelicula}</strong>
                    </div>

                    <div class="modal-dato">
                        <small>AÑO DEL MODELO</small>
                        <strong>${auto.anio}</strong>
                    </div>

                    <div class="modal-dato">
                        <small>MOTOR</small>
                        <strong>${auto.motor}</strong>
                    </div>

                    <div class="modal-dato">
                        <small>POTENCIA</small>
                        <strong>${auto.potencia}</strong>
                    </div>

                    <div class="modal-dato">
                        <small>COLECCIÓN</small>
                        <strong>
                            LEGEND #${String(auto.id).padStart(2, "0")}
                        </strong>
                    </div>
                </div>

                <div class="modal-precio">
                    ${formatoPrecio.format(auto.precio)}
                </div>

                <small class="text-secondary">
                    Precio ilustrativo. No es una oferta de venta.
                    La fotografía puede representar otro ejemplar
                    del mismo modelo.
                </small>
            `;

        const fotoModal = document.getElementById("fotoModal");
        cargarImagenLocal(fotoModal, auto);

        modal.show();
    }

    // ============================================
    // EVENTOS
    // ============================================

    buscarInput.addEventListener("input", () => {
        busqueda = buscarInput.value.trim().toLowerCase();
        mostrarVehiculos();
    });

    filtroPelicula.addEventListener("change", () => {
        peliculaActual = filtroPelicula.value;
        mostrarVehiculos();
    });

    filtroConductor.addEventListener("change", () => {
        conductorActual = filtroConductor.value;
        mostrarVehiculos();
    });

    botonFavoritos.addEventListener("click", () => {
        soloFavoritos = !soloFavoritos;

        botonFavoritos.classList.toggle(
            "activo",
            soloFavoritos
        );

        mostrarVehiculos();
    });

    limpiarFiltros.addEventListener("click", () => {
        busqueda = "";
        peliculaActual = "Todas";
        conductorActual = "Todos";
        soloFavoritos = false;

        buscarInput.value = "";
        filtroPelicula.value = "Todas";
        filtroConductor.value = "Todos";

        botonFavoritos.classList.remove("activo");

        mostrarVehiculos();
    });

    catalogo.addEventListener("click", evento => {
        const favorito = evento.target.closest("[data-favorito]");

        if (favorito) {
            const id = Number(favorito.dataset.favorito);

            if (favoritos.includes(id)) {
                favoritos = favoritos.filter(item => item !== id);
            } else {
                favoritos.push(id);
            }

            guardarFavoritos();
            mostrarVehiculos();
            return;
        }

        const detalle = evento.target.closest("[data-detalle]");

        if (detalle) {
            mostrarDetalles(Number(detalle.dataset.detalle));
        }
    });

    // ============================================
    // SISTEMA DE COMPRA SIMULADA
    // ============================================

    const modalCompraElemento = document.getElementById("modalCompra");

    const modalCompra = bootstrap.Modal.getOrCreateInstance(
        modalCompraElemento
    );

    const formularioCompra = document.getElementById("formularioCompra");
    const resumenCompra = document.getElementById("resumenCompra");
    const confirmacionCompra = document.getElementById("confirmacionCompra");
    const mensajeCompra = document.getElementById("mensajeCompra");

    let vehiculoEnCompra = null;

    // ABRIR FORMULARIO DE COMPRA

    catalogo.addEventListener("click", evento => {

        const botonComprar = evento.target.closest("[data-comprar]");

        if (!botonComprar) return;

        const id = Number(botonComprar.dataset.comprar);

        vehiculoEnCompra = vehiculos.find(auto => auto.id === id);

        if (!vehiculoEnCompra) return;

        formularioCompra.reset();

        formularioCompra.classList.remove("d-none");
        confirmacionCompra.classList.add("d-none");

        resumenCompra.textContent =
            `${vehiculoEnCompra.marca} ${vehiculoEnCompra.modelo} — ` +
            formatoPrecio.format(vehiculoEnCompra.precio);

        modalCompra.show();

    });

    // CONFIRMAR COMPRA SIMULADA

    formularioCompra.addEventListener("submit", evento => {

        evento.preventDefault();

        if (!formularioCompra.reportValidity() || !vehiculoEnCompra) {
            return;
        }

        const nombre = document.getElementById("nombreComprador")
            .value.trim();

        if (nombre.length < 3) return;

        const numeroPedido = "FG-" +
            Date.now().toString(36).toUpperCase();

        mensajeCompra.textContent =
            `${nombre}, tu pedido del ${vehiculoEnCompra.marca} ` +
            `${vehiculoEnCompra.modelo} fue registrado correctamente. ` +
            `Número de pedido: ${numeroPedido}. ` +
            `Esta es una compra simulada y no se realizó ningún pago.`;

        formularioCompra.classList.add("d-none");
        confirmacionCompra.classList.remove("d-none");

    });

    // ============================================
    // INICIO
    // ============================================

    const anioActual = document.getElementById("anioActual");

    if (anioActual) {
        anioActual.textContent = new Date().getFullYear();
    }

    mostrarVehiculos();

    console.log(
        `FURIOUS GARAGE: ${vehiculos.length} vehículos cargados.`
    );

});
