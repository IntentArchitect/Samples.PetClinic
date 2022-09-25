import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { PetVisitDTO } from './../../api-access/models/pet-visit.dto';

export class PetVisitModel extends FormGroup {
  public static createEmpty(): PetVisitModel {
    return new PetVisitModel({
      id: null,
      visitDate: null,
      description: "",
    });
  }

  public static create(dto: PetVisitDTO): PetVisitModel {
    return new PetVisitModel({
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
      id: new FormControl<number>(initialValue.id),
      visitDate: new FormControl<Date>(initialValue.visitDate),
      description: new FormControl<string>(initialValue.description),
    });
  }

  get id(): number { return this.get("id").value; }
  get visitDate(): Date { return this.get("visitDate").value; }
  get description(): string { return this.get("description").value; }
}