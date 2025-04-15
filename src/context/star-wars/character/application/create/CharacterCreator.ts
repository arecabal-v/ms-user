import { Character } from '@context/star-wars/shared/domain/class/Character';
import { CharacterId } from '@context/star-wars/shared/domain/class/CharacterId';
import { CharacterName } from '@context/star-wars/shared/domain/class/CharacterName';
import {CharacterRepository} from '@context/star-wars/character/domain/contract/CharacterRepository';

export class CharacterCreator {
  constructor(private characterRepository: CharacterRepository) {}

  async run(id: CharacterId, name: CharacterName): Promise<void> {
    const character = Character.create(id, name);
    return this.characterRepository.create(character);
  }
}
