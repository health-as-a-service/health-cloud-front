import { Logistique } from "./logistique";

export class Operation {
  idOp!: number;
  success!: boolean;
  nomChi!: string;
  nomP!: string;
  dateOp!: Date;
  typeOp!: string;
  idChambre!: number;
  emailP!: string;
  logistiques: Logistique[] = [];
  [key: string]: any;
  constructor(obj?: any) {
    this.emailP = obj?.emailP;
    this.idOp = obj?.idOp;
    this.success = obj?.success;
    this.nomP = obj?.idP;
    this.nomChi = obj?.idChi;
    this.dateOp = obj?.dateOp;
    this.typeOp = obj?.typeOp;
    this.idChambre = obj?.idChambre;
    if (obj?.logistiques) {
      this.logistiques = obj.logistiques.map(
        (logistique: any) => new Logistique(logistique)
      );
    }
  }
}
