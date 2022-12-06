import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ScheduleType {
  /** Название */
  name: string;
  /** Идентификатор */
  id: number;
  /** Типы дней */
  days: {
    /** Рабочие */
    working: number;
    /** Выходные */
    holiday: number;
  };
  time: {
    start: string;
    end: string;
  };
  siesta?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  private _shifts$ = new BehaviorSubject<unknown>(null);
  private _schedulesTypes$ = new BehaviorSubject<ScheduleType[]>([{
    name: '5/2',
    id: 2,
    days: {
      holiday: 2,
      working: 5
    },
    time: {
      start: '08:00',
      end: '17:00'
    },
    siesta: 60
  }, {
    name: '2/2',
    id: 2,
    days: {
      holiday: 2,
      working: 2
    },
    time: {
      start: '08:00',
      end: '20:00'
    }
  }])

  set schedulerType(value: ScheduleType) {
    this._schedulesTypes$.next([...this._schedulesTypes$.getValue(), value])
  }

  public schedulesTypes$: Observable<ScheduleType[]> = this._schedulesTypes$;
  public shifts$: Observable<unknown> = this._shifts$;
  constructor() { }
}
