import { Component, OnInit } from "@angular/core";
import { Logistique } from "src/app/core/models/logistique";
import { LogisticsService } from "src/app/core/service/logistics.service";

@Component({
  selector: "app-list-logistics",
  templateUrl: "./list-logistics.component.html",
  styleUrls: ["./list-logistics.component.sass"],
})
export class ListLogisticsComponent implements OnInit {
  logistiques: Logistique[] = [];
  selectedLogistique: Logistique | null = null;
  errorMessage = "";

  constructor(private logistiqueService: LogisticsService) {}

  ngOnInit() {
    this.getLogistiques();
  }

  getLogistiques(): void {
    this.logistiqueService.getAllLogistiques().subscribe({
      next: (logistiques) => {
        this.logistiques = logistiques;
        this.selectedLogistique = logistiques[0];
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }

  onSelect(logistique: Logistique): void {
    this.selectedLogistique = logistique;
  }

  addLogistique(libelle: string, type: string, quantite: number): void {
    libelle = libelle.trim();
    type = type.trim();
    if (!libelle || !type || !quantite) {
      return;
    }
    const newLogistique: Logistique = {
      typeLogi: type,
      nomLogi: libelle,
      nombreLogits: quantite,
    };
    this.logistiqueService.addLogistique(newLogistique).subscribe(
      (logistique) => {
        this.logistiques.push(logistique);
        this.selectedLogistique = logistique;
      },
      (error) => (this.errorMessage = error)
    );
  }

  deleteLogistique(logistique: Logistique): void {
    if (!logistique.idLogi) {
      return;
    }
    this.logistiqueService.deleteLogistique(logistique.idLogi).subscribe(
      () => {
        this.logistiques = this.logistiques.filter((l) => l !== logistique);
        if (this.selectedLogistique === logistique) {
          this.selectedLogistique = null;
        }
      },
      (error) => (this.errorMessage = error)
    );
  }
  updateLogistique(logistique: Logistique): void {
    this.logistiqueService.updateLogistique(logistique).subscribe(
      () => {},
      (error) => (this.errorMessage = error)
    );
  }
}
