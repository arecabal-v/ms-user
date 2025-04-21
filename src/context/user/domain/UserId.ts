import { Uuid } from "@context/shared/domain/value-object/uuid";

export class UserId extends Uuid {
  constructor(value: string) {
    super(value);
  }
} 