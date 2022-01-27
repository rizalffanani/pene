import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qam9',
  templateUrl: './qam9.page.html',
  styleUrls: ['./qam9.page.scss'],
})
export class Qam9Page implements OnInit {

  public inputForm: FormGroup;
  public submitAttempt: boolean = false;
  ready: boolean = false;
  jenis: string;
  id;

  constructor(
    public formBuilder: FormBuilder,
    private storage: Storage,
    private alert: AlertService,
    private router: Router,
    ) {
      this.inputForm = formBuilder.group({
        nama: ["",Validators.compose([Validators.required])],
      });
    }

  ngOnInit() {}

  async ionViewWillEnter(){ 
    this.storage.get('q9').then((val) => {
      if(val){
        this.inputForm.controls['nama'].setValue(val);
      }
    });
  }

  tes(id){
    this.id = this.inputForm.value['nama']+id
    this.inputForm.controls['nama'].setValue(this.id);
    this.storage.set('q9', this.id);  
  }

  async simpan(){
    if(this.inputForm.valid){
      this.router.navigate(['/qam10']);
    }else{
      this.alert.presentAlert("Lengkapi Formulir","Lengkapi formulir terlebih dahulu");
    }
  }
}
