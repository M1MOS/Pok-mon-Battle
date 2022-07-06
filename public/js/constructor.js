// Constructor pokémon
let raylife = document.getElementById('hp');
let pikalife = document.getElementById('hp1');
export class Pokemon {
    constructor(nom,fullhp, atq) {
        this.nom = nom;
        this.fullhp = fullhp;
        this.atq = atq;
        this.attaque = (ennemy) => {
            ennemy.fullhp = ennemy.fullhp - this.atq
        };
        this.seeLifeRay = () => {
            this.fullhp 
        };
    };
};

// Button Attaque
let btn = document.getElementById('m0');
let btn2 = document.getElementById('m1');
let btn3 = document.getElementById('m2');
let btn4 = document.getElementById('m3');


function letAtk(letGo) {
    btn.addEventListener("onclick", function(){
        for (let i = 0; i < 4; i++) {
            letGo.fullhp = letGo.fullhp - letGo.atq;
        };
    });
};

function letFight() {
    
}