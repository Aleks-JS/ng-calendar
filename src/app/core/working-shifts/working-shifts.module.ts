import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingShiftsComponent } from './components/working-shifts/working-shifts.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CreateScheduleComponent } from './components/create-schedule/create-schedule.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WorkingShiftsComponent,
    CreateScheduleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: WorkingShiftsComponent
    }]),
    IonicModule,
    ReactiveFormsModule
  ]
})
export class WorkingShiftsModule { }
