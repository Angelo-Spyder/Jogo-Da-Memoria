
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

baralho.sort(() =>{
    return 0.5 - Math.random()
})

const grade = document.querySelector("#grade")
const pontuacao = document.querySelector("#pontos")
let pontos;
let escolhidas = [];

function criarGrade(){
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
                alert("muito boa");
                grade.innerHTML = "";
                criarGrade();
            };

            escolhidas = []
        },1000)

    };
};