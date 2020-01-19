import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TasksComponent } from './tasks/tasks.component';
// import { StatusComponent } from './status/status.component';

const routes: Routes = [
  
  // {
  //   path: 'nothing',
  //   component: TasksComponent
  // },
  // {
  //   path: 'bugs',
  //   component: BugsComponent
  // }, {
  //   path: 'inprogress',
  //   component: InprogressComponent
  // }, {
  //   path: 'completed',
  //   component: StatusComponent
  // }, {
  //   path: 'not-started',
  //   component: NotStartedComponent
  // },
  // {
  //   path: '',
  //   redirectTo: 'task',
  //   pathMatch:'full'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
