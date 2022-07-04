// Constructor pokémon
export class Pokemon {
    constructor(nom,life,type,atq){
        this.nom = nom;
        this.life
        this.type = type;
        this.atq = atq;
        this.attaque = (pokeatq) => {
            this.atq = this.atq - pokeatq.life
        };
        this.faiblesse = (poke) => {
            if (electric == eau ) {
                this.atq = (this.atq * 2) - poke.life;
            }else if(eau == feu){
                this.atq = (this.atq * 2) - poke.life;
            }else if(feuille == eau){
                this.atq = (this.atq * 2) - poke.life;
            }else if(feu == feuille){
                this.atq = (this.atq * 2) - poke.life;
            }else if(dragon == dragon){
                this.atq = (this.atq * 2) - poke.life;
            };
        };
    };
};

export class electric extends Pokemon {
    constructor(nom,life,type,atq,prop1,prop2,prop3,prop4){
        super(nom,type,atq);
    };
};
export class eau extends Pokemon {
    constructor(nom,life,type,atq){
        super(nom,life,type,atq);
    };
};
export class dragon extends Pokemon {
    constructor(nom,life,type,atq){
        super(nom,life,type,atq);
    };
};
export class feu extends Pokemon {
    constructor(nom,life,type,atq){
        super(nom,life,type,atq);
    };
};
export class feuille extends Pokemon {
    constructor(nom,life,type,atq){
        super(nom,life,type,atq);
    };
};
export class psy extends Pokemon {
    constructor(nom,life,type,atq){
        super(nom,life,type,atq);
    };
};