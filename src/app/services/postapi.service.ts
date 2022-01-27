import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap} from 'rxjs/operators';
import { from} from 'rxjs';
import { Storage } from '@ionic/storage';
import { error } from '@angular/compiler/src/util';
import { NavController } from '@ionic/angular';
import { AlertService } from '../services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class PostapiService {

  isLoggedIn = false;
  serverUP = false;
  token:any;
  dataResult = "error";
  API_URL = "https://tes.privatco.id/mobileapi/";

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private navCtrl: NavController,
    private alerts: AlertService
  ) { }

  tambahKeranjang(postdata) {
    return this.http.post(this.API_URL + 'tambahkeranjang',postdata).pipe();
  }

  bayarPesanan(postdata) {
    return this.http.post(this.API_URL + 'cekout',postdata).pipe();
  }
  hapusPesanan(postdata) {
    return this.http.post(this.API_URL + 'hapuspesanan',{"pid":postdata}).pipe();
  }

  hapusKeranjang(postdata) {
    return this.http.post(this.API_URL + 'hapuskeranjang',{"pid":postdata}).pipe();
  }

  simpanProfil(postdata) {
    return this.http.post(this.API_URL + 'simpanprofil',  postdata).pipe();
  }
  simpanPass(postdata) {
    return this.http.post(this.API_URL + 'simpanpassword',  postdata).pipe();
  }

  simpanProduk(id,postdata) {
    return this.http.post(this.API_URL + 'tambahproduk',{"id":id, "data": postdata}).pipe();
  }

  simpanwww(q1,q3,q4,q5,q7,q8,q9,q10,q11,q12,q13,q14) {
    return this.http.post(this.API_URL + 'simpanwww',{"q1":q1,"q3":q3,"q4":q4,"q5":q5,"q7":q7,"q8":q8,"q9":q9,"q10":q10,"q11":q11,"q12":q12,"q13":q13,"q14":q14}).pipe();
  }

  simpanAlamat(id,postdata) {
    return this.http.post(this.API_URL + 'tambahalamat',{"id":id, "data": postdata}).pipe();
  }
  simpanAlamatUtama(id) {
    return this.http.post(this.API_URL + 'tambahalamat/1',{"id":id}).pipe();
  }
  hapusAlamat(postdata) {
    return this.http.post(this.API_URL + 'hapusalamat',{"pid":postdata}).pipe();
  }

  simpanRekening(id,postdata) {
    return this.http.post(this.API_URL + 'tambahrekening',{"id":id, "data": postdata}).pipe();
  }
  hapusRekening(postdata) {
    return this.http.post(this.API_URL + 'hapusrekening',{"pid":postdata}).pipe();
  }

  sendChat(postdata) {
    return this.http.post(this.API_URL + 'kirimpesan',{"pesan": postdata}).pipe();
  }

}