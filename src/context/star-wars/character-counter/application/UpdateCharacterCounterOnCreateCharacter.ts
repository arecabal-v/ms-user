import {DomainEventSubscriber} from '@context/shared/domain/event/DomainEventSubscriber';
import {DomainEvent, DomainEventClass} from '@context/shared/domain/DomainEvent';
import {CreateCharacterDomainEvent} from '@context/star-wars/shared/domain/CreateCharacterDomainEvent';

export class UpdateCharacterCounterOnCreateCharacter implements DomainEventSubscriber<CreateCharacterDomainEvent> {
  async on(domainEvent: DomainEvent): Promise<void> {
    throw new Error(`method not implemented ${domainEvent}`)
  }

  subscriberTo(): Array<DomainEventClass> {
    return [CreateCharacterDomainEvent]
  }
}
