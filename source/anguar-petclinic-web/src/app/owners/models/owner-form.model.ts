import { UntypedFormGroup, UntypedFormControl, FormArray } from '@angular/forms';
import { OwnerDTO } from './../../api-access/models/owner.dto';

export class OwnerForm extends UntypedFormGroup {
  public static createEmpty(): OwnerForm {
    return new OwnerForm({
      id: null,
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      telephone: "",
    });
  }

  public static create(dto: OwnerDTO): OwnerForm {
    return new OwnerForm({
      id: dto.id,
      firstName: dto.firstName,
      lastName: dto.lastName,
      address: dto.address,
      city: dto.city,
      telephone: dto.telephone,
    });
  }

  constructor(initialValue: {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    telephone: string;
  }) {
    super({
      id: new UntypedFormControl(initialValue.id),
      firstName: new UntypedFormControl(initialValue.firstName),
      lastName: new UntypedFormControl(initialValue.lastName),
      address: new UntypedFormControl(initialValue.address),
      city: new UntypedFormControl(initialValue.city),
      telephone: new UntypedFormControl(initialValue.telephone),
    });
  }

  get id(): number { return this.get("id").value; }
  get firstName(): string { return this.get("firstName").value; }
  get lastName(): string { return this.get("lastName").value; }
  get address(): string { return this.get("address").value; }
  get city(): string { return this.get("city").value; }
  get telephone(): string { return this.get("telephone").value; }
}