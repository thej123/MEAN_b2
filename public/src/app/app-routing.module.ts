import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // { path: '', 
    // redirectTo: 'login', 
    // pathMatch: 'full' 
    // },
    // {
    // path: '',
    // pathMatch: 'full',
    // component: LoginComponent,
    // children: []
    // },
//     {
//         path: 'dashboard',
//         pathMatch: 'full',
//         component: DashboardComponent,
//         children: []
//     },
//     {
//         path: 'dashboard/poll/:id',
//         pathMatch: 'full',
//         component: PollShowComponent,
//         children: []
//     },
//     {
//         path: 'dashboard/poll/:id/dashboard',
//         pathMatch: 'full',
//         redirectTo: 'dashboard', 
//     },
//     {
//         path: 'dashboard/create',
//         pathMatch: 'full',
//         component: PollCreateComponent,
//         children: []
//     },
//     {
//         path: 'dashboard/create/dashboard',
//         pathMatch: 'full',
//         redirectTo: 'dashboard', 
//     },

//     { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      RouterModule.forChild(routes)      
    ],
  exports: [RouterModule]
})

export class AppRoutingModule { }