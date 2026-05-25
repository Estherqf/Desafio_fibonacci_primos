// VERIFICAR PIN PRIMO

document.getElementById("formPin")
.addEventListener("submit", function(event){
    event.preventDefault();
    let pin = parseInt(
        document.getElementById("pin").value
    );

    let contador = 0;

    if(pin <= 1 || isNaN(pin)){
        document.getElementById("resultadoPin").innerHTML =
        "Ingrese un PIN válido mayor a 1.";
    }else{
        for(let i = 1; i <= pin; i++){
            if(pin % i == 0){
                contador++;
            }
        }

        if(contador == 2){
            document.getElementById("resultadoPin").innerHTML =
            "✅ El PIN "
            + pin +
            " es un número primo y puede considerarse más seguro.";
        }else{
            document.getElementById("resultadoPin").innerHTML =
            "❌ El PIN "
            + pin +
            " no es un número primo.";
        }
    }
});

// AHORRO FIBONACC

document.getElementById("formAhorro")
.addEventListener("submit", function(event){
    event.preventDefault();
    let meses = parseInt(
        document.getElementById("meses").value
    );

    let a = 0;
    let b = 1;
    let c;
    let texto = "";
    let total = 0;

    if(meses <= 0 || isNaN(meses)){
        document.getElementById("resultadoAhorro").innerHTML =
        "Ingrese una cantidad válida de meses.";
    }else{
        for(let i = 1; i <= meses; i++){
            texto +=
            "Mes "
            + i +
            " → Bs. "
            + b +
            "<br>";
            total += b;
            c = a + b;
            a = b;
            b = c;
        }
        texto +=
        "<br><strong>Total Ahorrado: Bs. "
        + total +
        "</strong>";

        document.getElementById("resultadoAhorro").innerHTML =
        texto;
    }
});