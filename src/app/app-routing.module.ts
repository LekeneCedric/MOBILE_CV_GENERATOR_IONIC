import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {redirectUnauthorizedTo,redirectLoggedInTo,canActivate} from "@angular/fire/auth-guard"
const redirectUnauthorizedToLogin = ()=>redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home'])
const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'edit-info',
    loadChildren: () => import('./edit-info/edit-info.module').then( m => m.EditInfoPageModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then( m => m.TemplatePageModule)
  },
  {
    path: 'template1',
    loadChildren: () => import('./template1/template1.module').then( m => m.Template1PageModule)
  },
  {
    path: 'template2',
    loadChildren: () => import('./template2/template2.module').then( m => m.Template2PageModule)
  },
  {
    path: 'template3',
    loadChildren: () => import('./template3/template3.module').then( m => m.Template3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
