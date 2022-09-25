import { UntypedFormGroup, UntypedFormControl, FormArray } from '@angular/forms';
import { SpecialtyDTO } from './../../api-access/models/specialty.dto';

export class SpecialtyFormModel extends UntypedFormGroup {
  public static createEmpty(): SpecialtyFormModel {
    return new SpecialtyFormModel({
      id: null,
      name: "",
    });
  }

  public static create(dto: SpecialtyDTO): SpecialtyFormModel {
    return new SpecialtyFormModel({
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