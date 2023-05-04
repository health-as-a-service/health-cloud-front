import { DossierMedical } from './dossierMedical' // Import the DossierMedical model

export class Patient {
    idP: number=0;
    nomP: string="";
    prenomP: string=""; 
    sexe: string="";
    numTel: string="";
    chambre: number=1;
    sejour: number=1;
    dossierMedical: DossierMedical= new DossierMedical()

    constructor(){
      
    }
  }
 
  