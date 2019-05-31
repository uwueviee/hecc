import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'your-profile', loadChildren: './your-profile/your-profile.module#YourProfilePageModule' },
  { path: 'character', loadChildren: './character/character.module#CharacterPageModule' },
  { path: 'edit-character', loadChildren: './edit-character/edit-character.module#EditCharacterPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login-actual', loadChildren: './login-actual/login-actual.module#LoginActualPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
