import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qam3',
  templateUrl: './qam3.page.html',
  styleUrls: ['./qam3.page.scss'],
})
export class Qam3Page implements OnInit {

  public inputForm: FormGroup;
  public submitAttempt: boolean = false;
  ready: boolean = false;
  jenis: string;
  q3: any;

  constructor(
    private storage: Storage,
    public formBuilder: FormBuilder,
    private alert: AlertService,
    private router: Router,
    ) {
      this.inputForm = formBuilder.group({
        q3: ["",Validators.compose([Validators.required])],
      });
    }

  ngOnInit() {}

  async ionViewWillEnter(){ 
    this.storage.get('q3').then((val) => {
      if(val){
        this.inputForm.controls['q3'].setValue(val);
      }
    });
  }

  tes(val){
    this.q3 = this.inputForm.value['q3']+val
    this.inputForm.controls['q3'].setValue(this.q3);
    this.storage.set('q3', this.q3);  
  }

  async simpan(){
    if(this.inputForm.valid){
      this.router.navigate(['/qam4']);
    }else{
      this.alert.presentAlert("Lengkapi Formulir","Lengkapi formulir terlebih dahulu");
    }
  }

}
