import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  public inputForm: FormGroup;
  public submitAttempt: boolean = false;
  ready: boolean = false;
  jenis: string;

  constructor(
    public formBuilder: FormBuilder,
    private alert: AlertService,
    private storage: Storage,
    private router: Router,
    ) {
      this.inputForm = formBuilder.group({
        q1: ["",Validators.compose([Validators.required])],
      });
    }

  ngOnInit() {}

  async ionViewWillEnter(){ 
    this.storage.get('q1').then((val) => {
      if(val){
        this.inputForm.controls['q1'].setValue(val);
      }
    });
  }

  tes(id){
    this.inputForm.controls['q1'].setValue(id);
    this.storage.set('q1', id);    
  }

  async simpan(){
    if(this.inputForm.valid){
      this.router.navigate(['/qam3']);
    }else{
      this.alert.presentAlert("Lengkapi Formulir","Lengkapi formulir terlebih dahulu");
    }
  }

}
