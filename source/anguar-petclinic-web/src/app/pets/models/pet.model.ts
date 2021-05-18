import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { PetDTO } from './../../api-access/models/pet.dto';

export class PetModel extends FormGroup {
  public static createEmpty(): PetModel {
    return new PetModel({
      id: null,
      name: "",
      birthDate: null,
      petTypeId: null,
      petTypeName: "",
    });
  }

  public static create(dto: PetDTO): PetModel {
    return new PetModel({
      id: dto.id,
      name: dto.name,
      birthDate: new Date(dto.birthDate),
      petTypeId: dto.petTypeId,
      petTypeName: dto.petTypeName,
    });
  }

  constructor(initialValue: {
    id: number;
    name: string;
    birthDate: Date;
    petTypeId: number;
    petTypeName: string;
  }) {
    super({
      id: new FormControl(initialValue.id),
      name: new FormControl(initialValue.name),
      birthDate: new FormControl(initialValue.birthDate),
      petTypeId: new FormControl(initialValue.petTypeId),
      petTypeName: new FormControl(initialValue.petTypeName),
    });
  }

  get id(): number { return this.get("id").value; }
  get name(): string { return this.get("name").value; }
  get birthDate(): Date { return this.get("birthDate").value; }
  get petTypeId(): number { return this.get("petTypeId").value; }
  get petTypeName(): string { return this.get("petTypeName").value; }
}