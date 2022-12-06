import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateScheduleComponent } from '../create-schedule/create-schedule.component';

@Component({
  selector: 'app-working-shifts',
  templateUrl: './working-shifts.component.html',
  styleUrls: ['./working-shifts.component.scss']
})
export class WorkingShiftsComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CreateScheduleComponent,
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    console.log(data, role);
  }

}
