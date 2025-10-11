document.addEventListener("DOMContentLoaded",() => {
    const btnHora = document.getElementById("btnHora");
    const resultado = document.getElementById("resultado");
    btnHora.addEventListener("click",() =>{
        const fecha = new Date();
        resultado.textContent="Fecha y hora actual: " + fecha;
    });
});