import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PageComponent } from './page.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkingShiftsModule } from '../core/working-shifts/working-shifts.module';
import { SettingComponent } from './components/setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'calendar'
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('../core/calendar/calendar.module').then(
            (m) => m.CalendarModule
          ),
      },
      {
        path: 'working-shifts',
        loadChildren: () =>
          import('./../core/working-shifts/working-shifts.module').then(
            (m) => m.WorkingShiftsModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [PageComponent, SettingComponent],
  exports: [SettingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IonicModule],
})
export class PageModule {}
