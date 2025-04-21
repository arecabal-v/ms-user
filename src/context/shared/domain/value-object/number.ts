import { ValueObject } from "./ValueObject";

export abstract class NumberValueObject extends ValueObject<number> {
  equalsTo(otherNumber: number): boolean {
    return this.value === otherNumber;
  }

  isBiggerThan(otherNumber: number): boolean {
    return this.value > otherNumber;
  }

  isSmallerThan(otherNumber: number): boolean {
    return this.value < otherNumber;
  }

  isEmpty(): boolean {
    return !this.value;
  }
}
