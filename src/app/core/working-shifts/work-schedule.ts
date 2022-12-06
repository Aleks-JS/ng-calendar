export class WorkSchedule {
  /**
   * Тип графика
   * */
  public scheduleType!: string;
  /**
   * Период графика
   * */
  public period!: string;
  /**
   * Список дней в графике
   * */
  public days = [];
  /**
   * Название графика
   * */
  public description!: string;
  /**
   * Сдвиг начала графика
   * */
  public shiftDay!: number;

  constructor(args: any) {
    Object.assign(this, args);
  }
}
