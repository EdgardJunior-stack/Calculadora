/* ==========================================================
   01. FUNÇÕES MATEMÁTICAS
========================================================== */

/**
 * Soma dois números.
 */
function somar(numero1, numero2) {
    return numero1 + numero2;
}


/**
 * Subtrai o segundo número do primeiro.
 */
function subtrair(numero1, numero2) {
    return numero1 - numero2;
}


/**
 * Multiplica dois números.
 */
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}


/**
 * Divide o primeiro número pelo segundo.
 * Impede divisão por zero.
 */
function dividir(numero1, numero2) {

    if (numero2 === 0) {
        return null;
    }

    return numero1 / numero2;
}



/* ==========================================================
   02. ELEMENTOS DA INTERFACE
========================================================== */

const formulario =
    document.querySelector(
        "#formulario-calculadora"
    );

const campoNumero1 =
    document.querySelector("#numero1");

const campoNumero2 =
    document.querySelector("#numero2");

const campoOperacao =
    document.querySelector("#operacao");

const resultadoNaTela =
    document.querySelector("#resultado");



/* ==========================================================
   03. EXIBIÇÃO DO RESULTADO
========================================================== */

/**
 * Atualiza visualmente o resultado
 * da calculadora.
 */
function mostrarResultado(
    mensagem,
    possuiErro = false
) {

    resultadoNaTela.textContent =
        mensagem;

    resultadoNaTela.classList.remove(
        "resultado-sucesso",
        "resultado-erro",
        "animar-resultado"
    );


    if (possuiErro) {

        resultadoNaTela.classList.add(
            "resultado-erro"
        );

    } else {

        resultadoNaTela.classList.add(
            "resultado-sucesso"
        );

    }


    /*
     * Força o navegador a recalcular
     * o elemento para reiniciar
     * a animação.
     */
    void resultadoNaTela.offsetWidth;


    resultadoNaTela.classList.add(
        "animar-resultado"
    );

}



/* ==========================================================
   04. VALIDAÇÃO DOS CAMPOS
========================================================== */

/**
 * Verifica se os campos possuem
 * valores válidos.
 */
function validarNumeros(
    valorNumero1,
    valorNumero2,
    numero1,
    numero2
) {

    if (
        valorNumero1 === "" ||
        valorNumero2 === ""
    ) {

        mostrarResultado(
            "Preencha os dois números.",
            true
        );

        return false;
    }


    if (
        Number.isNaN(numero1) ||
        Number.isNaN(numero2)
    ) {

        mostrarResultado(
            "Digite apenas números válidos.",
            true
        );

        return false;
    }


    return true;

}



/* ==========================================================
   05. PROCESSAMENTO DA OPERAÇÃO
========================================================== */

/**
 * Identifica qual operação foi
 * escolhida e executa o cálculo.
 */
function calcular(
    numero1,
    numero2,
    operacao
) {

    if (operacao === "somar") {

        return somar(
            numero1,
            numero2
        );

    }


    if (operacao === "subtrair") {

        return subtrair(
            numero1,
            numero2
        );

    }


    if (operacao === "multiplicar") {

        return multiplicar(
            numero1,
            numero2
        );

    }


    if (operacao === "dividir") {

        return dividir(
            numero1,
            numero2
        );

    }


    return undefined;

}



/* ==========================================================
   06. EVENTO DE ENVIO DO FORMULÁRIO
========================================================== */

formulario.addEventListener(
    "submit",
    function (evento) {

        /*
         * Impede o formulário
         * de recarregar a página.
         */
        evento.preventDefault();


        /* ----------------------------------------------
           Valores originais dos inputs
        ---------------------------------------------- */

        const valorNumero1 =
            campoNumero1.value;

        const valorNumero2 =
            campoNumero2.value;


        /* ----------------------------------------------
           Conversão de texto para número
        ---------------------------------------------- */

        const numero1 =
            Number(valorNumero1);

        const numero2 =
            Number(valorNumero2);


        const operacao =
            campoOperacao.value;


        /* ----------------------------------------------
           Validação
        ---------------------------------------------- */

        const numerosValidos =
            validarNumeros(
                valorNumero1,
                valorNumero2,
                numero1,
                numero2
            );


        if (!numerosValidos) {
            return;
        }


        /* ----------------------------------------------
           Validação da operação
        ---------------------------------------------- */

        if (operacao === "") {

            mostrarResultado(
                "Selecione uma operação.",
                true
            );

            return;
        }


        /* ----------------------------------------------
           Execução do cálculo
        ---------------------------------------------- */

        const resultado =
            calcular(
                numero1,
                numero2,
                operacao
            );


        /* ----------------------------------------------
           Divisão por zero
        ---------------------------------------------- */

        if (
            operacao === "dividir" &&
            resultado === null
        ) {

            mostrarResultado(
                "Não é possível dividir por zero!",
                true
            );

            return;
        }


        /* ----------------------------------------------
           Resultado final
        ---------------------------------------------- */

        mostrarResultado(
            resultado
        );

    }
);



/* ==========================================================
   07. GLOW INTERATIVO DO MOUSE
========================================================== */

document.addEventListener(
    "mousemove",
    function (evento) {

        document.body.style.setProperty(
            "--mouse-x",
            `${evento.clientX}px`
        );


        document.body.style.setProperty(
            "--mouse-y",
            `${evento.clientY}px`
        );

    }
);