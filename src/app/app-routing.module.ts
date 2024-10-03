import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'determine-time',
    loadChildren: () => import('./determine-time/determine-time.module').then( m => m.DetermineTimePageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'calculation-moon',
    loadChildren: () => import('./calculation-moon/calculation-moon.module').then( m => m.CalculationMoonPageModule)
  },
  {
    path: 'info-darman-abjad',
    loadChildren: () => import('./info-darman-abjad/info-darman-abjad.module').then( m => m.InfoDarmanAbjadPageModule)
  },
  {
    path: 'relationship-people',
    loadChildren: () => import('./relationship-people/relationship-people.module').then( m => m.RelationshipPeoplePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
