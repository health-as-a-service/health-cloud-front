import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService { readonly API_URL = '//http://localhost:8082/consultations';

  constructor(private httpClient: HttpClient) { }
  
  getAllConsultation() {
    return this.httpClient.get(`${this.API_URL}/allConsultations`)
  }
  addProduct(consultation : any) {
    return this.httpClient.post(`${this.API_URL}/add-consultation`, consultation)
  }
  editProduct(consultation : any){
    return this.httpClient.put(`${this.API_URL}/update-product`, consultation)
  }
  deleteProduct(idProduct : any){
    return  this.httpClient.delete(`${this.API_URL}/delete-product/${idProduct}`)
  }
}



