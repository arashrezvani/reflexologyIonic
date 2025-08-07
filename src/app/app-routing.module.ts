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
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'generateregistercode',
    loadChildren: () => import('./generateregistercode/generateregistercode.module').then( m => m.GenerateregistercodePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ominousday',
    loadChildren: () => import('./ominousday/ominousday.module').then( m => m.OminousdayPageModule)
  },
  {
    path: 'list-users',
    loadChildren: () => import('./list-users/list-users.module').then( m => m.ListUsersPageModule)
  },
  {
    path: 'edit-users/:id',
    loadChildren: () => import('./edit-users/edit-users.module').then( m => m.EditUsersPageModule)
  },
  {
    path: 'nerves',
    loadChildren: () => import('./Acupressure/nerves/nerves.module').then( m => m.NervesPageModule)
  },
  {
    path: 'digestive',
    loadChildren: () => import('./Acupressure/digestive/digestive.module').then( m => m.DigestivePageModule)
  },
  {
    path: 'abjaperson',
    loadChildren: () => import('./abjaperson/abjaperson.module').then( m => m.AbjapersonPageModule)
  },
  {
    path: 'study',
    loadChildren: () => import('./book/study/study.module').then( m => m.StudyPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./description/description.module').then( m => m.DescriptionPageModule)
  },
  {
    path: 'prescription',
    loadChildren: () => import('./book/prescription/prescription.module').then( m => m.PrescriptionPageModule)
  },  {
    path: 'prescriptionultra',
    loadChildren: () => import('./book/prescriptionultra/prescriptionultra.module').then( m => m.PrescriptionultraPageModule)
  },
  {
    path: 'grocery',
    loadChildren: () => import('./book/grocery/grocery.module').then( m => m.GroceryPageModule)
  },
  {
    path: 'mention',
    loadChildren: () => import('./book/mention/mention.module').then( m => m.MentionPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
