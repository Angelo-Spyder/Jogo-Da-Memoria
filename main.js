
const baralho = [
    {
        nome:"rock",
        img: "images/capa.jpg"
    },
    {
        nome:"incrivel",
        img: "images/capa.jpg"
    },
    {
        nome:"kirbo",
        img: "images/capa.jpg"
    },
    {
        nome:"azul",
        img: "images/capa.jpg"
    },
    {
        nome:"deus",
        img: "images/capa.jpg"
    },
    {
        nome:"tobey",
        img: "images/capa.jpg"
    },
    {
        nome:"rock",
        img: "images/capa.jpg"
    },
    {
        nome:"incrivel",
        img: "images/capa.jpg"
    },
    {
        nome:"kirbo",
        img: "images/capa.jpg"
    },
    {
        nome:"azul",
        img: "images/capa.jpg"
    },
    {
        nome:"deus",
        img: "images/capa.jpg"
    },
    {
        nome:"tobey",
        img: "images/capa.jpg"
    }
];

const grade = document.querySelector("#grade")

function criarGrade(){
    for(let i = 0; i < baralho.length; i++){
        let carta = document.createElement("img");
        carta.name = baralho[i].nome;
        carta.src = baralho[i].img;
        grade.appendChild(carta);
    };
};