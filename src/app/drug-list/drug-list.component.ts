import { Component, OnInit } from '@angular/core';
import { Drug } from '../shared/drug.model';
import { Drugservice } from '../shared/drug.service';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
})
export class DrugListComponent implements OnInit {


  drugs: Drug[] = [];
  constructor(private drugservice: Drugservice){

  }

  ngOnInit(): void {
    this.drugservice.getCurrentDrugs().
        subscribe(data =>{
          for(const key in data){
            this.drugs.push(data[key]);

          }
          console.log(this.drugs);

        })

  }
  getDrugs(){
    this.drugs = this.drugservice.drugs;
    console.log(this.drugs);

  }
  onDelete(i:any){
    this.drugservice.deletedrug(i);
  }
}
