import { Time } from "@angular/common";
import { Doctors } from "src/app/admin/doctors/alldoctors/doctors.model";
import { Patient } from "src/app/admin/patients/allpatients/patient.model";

export class Consultation {
    idconsultation: number;
    date:Date;
    time: Time ;
    statusRDV:string;
    motifConsultation:string;
    antecedentsMedicaux:string; 
    patient:Patient[] = [];
    suivi:string;
    doctor:Doctors[] = [];
    emailP :string;
    facture:string;
    assurance:string;
    comment:string;
    [key: string]: any;
  
  constructor(
    idconsultation: number,
    date:Date,
    time: Time ,
    statusRDV:string ,
    motifConsultation:string,
    antecedentsMedicaux:string,
    patient:Patient[] = [],
    suivi:string,
    doctor:Doctors[] = [],
    facture:string,
    assurance:string,
    comment:string,
  ) {
    this.idconsultation = idconsultation;
    this.date = date;
    this.time = time;
    this.statusRDV = statusRDV;
    this.motifConsultation = motifConsultation;
    this.antecedentsMedicaux = antecedentsMedicaux;
    this.suivi = suivi;
    this.facture = facture;
    this.comment = comment;
    this.assurance = assurance;
    if (patient) {
        this.patient = patient.map(
          (patient: any) => new patient(patient)
        );
    if (doctor) {
      this.doctor = doctor.map(
        (doctor: any) => new doctor(doctor)
      );
    }
  }
  }
}