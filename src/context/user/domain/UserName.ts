import { StringValueObject } from "@context/shared/domain/value-object/string";

export class UserName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureValidName(value);
  }

  private ensureValidName(value: string): void {
    if (value.trim().length === 0) {
      throw new Error('Name cannot be empty');
    }
    
    if (value.length > 100) {
      throw new Error('Name cannot be longer than 100 characters');
    }
  }
} 