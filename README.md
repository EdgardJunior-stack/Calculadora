# 🧮 Calculadora FullStack

![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-semântico-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-responsivo-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-puro-F7DF1E?logo=javascript&logoColor=black)

Uma calculadora responsiva desenvolvida com **HTML semântico, CSS moderno e JavaScript puro**, criada como projeto de estudo para praticar lógica de programação, manipulação do DOM, validações, eventos, responsividade, acessibilidade e organização de código.

O projeto começou como uma calculadora executada no terminal com Node.js e evoluiu para uma aplicação front-end completa, moderna e responsiva.

---

## 🚀 Site

🔗 https://calculadorafullstack.vercel.app/

---
<br>

## 🖼️ Preview do projeto

<p align="center">
  <img src="./assets/Preview calculadora.png" alt="Preview da Calculadora" width="850">
</p>

<br>

## ✨ Funcionalidades

A calculadora realiza:

- ➕ Soma
- ➖ Subtração
- ✖️ Multiplicação
- ➗ Divisão

Também inclui:

- ✅ Interface responsiva
- ✅ HTML semântico
- ✅ Layout moderno
- ✅ Animações suaves
- ✅ Glow interativo seguindo o mouse
- ✅ Microinterações no botão
- ✅ Feedback visual de sucesso e erro
- ✅ Validação de campos vazios
- ✅ Validação de valores inválidos
- ✅ Validação de operação não selecionada
- ✅ Tratamento de divisão por zero
- ✅ Manipulação do DOM
- ✅ Eventos com JavaScript
- ✅ Código separado por responsabilidades
- ✅ Suporte a dispositivos móveis
- ✅ Suporte a teclado
- ✅ Suporte a `prefers-reduced-motion`

---

## 🎨 Design

A interface foi desenvolvida com foco em uma estética moderna, minimalista e inspirada em experiências visuais contemporâneas de portfólio.

Principais características:

- 🌑 Tema escuro
- 🟢 Cor de destaque em verde-lima
- 🪟 Efeito glassmorphism
- ✨ Glow interativo
- 📐 Grid decorativo no background
- 🎞️ Animações de entrada
- 🎯 Estados de foco
- 🖱️ Estados de hover
- 📱 Layout responsivo
- 🧩 Componentes visualmente bem organizados

---

## 🛠️ Tecnologias utilizadas

### HTML5

Utilizado para estruturar semanticamente a aplicação.

Principais elementos:

```html
<header>
<main>
<section>
<form>
<fieldset>
<label>
<select>
<button>
<output>
<footer>
```

### CSS3

Utilizado para:

- layout
- responsividade
- animações
- variáveis CSS
- efeitos visuais
- estados de foco
- hover
- glassmorphism
- grid decorativo
- acessibilidade
- adaptação para dispositivos touch

### JavaScript

Utilizado para:

- lógica matemática
- validação dos campos
- manipulação do DOM
- eventos
- exibição dos resultados
- tratamento de erros
- animações da interface
- interação com o mouse

---

## 📂 Estrutura do projeto

```text
calculadora-javascript/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    └── preview.png
```

- **`index.html`** - Responsável pela estrutura e pelo conteúdo semântico da aplicação.
- **`style.css`** - Responsável pelo design, responsividade, estados visuais, animações e aparência da interface.
- **`script.js`** - Responsável pela lógica da calculadora, validações, eventos e manipulação do DOM.
- **`README.md`** - Responsável pela documentação do projeto.

---

## 🧠 Conceitos praticados

### 📦 Variáveis

```javascript
const numero1 = 10;
const numero2 = 5;
```

Variáveis armazenam valores que podem ser reutilizados pelo programa.

### ⚙️ Funções

```javascript
function somar(numero1, numero2) {
    return numero1 + numero2;
}
```

As funções foram utilizadas para separar responsabilidades e reutilizar lógica.

### 🎯 Parâmetros

```javascript
function somar(numero1, numero2)
```

`numero1` e `numero2` são parâmetros que recebem valores quando a função é chamada.

### ↩️ `return`

```javascript
return numero1 + numero2;
```

O `return` devolve um valor e encerra a execução da função naquele ponto.

### 🔀 Condições

```javascript
if (condicao) {

} else if (outraCondicao) {

} else {

}
```

As estruturas condicionais permitem que o programa tome decisões.

---

## 🧠 Operadores lógicos

### OU - `||`

```javascript
if (numero1Invalido || numero2Invalido) {
    // erro
}
```

Basta uma das condições ser verdadeira.

### E - `&&`

```javascript
if (idade >= 18 && temIngresso === true) {
    // permitido
}
```

As duas condições precisam ser verdadeiras.

### NÃO - `!`

```javascript
!true // false
```

O operador `!` inverte um valor lógico.

---

## 🌐 DOM e eventos

### Manipulação do DOM

```javascript
document.querySelector()
```

Exemplo:

```javascript
const campoNumero1 = document.querySelector("#numero1");
```

Isso permite conectar o JavaScript aos elementos visuais da página.

### 🎯 Eventos

```javascript
formulario.addEventListener(
    "submit",
    function (evento) {
        evento.preventDefault();
    }
);
```

O evento `submit` é executado quando o formulário é enviado.

### 🚫 `preventDefault()`

```javascript
evento.preventDefault();
```

Impede que o formulário recarregue a página automaticamente, permitindo ao JavaScript processar o cálculo diretamente na interface.

---

## 🔢 Conversão e validações

### Conversão de valores

```javascript
const numero1 = Number(campoNumero1.value);
```

Os valores recebidos pelos inputs chegam como texto, por isso `Number()` é usado para convertê-los em números.

### 🛡️ Campos vazios

```javascript
if (valorNumero1 === "" || valorNumero2 === "") {
    // mensagem de erro
}
```

### Número inválido

```javascript
Number.isNaN(numero1)
```

Utilizado para verificar se o valor convertido não é um número válido.

### Operação não selecionada

```javascript
if (operacao === "") {
    // mensagem de erro
}
```

### Divisão por zero

```javascript
if (numero2 === 0) {
    return null;
}
```

O programa identifica esse retorno e exibe uma mensagem apropriada.

---

## 🧩 Organização do JavaScript

O código foi separado em funções com responsabilidades específicas:

```text
somar()
subtrair()
multiplicar()
dividir()

validarNumeros()

calcular()

mostrarResultado()
```

Essa organização deixa o projeto mais fácil de entender, manter, testar e expandir.

### 🧮 Funções matemáticas

```javascript
function somar(numero1, numero2) {
    return numero1 + numero2;
}

function subtrair(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    if (numero2 === 0) {
        return null;
    }

    return numero1 / numero2;
}
```

---

## 📱 Responsividade e acessibilidade

### 📱 Responsividade

O projeto foi preparado para:

- 🖥️ Desktop
- 💻 Notebook
- 📱 Tablet
- 📲 Smartphone

Exemplo:

```css
@media (max-width: 520px) {
    .calculadora {
        padding: 22px;
    }
}
```

### ♿ Acessibilidade

O projeto inclui:

- ✅ HTML semântico
- ✅ `label` associado aos inputs
- ✅ `aria-labelledby`
- ✅ `aria-live`
- ✅ `role="status"`
- ✅ `focus-visible`
- ✅ suporte a teclado
- ✅ contraste visual
- ✅ `prefers-reduced-motion`
- ✅ adaptação para dispositivos touch

---

## 🎞️ Animações e efeitos visuais

### Entrada da página

```css
@keyframes entradaPagina {
    from {
        opacity: 0;
        transform: translateY(28px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Animação do resultado

```css
@keyframes entradaResultado {
    from {
        opacity: 0;
        transform: translateY(12px) scale(0.97);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
```

### ✨ Glow interativo

```javascript
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
```

### 🎨 Variáveis CSS

```css
:root {
    --cor-fundo: #0b0c0f;
    --cor-texto: #f5f5f2;
    --cor-destaque: #d7ff64;
    --cor-erro: #ff7070;
}
```

Centralizar cores e valores principais facilita futuras alterações no design.

---

## 🧪 Testes realizados

| Teste | Resultado esperado |
|---|---|
| `10 + 5` | `15` |
| `10 - 5` | `5` |
| `10 × 5` | `50` |
| `10 ÷ 5` | `2` |
| `10 ÷ 0` | Mensagem de divisão por zero |
| Campo vazio | Mensagem de validação |
| Operação não selecionada | Mensagem de validação |

---

## 📚 Evolução do projeto

```text
JavaScript no terminal
        ↓
Variáveis
        ↓
Funções
        ↓
Parâmetros
        ↓
return
        ↓
if / else if / else
        ↓
Operadores lógicos
        ↓
Validações
        ↓
Node.js
        ↓
readline
        ↓
Entrada pelo terminal
        ↓
HTML semântico
        ↓
CSS
        ↓
DOM
        ↓
Eventos
        ↓
Responsividade
        ↓
Acessibilidade
        ↓
Microinterações
        ↓
Interface final
```

---

## 🎓 Objetivo e principais aprendizados

O principal objetivo deste projeto foi aprender JavaScript de forma prática, construindo uma aplicação real e entendendo o funcionamento de cada etapa.

A proposta não foi apenas desenvolver uma calculadora, mas consolidar conceitos fundamentais reutilizáveis em projetos maiores.

Principais aprendizados:

- variáveis
- funções
- parâmetros
- argumentos
- `return`
- `if`
- `else if`
- `else`
- `||`
- `&&`
- `!`
- `Number()`
- `Number.isNaN()`
- eventos
- DOM
- formulários
- validações
- `querySelector`
- `addEventListener`
- `preventDefault`
- `textContent`
- `classList`
- responsividade
- acessibilidade
- organização de código

---

## ✅ Checklist do projeto

- ✅ HTML semântico
- ✅ CSS separado
- ✅ JavaScript separado
- ✅ Layout responsivo
- ✅ Variáveis CSS
- ✅ Grid decorativo
- ✅ Glassmorphism
- ✅ Glow interativo
- ✅ Microinterações
- ✅ Animação de entrada
- ✅ Animação do resultado
- ✅ Hover no botão
- ✅ Estados de foco
- ✅ `focus-visible`
- ✅ `prefers-reduced-motion`
- ✅ Soma
- ✅ Subtração
- ✅ Multiplicação
- ✅ Divisão
- ✅ Bloqueio de divisão por zero
- ✅ Validação de campos vazios
- ✅ Validação de operação
- ✅ Conversão com `Number()`
- ✅ Validação com `Number.isNaN()`
- ✅ Manipulação do DOM
- ✅ Eventos
- ✅ Código organizado por responsabilidades

---

## ▶️ Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/EdgardJunior-stack/Calculadora.git
```

2. Entre na pasta:

```bash
cd calculadora
```

3. Abra o arquivo `index.html` no navegador.

Também é possível utilizar uma extensão como **Live Server** no VS Code.

---

## 🌍 Publicação

O projeto pode ser publicado gratuitamente utilizando:

- GitHub Pages
- Vercel
- Netlify

Depois da publicação, adicione o link na seção **Site** deste README.

---

## 🔮 Melhorias futuras

- 🧮 Histórico de cálculos
- ⌨️ Suporte completo ao teclado
- 🌙 Alternância entre tema claro e escuro
- 🔢 Novas operações matemáticas
- 💾 Histórico utilizando `localStorage`
- 🧪 Testes automatizados
- ⚛️ Versão em React
- 📲 Transformação em PWA
- 🔊 Feedback sonoro opcional
- 🎨 Seleção de temas

---

## 👨‍💻 Autor

Desenvolvido por Edgard Junior como projeto de estudo e evolução em desenvolvimento Front-end.

**Tecnologias estudadas:** HTML • CSS • JavaScript

Se você gostou do projeto, considere deixar uma ⭐ no repositório.

---

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas.

Fluxo sugerido:

1. Faça um fork do projeto.
2. Crie uma branch:

```bash
git checkout -b feature/nova-funcionalidade
```

3. Faça suas alterações.
4. Faça o commit:

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

5. Envie para sua branch:

```bash
git push origin feature/nova-funcionalidade
```

6. Abra um Pull Request.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

Sinta-se à vontade para utilizá-lo como referência para estudos e aprendizado.

---

## ⭐ Apoie o projeto

Se este projeto foi útil para você:

- deixe uma ⭐ no repositório
- faça um fork
- compartilhe
- acompanhe futuras melhorias

---

<p align="center">
  Desenvolvido com ☕, lógica e JavaScript.
</p>
