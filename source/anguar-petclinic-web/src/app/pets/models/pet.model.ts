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
      id: new FormControl<number>(initialValue.id),
      name: new FormControl<string>(initialValue.name),
      birthDate: new FormControl<Date>(initialValue.birthDate),
      petTypeId: new FormControl<number>(initialValue.petTypeId),
      petTypeName: new FormControl<string>(initialValue.petTypeName),
    });
  }

  get id(): number { return this.get("id").value; }
  get name(): string { return this.get("name").value; }
  get birthDate(): Date { return this.get("birthDate").value; }
  get petTypeId(): number { return this.get("petTypeId").value; }
  get petTypeName(): string { return this.get("petTypeName").value; }
}