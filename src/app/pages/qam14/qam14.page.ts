import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { PostapiService } from 'src/app/services/postapi.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qam14',
  templateUrl: './qam14.page.html',
  styleUrls: ['./qam14.page.scss'],
})
export class Qam14Page implements OnInit {

  public inputForm: FormGroup;
  public submitAttempt: boolean = false;
  ready: boolean = false;
  jenis: string;
  id;
  q1:string;
  q3:any;
  q4:any;
  q5:any;
  q7:any;
  q8:any;
  q9:any;
  q10:any;
  q11:any;
  q12:any;
  q13:any;
  q14:any;

  constructor(
    private storage: Storage,
    private alert: AlertService,
    private postapi: PostapiService,
    public formBuilder: FormBuilder,
    private router: Router,
    ) {
      this.inputForm = formBuilder.group({
        nama: ["",Validators.compose([Validators.required])],
      });
    }

  ngOnInit() {}

  async ionViewWillEnter(){ 
    this.storage.get('q1').then((val) => {
      if(val){
        this.q1=val;
        console.log("q1:",this.q1);
      }
    });
    this.storage.get('q3').then((val) => {
      if(val){
        this.q3=val;
        console.log("q3:",this.q3);
      }
    });
    this.storage.get('q4').then((val) => {
      if(val){
        this.q4=val;
        console.log("q4:",this.q4);
      }
    });
    this.storage.get('q5').then((val) => {
      if(val){
        this.q5=val;
        console.log("q5:",this.q5);
      }
    });
    this.storage.get('q7').then((val) => {
      if(val){
        this.q7=val;
        console.log("q7:",this.q7);
      }
    });
    this.storage.get('q8').then((val) => {
      if(val){
        this.q8=val;
        console.log("q8:",this.q8);
      }
    });
    this.storage.get('q9').then((val) => {
      if(val){
        this.q9=val;
        console.log("q9:",this.q9);
      }
    });
    this.storage.get('q10').then((val) => {
      if(val){
        this.q10=val;
        console.log("q10:",this.q10);
      }
    });
    this.storage.get('q11').then((val) => {
      if(val){
        this.q11=val;
        console.log("q11:",this.q11);
      }
    });
    this.storage.get('q12').then((val) => {
      if(val){
        this.q12=val;
        console.log("q12:",this.q12);
      }
    });
    this.storage.get('q13').then((val) => {
      if(val){
        this.q13=val;
        console.log("q13:",this.q13);
      }
    });
    this.storage.get('q14').then((val) => {
      if(val){
        this.q14=val;
        this.inputForm.controls['nama'].setValue(val);
      }
    });
  }

  tes(id){
    this.inputForm.controls['nama'].setValue(id);
    this.storage.set('q14', id); 
    this.q14=id;
  }

  async simpan(){
    if(this.inputForm.valid){
      this.postapi.simpanwww(this.q1,this.q3,this.q4,this.q5,this.q7,this.q8,this.q9,this.q10,this.q11,this.q12,this.q13,this.q14).subscribe(res=>{
        if(res['success'] == true){
          this.router.navigate(['/out/'+res['data']]);
        }else{
          this.alert.presentAlert("Server Sibuk","Gagal menyimpan , ulangi beberapa saat lagi...");
        }
      });
    }else{
      this.alert.presentAlert("Lengkapi Formulir","Lengkapi formulir terlebih dahulu");
    }
  }


}
