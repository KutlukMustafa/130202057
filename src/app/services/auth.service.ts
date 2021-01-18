import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { switchMap }from 'rxjs/operators';
@Injectable()
export class AuthService {
  user$: Observable<User>;
  user:User;


  constructor(
    private afauth: AngularFireAuth,
    private afs : AngularFirestore,
    private routher:Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController

  ) { 
    this.user$ = this.afauth.authState.pipe(
      switchMap(user=>{
        if (user)
        {
          return this.afs.doc('users/${user.uid}').valueChanges();
        }else
        {
          return of(null);
        }
      })
    );
    
    }

    async login(email,pass)
    {
      const loading = await this.loadingCtrl.create({
        message : 'Authenticating..',
        spinner: 'crescent',
        showBackdrop : true
      });

      loading.present();

      this.afauth.signInWithEmailAndPassword(email, pass).then((data)=>{
        if(!data.user.emailVerified)
        {
          loading.dismiss();
          this.toast('Pleased verified your email !', 'danger');
          this.logout();
        }else{
          loading.dismiss();
          this.routher.navigate(['/home']);
        }
      })
    }

    logout()
    {
      this.afauth.signOut().then(()=>{
        this.routher.navigate(['/login']);
      });
    }

    async toast(messege, status)
    {
      const toast = await this.toastr.create({
        message:messege,
        position :'top',
        color : status,
        duration :2000
      });

      toast.present();
    }
}
