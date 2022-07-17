import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AdminGuardGuard } from '../admin-guard.guard';
import { PsychologistManagerComponent } from './components/psychologist-manager/psychologist-manager.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: AdminLoginComponent
      },
      {
        path: 'login',
        component: AdminLoginComponent
      },
      {
        path: 'psy-panel',
        component: AdminPanelComponent,
        canActivate: [AdminGuardGuard]
      },
      {
        path: 'edit-panel',
        component: PsychologistManagerComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
