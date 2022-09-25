import { UntypedFormGroup, UntypedFormControl, FormArray } from '@angular/forms';
import { VisitDTO } from './../../api-access/models/visit.dto';
import { PetVisitDTO } from './../../api-access/models/pet-visit.dto';

export class VisitForm extends UntypedFormGroup {
  public static createEmpty(): VisitForm {
    return new VisitForm({
      id: null,
      visitDate: null,
      description: "",
    });
  }

  public static create(dto: VisitDTO): VisitForm {
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
      id: new UntypedFormControl(initialValue.id),
      visitDate: new UntypedFormControl(initialValue.visitDate),
      description: new UntypedFormControl(initialValue.description),
    });
  }

  get id(): number { return this.get("id").value; }
  get visitDate(): Date { return this.get("visitDate").value; }
  get description(): string { return this.get("description").value; }
}