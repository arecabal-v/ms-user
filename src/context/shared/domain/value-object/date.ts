import { StringValueObject } from './string';

export abstract class DateValueObject extends StringValueObject {
  private checkDateIsValue(date: string): void {
    if (!!Number.isNaN(new Date(date).getTime())) {
      this.throwErrorForInvalidDate(date);
    }
  }

  public format(date: string): string {
    return new Date(date).toISOString();
  }

  public isBetweenTheDates(startDate: string, lastDate: string): boolean {
    this.checkDateIsValue(startDate);
    this.checkDateIsValue(lastDate);
    return this.isAfterThisDate(startDate) && this.isBeforeThisDate(lastDate);
  }

  public isBeforeThisDate(anotherDate: string): boolean {
    this.checkDateIsValue(anotherDate);
    return this.value < this.format(anotherDate);
  }

  public isAfterThisDate(anotherDate: string): boolean {
    this.checkDateIsValue(anotherDate);
    return this.value > this.format(anotherDate);
  }

  protected abstract throwErrorForInvalidDate(value: string): void;
}
