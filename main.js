
const baralho = [
    {
        nome:"rock",
        img: "images/the-rock.jpg"
    },
    {
        nome:"incrivel",
        img: "images/sr-incrivel.jpg"
    },
    {
        nome:"kirbo",
        img: "images/kirbo.jpg"
    },
    {
        nome:"azul",
        img: "images/smzinho.jpg"
    },
    {
        nome:"deus",
        img: "images/ednaldo-pereira.jpg"
    },
    {
        nome:"tobey",
        img: "images/tobey.jpg"
    },
    {
        nome:"rock",
        img: "images/the-rock.jpg"
    },
    {
        nome:"incrivel",
        img: "images/sr-incrivel.jpg"
    },
    {
        nome:"kirbo",
        img: "images/kirbo.jpg"
    },
    {
        nome:"azul",
        img: "images/smzinho.jpg"
    },
    {
        nome:"deus",
        img: "images/ednaldo-pereira.jpg"
    },
    {
        nome:"tobey",
        img: "images/tobey.jpg"
    }
];



const grade = document.querySelector("#grade")
const pontuacao = document.querySelector("#pontos")
let pontos;
let escolhidas = [];

function criarGrade(){
    baralho.sort(() =>{
        return 0.5 - Math.random()
    })
    pontos = 0
    pontuacao.innerText = pontos;
    for(let i = 0; i < baralho.length; i++){
        let carta = document.createElement("img");
        carta.id = i
        carta.name = baralho[i].nome;
        carta.src = "images/capa.jpg";
        carta.addEventListener("click", escolherCarta)
        grade.appendChild(carta);
    };
};

function escolherCarta(){
    let carta = this
    carta.src = baralho[carta.id].img
    escolhidas.push(carta);

    if(escolhidas.length == 2){
        setTimeout(()=>{
            let carta1 = escolhidas[0];
            let carta2 = escolhidas[1]; 

            if(carta1.name == carta2.name){
                efeitoSonoro(carta1,carta2)
                carta1.src = "images/branco.png";
                carta2.src = "images/branco.png";
                carta1.removeEventListener("click", escolherCarta);
                carta2.removeEventListener("click", escolherCarta);
                pontos++;
                pontuacao.innerText = pontos;
            }else{
                carta1.src = "images/capa.jpg";
                carta2.src = "images/capa.jpg";
            };

            if(pontos == baralho.length / 2){
                alert("Parabéns");
                grade.innerHTML = "";
                criarGrade();
            };

            escolhidas = []
        },1000)

    };
};

function efeitoSonoro(carta1,carta2){
    let rockAudio = document.querySelector(".rock-sound");
    let poio = document.querySelector(".poio");
    let smzinho = document.querySelector(".smzinho");
    let blackSuit = document.querySelector(".blackSuit");
    let ednaldo = document.querySelector(".ednaldo");
    let srIncrivel = document.querySelector(".sr-incrivel");


    if(carta1.name == "rock" && carta2.name == "rock"){
        rockAudio.play()
    };
    if(carta1.name == "kirbo" && carta2.name == "kirbo"){
        poio.play()
    };
    if(carta1.name == "azul" && carta2.name == "azul"){
        smzinho.play()
    };
    if(carta1.name == "incrivel" && carta2.name == "incrivel"){
        srIncrivel.play()
    };
    if(carta1.name == "tobey" && carta2.name == "tobey"){
        blackSuit.play()
    };
    if(carta1.name == "deus" && carta2.name == "deus"){
        ednaldo.play()
    };
};