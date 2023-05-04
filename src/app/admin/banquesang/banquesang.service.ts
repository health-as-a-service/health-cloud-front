import { Injectable, EventEmitter } from "@angular/core";
import { BehaviorSubject, Observable, catchError, throwError } from "rxjs";
import { BanqueSang } from "./banquesang.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { environment } from "src/environments/environment";
@Injectable()


export class Banquesangservice extends UnsubscribeOnDestroyAdapter {

  private readonly API_URL = "http://localhost:8082/api/BanqueSang/";
  isTblLoading = false;
  dataChange: BehaviorSubject<BanqueSang[]> = new BehaviorSubject<BanqueSang[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): BanqueSang[] {
    return this.dataChange.value;
  }
  addBanqueSang(idBanque: number, BanqueSang: BanqueSang): Observable<BanqueSang> {
    const url = `${this.API_URL}BanqueSang/${idBanque}/BanqueSang`;
    return this.httpClient.post<BanqueSang>(url, BanqueSang);
  }

  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllBanqueSangs(): void {
    this.subs.sink = this.httpClient.get<BanqueSang[]>(this.API_URL).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + " " + error.message);
      }
    );
  }}