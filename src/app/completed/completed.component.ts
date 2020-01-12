import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  @Input() tasks;
  @Input() typeOf;
  @Input() userColor;
  @Input() dropDownValues;
  @Output() updateStatus= new EventEmitter<boolean>();
  @Output() iconChangeEmitter = new EventEmitter<number>();
  
  constructor(public dataService: DataServiceService) {
    console.log("innn")
  }

 
  ngOnChanges() {
    console.log(this.userColor)
    // this.completedCount = this.tasks.filter(t=>t.status ===1 ).length;
    // this.inProgressCount = this.tasks.filter(t=>t.status ===2 ).length;
    // this.notStartedCount = this.tasks.filter(t=>t.status ===3 ).length;
    // this.iconChangeEmitter.emit(this.userColor);
    // this.dataService.completedCount$.next(this.completedCount);
    // this.dataService.inProgressCount$.next(this.inProgressCount);
    // this.dataService.notStartedCount$.next(this.notStartedCount);
    // changes.prop contains the old and the new value...
  }
  ngOnInit() {
    this.iconChangeEmitter.emit(this.userColor);
  }
 
  statusChange(event, task) {
    const id = task.id
    console.log(event.target.value, task);
    const updatedstatus = parseInt(event.target.value);
    const data = { ...task, status: updatedstatus };
    this.iconChangeEmitter.emit(event.target.value);
    this.dataService.chnageDATA(task.id, data).subscribe(res => {
      console.log(res);
      this.tasks = this.tasks.filter(data => data.id != res['id']);
      this.updateStatus.emit(true);
    });
  }
}
