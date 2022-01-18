export class Drug{
  public id:any;
  public drug_id: any;
  public name: any;
  public amount: any;


  constructor(id:number,drug_id: string,name : string, amount: number ){
    this.id = id;
    this.drug_id= drug_id;
    this.name = name;
    this.amount = amount;
  }
}
