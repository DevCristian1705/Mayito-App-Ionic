import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  {
    path: '',
    redirectTo: 'modulos',
    pathMatch: 'full'
  },  
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'modulos',
    loadChildren: () => import('./modulos/modulos.module').then( m => m.ModulosPageModule)
  },  
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
