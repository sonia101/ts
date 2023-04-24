function saludo(firstName1:string, age?:number):void {
    console.log(`${firstName1}con edad ${age}`);
} 
//si no se especifica el argumento entonces saldra un undefined
saludo("persona1");
saludo("persona1",36);

function saludo2(firstName2:string,age?:number):void {
    if(age === undefined){
        console.log(`${firstName2}con edad desconocida`);
        return;
    }
    console.log(`${firstName2}con edad ${age}`);
}
//opcion 3
function saludarperso3(firstName3:string,age?:number):void {
    age === undefined ?
    console.log(`${firstName3}con edad desconocida`):
    console.log(`${firstName3}con edad ${age}`);
}
//opcion 4
function saludarPersona4(firstName: string, age?: number): void {
    console.log(`${firstName} con edad ${age ?? 18}`);
}

saludarPersona4("Persona4"); 
saludarPersona4("Persona4", 30);