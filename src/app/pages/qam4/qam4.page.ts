import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qam4',
  templateUrl: './qam4.page.html',
  styleUrls: ['./qam4.page.scss'],
})
export class Qam4Page implements OnInit {

  public inputForm: FormGroup;
  public submitAttempt: boolean = false;
  ready: boolean = false;
  jenis: string;
  q4: any;

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
    this.storage.get('q4').then((val) => {
      if(val){
        this.inputForm.controls['nama'].setValue(val);
      }
    });
  }

  tes(val){
    this.q4 = this.inputForm.value['nama']+val
    this.inputForm.controls['nama'].setValue(this.q4);
    this.storage.set('q4', this.q4);  
  }

  async simpan(){
    if(this.inputForm.valid){
      this.router.navigate(['/qam5']);
    }else{
      this.alert.presentAlert("Lengkapi Formulir","Lengkapi formulir terlebih dahulu");
    }
  }

}
