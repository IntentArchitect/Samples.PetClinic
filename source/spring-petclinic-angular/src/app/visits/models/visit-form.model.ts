import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { PetVisitDTO } from './../../api-access/models/pet-visit.dto';

export class VisitForm extends FormGroup {
  public static createEmpty(): VisitForm {
    return new VisitForm({
      id: null,
      visitDate: null,
      description: "",
    });
  }

  public static create(dto: PetVisitDTO): VisitForm {
    return new VisitForm({
      id: dto.id,
      visitDate: new Date(dto.visitDate),
      description: dto.description,
    });
  }

  constructor(initialValue: {
    id: number;
    visitDate: Date;
    description: string;
  }) {
    super({
      id: new FormControl(initialValue.id),
      visitDate: new FormControl(initialValue.visitDate),
      description: new FormControl(initialValue.description),
    });
  }

  get id(): number { return this.get("id").value; }
  get visitDate(): Date { return this.get("visitDate").value; }
  get description(): string { return this.get("description").value; }
}