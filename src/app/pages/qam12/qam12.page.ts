import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qam12',
  templateUrl: './qam12.page.html',
  styleUrls: ['./qam12.page.scss'],
})
export class Qam12Page implements OnInit {

  public inputForm: FormGroup;
  public submitAttempt: boolean = false;
  ready: boolean = false;
  jenis: string;
  id;

  constructor(
    private storage: Storage,
    public formBuilder: FormBuilder,
    private alert: AlertService,
    private router: Router,
    ) {
      this.inputForm = formBuilder.group({
        nama: ["",Validators.compose([Validators.required])],
      });
    }

  ngOnInit() {}

  async ionViewWillEnter(){ 
    this.storage.get('q12').then((val) => {
      if(val){
        this.inputForm.controls['nama'].setValue(val);
      }
    });
  }

  tes(id){
    this.id = this.inputForm.value['nama']+id
    this.inputForm.controls['nama'].setValue(this.id);
    this.storage.set('q12', this.id);   
  }

  async simpan(){
    if(this.inputForm.valid){
      this.router.navigate(['/qam13']);
    }else{
      this.alert.presentAlert("Lengkapi Formulir","Lengkapi formulir terlebih dahulu");
    }
  }
}
