import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ShiftsService } from '../../../../services/shifts.service';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.scss']
})
export class CreateScheduleComponent implements OnInit {

  public form = this._fb.group({
    calendar: new UntypedFormControl(''),
    type: new UntypedFormControl(''),
    descriptions: new UntypedFormControl(''),
    shift: new UntypedFormControl(0),
  });

  public types$ = this._service.schedulesTypes$;
  constructor(
    private _service: ShiftsService,
    private _fb: UntypedFormBuilder
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((e) => console.log(e))
  }

}
