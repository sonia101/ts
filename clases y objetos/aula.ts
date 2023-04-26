
class Aula{
    constructor(private id:number, private capacidad:number,private ventanas:boolean){}

    getCapacidad(){
        return this.capacidad;
    }
    setCapacidad(capacidad : number){
        this.capacidad = capacidad > 0 && capacidad <= 30? capacidad: this.capacidad;
    }

}

const aulaCursoJs = new Aula(1, 25, true);
const aulaReuniones = new Aula(3, 5,false);
const aulaAnalisisDatos = new Aula(7, 13, true);

console.log(aulaCursoJs);
//console.log(aulaCursoJs.id);da error :(
aulaCursoJs.setCapacidad(24);
console.log(aulaCursoJs.getCapacidad());