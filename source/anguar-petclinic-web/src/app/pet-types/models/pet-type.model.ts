import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { PetTypeDTO } from './../../models/application/dtos/pet-type.dto';

export class PetTypeModel extends FormGroup {
  public static createEmpty(): PetTypeModel {
    return new PetTypeModel({
      id: null,
      name: "",
    });
  }

  public static create(dto: PetTypeDTO): PetTypeModel {
    return new PetTypeModel({
      id: dto.id,
      name: dto.name,
    });
  }

  constructor(initialValue: {
    id: number;
    name: string;
  }) {
    super({
      id: new FormControl(initialValue.id),
      name: new FormControl(initialValue.name),
    });
  }

  get id(): number { return this.get("id").value; }
  get name(): string { return this.get("name").value; }
}