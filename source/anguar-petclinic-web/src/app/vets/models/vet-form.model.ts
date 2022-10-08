import { FormGroup, FormControl, FormArray } from '@angular/forms';import { VetDTO } from './../../api-access/models/vet.dto';

export class VetFormModel extends FormGroup {
  public static createEmpty(): VetFormModel {
    return new VetFormModel({
      id: null,
      firstName: "",
      lastName: "",
      specialties: [],
    });
  }

  public static create(dto: VetDTO): VetFormModel {
    return new VetFormModel({
      id: dto.id,
      firstName: dto.firstName,
      lastName: dto.lastName,
      specialties: dto.specialties.map(x => x.id),
    });
  }

  constructor(initialValue: {
    id: number;
    firstName: string;
    lastName: string;
    specialties: number[];
  }) {
    super({
      id: new FormControl(initialValue.id),
      firstName: new FormControl(initialValue.firstName),
      lastName: new FormControl(initialValue.lastName),
      specialties: new FormControl(initialValue.specialties),
    });
  }

  get id(): number { return this.get("id").value; }
  get firstName(): string { return this.get("firstName").value; }
  get lastName(): string { return this.get("lastName").value; }
  get specialties(): number[] { return this.get("specialties").value; }
}