import { Logistique } from "./logistique";

export class Operation {
  idOp: number;
  success: boolean;
  nomChi: string;
  nomP: string;
  dateOp: Date;
  typeOp: string;
  idChambre: number;
  emailP: string;
  logistiques: Logistique[] = [];
  [key: string]: any;

  constructor(
    idOp: number,
    success: boolean,
    nomChi: string,
    idChi: number,
    nomP: string,
    dateOp: Date,
    typeOp: string,
    idChambre: number,
    emailP: string,
    logistiques: Logistique[]
  ) {
    this.emailP = emailP;
    this.idOp = idOp;
    this.success = success;
    this.nomP = nomP;
    this.idChi = idChi;
    this.nomChi = nomChi;
    this.dateOp = dateOp;
    this.typeOp = typeOp;
    this.idChambre = idChambre;
    if (logistiques) {
      this.logistiques = logistiques.map(
        (logistique: any) => new Logistique(logistique)
      );
    }
  }
}
