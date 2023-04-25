import{ICategory} from "./category.model"
import{IFilm}from "./film.model"

let comedia : ICategory = {
    id:1,
    fullName:"Torrente",
    color:"Amarillo",
    minAge:16
    
}

let drama: ICategory = {
    id:2,
    fullName:"Drama",
    color:"Rojo Rubi",
    minAge:12
    
}
let diarioDeNoa: IFilm = {
    id:1,
    title:"Diario de Noa",
    minutes: 129,
    rating:6.9,
    year:2013,
    categories:[]
}
let misionImposible: IFilm = {
    id:1,
    title:"Mision Imposible",
    minutes: 160,
    rating:7.9,
    year:2017,
    categories:[]
}
if(drama.films!== undefined)
drama.films.push(diarioDeNoa
    )
drama.films?.push(diarioDeNoa)
console.log(drama);


