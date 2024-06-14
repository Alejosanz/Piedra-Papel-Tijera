const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

const TIE = 0;
const WIN = 1;
const LOST = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraaBtn = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");
const userpoints = document.getElementById('userpoints');
const cpupoints = document.getElementById('cpupoints');

let winsUser = 0;
let winsCpu = 0;

piedraBtn.addEventListener("click", ()=>{
    play(PIEDRA);
});
papelBtn.addEventListener("click", ()=>{
    play(PAPEL);
});
tijeraaBtn.addEventListener("click", ()=>{
    play(TIJERA);
});

function play(userOption){
    const machineOption = calcMachineOption();
    const result = calcResult(userOption, machineOption);

    userImg.src = "img/" + userOption + ".png";
    machineImg.src = "img/" + machineOption + ".png";

    switch(result){
        case TIE:
            resultText.innerHTML = "Has empatado";
            break;
        case WIN:
            resultText.innerHTML = "Has ganado";
            winsUser += 1;
            userpoints.textContent = winsUser;
            break;
        case LOST:
            resultText.innerHTML = "Has perdido";
            winsCpu += 1;
            cpupoints.textContent = winsCpu;
            break;
    }
}

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
}

function calcResult(userOption, machineOption){
    if(userOption === machineOption){
        return TIE;
    } else if(userOption === PIEDRA){
        if(machineOption === PAPEL) return LOST;
        if(machineOption === TIJERA) return WIN;
    } else if(userOption === PAPEL){
        if(machineOption === PIEDRA) return WIN;
        if(machineOption === TIJERA) return LOST;
    } else if(userOption === TIJERA){
        if(machineOption === PIEDRA) return LOST;
        if(machineOption === PAPEL) return WIN;
    }
}
