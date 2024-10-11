function multiplicar() {
    const numero1 = Number(document.querySelector("#numero1").value)
    const numero2 = Number(document.querySelector("#numero2").value)

    const resultado = document.querySelector("resultado")
    resultado.innerHTML = `multiplicar: ${numero1 * numero2}`
}

const button = document.querySelector("button")
button.addEventListener("click", multiplicar)