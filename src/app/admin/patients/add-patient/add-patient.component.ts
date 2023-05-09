import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PatientService } from "../allpatients/patient.service";

@Component({
  selector: "app-add-patient",
  templateUrl: "./add-patient.component.html",
  styleUrls: ["./add-patient.component.sass"],
})
export class AddPatientComponent {
  singleFile: any
  patientForm: FormGroup;
  patient: any
  constructor(private fb: FormBuilder, private patientService: PatientService
  ) {
    this.patientForm = this.fb.group({
      nomP: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      prenomP: ["", [Validators.required]],
      sexe: ["", [Validators.required]],
      dateNaissanceP: ["", [Validators.required]],
      numTel: ["", [Validators.required]],
      chambre: ["", [Validators.required]],
      sejour: ["", [Validators.required]],
      maladiesChroniques: [""],
      testsMedicaux: [""],
      traitement: [""],
      typeMaladie: [""],

    });
  }
  onSubmit() {
    var itemDeteNaissance = this.patientForm.value.dateNaissanceP


    const formData = new FormData();

    const obj = {
      "nomP": this.patientForm.value.nomP,
      "prenomP": this.patientForm.value.prenomP,
      "sexe": this.patientForm.value.sexe,
      "numTel": this.patientForm.value.numTel,
      "chambre": this.patientForm.value.chambre,
      "sejour": this.patientForm.value.sejour,
      "dossierMedical": {
        "typeMaladie": this.patientForm.value.typeMaladie,
        "traitement": this.patientForm.value.traitement,
        "maladiesChroniques": this.patientForm.value.maladiesChroniques,
        "testsMedicaux": this.patientForm.value.testsMedicaux,
      }
    }
    if (this.singleFile) {
      formData.append('patientfile', this.singleFile);
    }

    console.log('KKK', obj)
    formData.append('patient', JSON.stringify(obj));



    delete this.patientForm.value.dateNaissanceP

    this.patientService.addPatientServices(formData, itemDeteNaissance).subscribe(res => {
      console.log(res)
      window.location.reload()
    },err=>{
      window.location.reload()
    })


  }
  onSingleFileChange(e: any) {

    this.singleFile = e.target.files[0];
    console.log(this.singleFile)
  }
}

// "idP": 140,
//         "nomP": "tasnim",
//         "prenomP": "Abidi",
//         "sexe": "femme",
//         "dateNaissanceP": "2022-06-19",
//         "numTel": "99000124",
//         "chambre": 80,
//         "sejour": 2,
//         "isArchive": false,
//         "dateArchivage": null,
//         "dateCreation": "2023-05-06",
//         "dossierMedical": {
//             "idD": 147,
//             "dateCreation": "2023-05-06",
//             "typeMaladie": "hamdi l 3ou9",
//             "traitement": "tag tag",
//             "maladiesChroniques": "cac",
//             "testsMedicaux": "hello word",
//             "derniereMaj": null
//         },
