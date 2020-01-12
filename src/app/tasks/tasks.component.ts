import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() tasks;
  @Input() userColor;
  @Input() dropDownValues;
  @Input() typeOf
  @Input() taskType
  @Output() updateStatus= new EventEmitter<boolean>();
  @Output() iconChangeEmitter = new EventEmitter<number>();
  completedCount: any;
  inProgressCount: any;
  notStartedCount: any;
  totalLength: any;
  taskCount: any;
  bugCount: any;
  constructor(public dataService: DataServiceService) {
    // this.iconChangeEmitter.emit(1);
    // this.dataService.currentPage$.next(this.userColor);
    // this.dataService.getTicketFromServer().subscribe(res => {
    //   this.tasks = res;
    // }, (err) => {
    //   console.log(err);
    // });
    // // this.tasks = this.dataService.data;
    // this.dataService.getTicketFromServer().subscribe(res => {
    //   this.tasks = res;
    //   const realTask = this.tasks.filter(data => data.type === 2);
    //   this.totalLength = realTask.length;
    // }, (err) => {
    //   console.log(err);
    // })
    // this.dataService.getDropdownFromServer().subscribe(res => {
    //   this.dropDownValues = res;
    //   console.log(this.dropDownValues);
    // }, (err) => {
    //   console.log(err);
    // });
    // this.taskCount = this.tasks.filter(t=>t.type ===1 ).length;

  }
  ngOnChanges() {
    this.taskCount = this.tasks.filter(t=>t.type ===1 ).length;
    this.bugCount = this.tasks.filter(t=>t.type ===2 ).length;
    this.completedCount = this.tasks.filter(t=>t.status ===1 ).length;
    this.inProgressCount = this.tasks.filter(t=>t.status ===2 ).length;
    this.notStartedCount = this.tasks.filter(t=>t.status ===3 ).length;
    // this.iconChangeEmitter.emit(this.userColor);
    this.dataService.taskCount$.next(this.taskCount);
    this.dataService.bugCount$.next(this.bugCount);
    this.dataService.completedCount$.next(this.completedCount);
    this.dataService.inProgressCount$.next(this.inProgressCount);
    this.dataService.notStartedCount$.next(this.notStartedCount);
  }

  ngOnInit() {
    this.iconChangeEmitter.emit(this.userColor);

  }
  statusChange(event, task) {
    console.log("efkeff",event.target.value, task);
    this.iconChangeEmitter.emit(event.target.value);
    const updatedstatus = parseInt(event.target.value);
    const data = { ...task, status: updatedstatus };
    this.dataService.chnageDATA(task.id, data).subscribe(res => {
      console.log(res);
      this.updateStatus.emit(true);
    });
  }

  // changeValue(status) {
  //   this.selection = status;
  // }
}
