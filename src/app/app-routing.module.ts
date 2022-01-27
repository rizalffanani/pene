import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { TokenGuard } from './guard/token.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [TokenGuard]
  },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './auth/signup/signup.module#SignupPageModule' },
  { path: 'lupapassword', loadChildren: './auth/lupapassword/lupapassword.module#LupapasswordPageModule' },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'gantipass',
    loadChildren: () => import('./pages/gantipass/gantipass.module').then( m => m.GantipassPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'getoken',
    loadChildren: () => import('./auth/getoken/getoken.module').then( m => m.GetokenPageModule)
  },
  {
    path: 'qam3',
    loadChildren: () => import('./pages/qam3/qam3.module').then( m => m.Qam3PageModule)
  },
  {
    path: 'qam4',
    loadChildren: () => import('./pages/qam4/qam4.module').then( m => m.Qam4PageModule)
  },
  {
    path: 'qam5',
    loadChildren: () => import('./pages/qam5/qam5.module').then( m => m.Qam5PageModule)
  },
  {
    path: 'qam7',
    loadChildren: () => import('./pages/qam7/qam7.module').then( m => m.Qam7PageModule)
  },
  {
    path: 'qam8',
    loadChildren: () => import('./pages/qam8/qam8.module').then( m => m.Qam8PageModule)
  },
  {
    path: 'qam9',
    loadChildren: () => import('./pages/qam9/qam9.module').then( m => m.Qam9PageModule)
  },
  {
    path: 'qam10',
    loadChildren: () => import('./pages/qam10/qam10.module').then( m => m.Qam10PageModule)
  },
  {
    path: 'qam11',
    loadChildren: () => import('./pages/qam11/qam11.module').then( m => m.Qam11PageModule)
  },
  {
    path: 'qam12',
    loadChildren: () => import('./pages/qam12/qam12.module').then( m => m.Qam12PageModule)
  },
  {
    path: 'qam13',
    loadChildren: () => import('./pages/qam13/qam13.module').then( m => m.Qam13PageModule)
  },
  {
    path: 'qam14',
    loadChildren: () => import('./pages/qam14/qam14.module').then( m => m.Qam14PageModule)
  },
  {
    path: 'out/:id',
    loadChildren: () => import('./pages/out/out.module').then( m => m.OutPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
