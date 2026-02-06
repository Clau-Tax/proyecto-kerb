        console.log("JS conectado");
        
        
        const form = document.getElementById("formNombre");
        const input = document.getElementById("nombreInput");
        const lista = document.getElementById("listaNombres");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const nombre = input.value.trim();

            if (nombre !== "") {
                const li = document.createElement("li");
                li.textContent = nombre;
                lista.appendChild(li);

                input.value = ""; // limpia el input
                input.focus();    // vuelve a enfocar
            }
        });