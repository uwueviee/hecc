import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'your-profile', loadChildren: './your-profile/your-profile.module#YourProfilePageModule' },
  { path: 'new-character', loadChildren: './new-character/new-character.module#NewCharacterPageModule' },
  { path: 'character', loadChildren: './character/character.module#CharacterPageModule' },
  { path: 'edit-character', loadChildren: './edit-character/edit-character.module#EditCharacterPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
