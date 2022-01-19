import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Drug } from '../shared/drug.model';
import { Drugservice } from '../shared/drug.service';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
})
export class DrugListComponent implements OnInit , OnDestroy{


  drugs: Drug[] = [];
  drugsChange = new Subject<Drug[]>();
  subscription: Subscription;

  constructor(private drugservice: Drugservice, private router: Router ){

  }

  ngOnInit(): void {
    this.drugservice.getCurrentDrugs().
        subscribe(data =>{
          for(const key in data){
            this.drugs.push(data[key]);

          }
          console.log(this.drugs);

        })
        this.subscription = this.drugsChange
        .subscribe((Drug: Drug[])=>{
          this.drugs = Drug;

        });


  }
  getDrugs(){
    this.drugs = this.drugservice.drugs;
    console.log(this.drugs);

  }
  onDelete(i:any){
    console.log(i);
    this.drugservice.deletedrug(i);

  }
  navigate(id: number){
    this.router.navigate(['/edit', { id: id }]);
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
