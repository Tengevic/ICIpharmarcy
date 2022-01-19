import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrugListComponent } from './drug-list/drug-list.component';
import { DrugsFormComponent } from './drugs-form/drugs-form.component';

const routes: Routes = [
  {path: 'drugList', component: DrugListComponent},
  {path: 'form', component: DrugsFormComponent},
  {path: 'edit/:id', component: DrugsFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
