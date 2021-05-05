import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { OwnerDTO } from './../../api-access/models/owner.dto';

export class OwnerForm extends FormGroup {
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
      id: new FormControl(initialValue.id),
      firstName: new FormControl(initialValue.firstName),
      lastName: new FormControl(initialValue.lastName),
      address: new FormControl(initialValue.address),
      city: new FormControl(initialValue.city),
      telephone: new FormControl(initialValue.telephone),
    });
  }

  get id(): number { return this.get("id").value; }
  get firstName(): string { return this.get("firstName").value; }
  get lastName(): string { return this.get("lastName").value; }
  get address(): string { return this.get("address").value; }
  get city(): string { return this.get("city").value; }
  get telephone(): string { return this.get("telephone").value; }
}