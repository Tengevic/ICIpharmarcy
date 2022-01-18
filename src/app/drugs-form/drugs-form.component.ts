import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Drugservice } from '../shared/drug.service';

@Component({
  selector: 'app-drugs-form',
  templateUrl: './drugs-form.component.html',
  styleUrls: ['./drugs-form.component.css']
})
export class DrugsFormComponent implements OnInit {

  constructor(private drugService: Drugservice) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.drugService.Postnewdrugs(form.value)

  }
}
