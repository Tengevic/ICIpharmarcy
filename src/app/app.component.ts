import { Component, OnInit } from '@angular/core';
import { Drug } from './shared/drug.model';
import { Drugservice } from './shared/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pharmarcy';

    drugs: Drug[];
  constructor(private drugservice: Drugservice){

  }

  ngOnInit(): void {
    this.drugservice.getCurrentDrugs()

  }
  getDrugs(){
    this.drugs = this.drugservice.drugs;
    console.log(this.drugs);

  }
}
