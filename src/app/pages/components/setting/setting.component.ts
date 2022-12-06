import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingComponent {
  isModalOpen = false;
  constructor() {}
  setOpen(isOpen: boolean) {
    console.log('fgdgdg');

    this.isModalOpen = isOpen;
  }
}
