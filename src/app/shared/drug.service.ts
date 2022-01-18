import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { Drug } from "./drug.model";

@Injectable({providedIn: 'root'})
export class Drugservice{

    drugs: Drug[] = []
    drugsChange = new Subject<Drug[]>();


   constructor(private http: HttpClient){}


   getCurrentDrugs(){
        return this.http.get("/api/getdrugs")

   }
   Postnewdrugs(data: Drug){
     this.http.post("/api/newdrugs",data).subscribe((result)=>{
       console.log(result);

     })

   }
   deletedrug(id: string){
     this.http.delete(`api/delete/${id}`).subscribe((result)=>{
       console.log(result);

     })
   }
}
