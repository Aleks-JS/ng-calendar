import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageModule } from './pages/page.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/page.module').then(() => PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
