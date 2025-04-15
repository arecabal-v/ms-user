import { Character } from '@context/star-wars/shared/domain/class/Character';

export class FindCharacterResponse {
  constructor(readonly character: Character) {}
}
