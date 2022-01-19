import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { from } from 'rxjs';
import { Drugservice } from '../shared/drug.service';

@Component({
  selector: 'app-drugs-form',
  templateUrl: './drugs-form.component.html',
  styleUrls: ['./drugs-form.component.css']
})
export class DrugsFormComponent implements OnInit {
  id:number;
  isedit: boolean = false;

  constructor(private drugService: Drugservice,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isedit = false
    this.route.params.subscribe(

      (params: Params)=>{
        this.id = +params['id']
        console.log(this.id);
        this.isedit = params['id'] != null;

      }
    )
    console.log(this.isedit);

  }
  onSubmit(form: NgForm){
    if(this.isedit){
      this.drugService.updatedrug(form.value, this.id)
    }else{
       this.drugService.Postnewdrugs(form.value)
    }


  }
}
