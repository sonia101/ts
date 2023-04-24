//crear clase employee con atributos: id, firstName,salario,company

//atributos
class Employee{
    id: number;
    firstName: string;
    salary: number;
    company:string;

    //constructor
constructor(id:number, firstName:string, salary:number, company:string){
    this.id = id;
    this.firstName = firstName;
    this.salary = salary;
    this.company = company;
}
//metodos
saludar():string{
    return `hola mi nombre ${this.firstName} y gano ${this.salary}`;
}
}
//crear un objeto o instanciar un objeto
 const employee1 = new Employee(1,'employee',10000,'delo');
 console.log(employee1.salary);
 console.log(employee1.saludar());



