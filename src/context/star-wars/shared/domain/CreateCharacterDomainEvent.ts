import {DomainEvent, DomainEventAttributes} from '@context/shared/domain/DomainEvent';
import {Character} from '@context/star-wars/shared/domain/class/Character';

export class CreateCharacterDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'start-wars.create.character';
  static readonly MAX_RETRIES = 3;
  readonly character: Character

  constructor({ aggregateId, character, eventId, occurredOn }: { aggregateId: string, character: Character, eventId?: string, occurredOn?: Date }) {
    super({ aggregateId, eventName: CreateCharacterDomainEvent.EVENT_NAME, maxRetries: CreateCharacterDomainEvent.MAX_RETRIES, eventId, occurredOn });
    this.character = character;
  }

  toPrimitives(): DomainEventAttributes {
    return {
      id: this.aggregateId,
      character: this.character,
    }
  }

  static fromPrimitives(params: {
    aggregateId: string;
    eventId: string;
    occurredOn: Date;
    attributes: Character;
  }): DomainEvent {
    const { aggregateId, attributes, occurredOn, eventId } = params;
    return new CreateCharacterDomainEvent({
      aggregateId,
      character: Character.create(attributes.id, attributes.name),
      eventId,
      occurredOn,
    });
  }
}
