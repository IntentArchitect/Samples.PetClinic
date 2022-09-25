import { UntypedFormGroup, UntypedFormControl, FormArray } from '@angular/forms';
import { PetTypeDTO } from './../../api-access/models/pet-type.dto';

export class PetTypeModel extends UntypedFormGroup {
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
      id: new UntypedFormControl(initialValue.id),
      name: new UntypedFormControl(initialValue.name),
    });
  }

  get id(): number { return this.get("id").value; }
  get name(): string { return this.get("name").value; }
}