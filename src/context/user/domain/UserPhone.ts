import { StringValueObject } from "@context/shared/domain/value-object/string";

export class UserPhone extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureValidPhone(value);
  }

  private ensureValidPhone(value: string): void {
    // E.164 international standard validation:
    // - Must start with + symbol
    // - Country code (first digit after + must be 1-9)
    // - Total length including + and country code between 7-15 digits
    // - No spaces, hyphens or other formatting characters
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    
    if (!phoneRegex.test(value)) {
      throw new Error('Invalid phone number format. Must follow E.164 standard (e.g., +12345678901)');
    }
  }
} 