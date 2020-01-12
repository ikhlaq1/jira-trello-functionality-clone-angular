import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TasksComponent } from './tasks/tasks.component';
// import { CompletedComponent } from './completed/completed.component';

const routes: Routes = [
  
  // {
  //   path: 'task',
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
  //   component: CompletedComponent
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
