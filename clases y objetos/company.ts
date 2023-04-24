class Company{
//constructor
constructor(public id: number,
    public cif:string, 
    public legalName:string,
    public income:number, 
    public outcome:number){}
    
     getfullName():string{
        return`${this.cif} ${this.legalName}`;
     }
     getNetIncome():number{
        return this.income - this.outcome;
     }
}

const company1 = new Company(1,'S12345678','DESARROLLO MINI SL', 500000, 250000);
console.log(company1.getfullName());
console.log(company1.getNetIncome());
console.log(company1.outcome);