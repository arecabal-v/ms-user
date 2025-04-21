import { AggregateRoot } from "@context/shared/domain/AggregateRoot";
import { UserId } from "./UserId";
import { UserName } from "./UserName";
import { UserEmail } from "./UserEmail";
import { UserPhone } from "./UserPhone";


export class User extends AggregateRoot {
  readonly id: UserId;
  readonly name: UserName;
  readonly email: UserEmail;
  readonly phone: UserPhone;

  constructor(id: UserId, name: UserName, email: UserEmail, phone: UserPhone) {
    super();
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  static fromPrimitives(id: string, name: string, email: string, phone: string): User {
    return new User(
      new UserId(id),
      new UserName(name),
      new UserEmail(email),
      new UserPhone(phone)
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value
    };
  }
} 