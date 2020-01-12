import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  
})
export class ContentComponent implements OnInit, OnDestroy {
  public contentTask: any;
  public contentDropdown: any;
  totalLength: any;
  usericon: number;
  sub$: Subscription;
  taskCount: number;
  completedCount: number;
  bugsCount: number;
  inProgressCount: number;
  noStartedCount: number;
  constructor(public dataService: DataServiceService,private changeDetectForColor: ChangeDetectorRef) {
    this.dataService.getTicketFromServer().subscribe(res => {
      this.contentTask = res;
    }, (err) => {
      console.log(err);
    });

    this.dataService.getDropdownFromServer().subscribe(res => {
      this.contentDropdown = res;
      console.log(this.contentDropdown);
    }, (err) => {
      console.log(err);
    });
  }
    onSubmit() { 
      this.dataService.getTicketFromServer().subscribe(res => {
        this.contentTask = res;
        this.updateCount();

      }, (err) => {
        console.log(err);
      });
   }
   updateValue(userStatus: number){
     console.log({userStatus})
     this.usericon = userStatus;
     this.changeDetectForColor.detectChanges();
   }
   defaultValue(userStatus: number){
    console.log({userStatus})
    this.usericon = userStatus;
  }

  ngOnInit() {
   this.sub$ = this.dataService.currentPage$.subscribe(status => {
    this.usericon = status;
    console.log("userr",this.usericon)
  });
  this.initCount();
  }

  initCount(){
  this.sub$ = this.dataService.taskCount$.subscribe(status => {
    console.log(status);
    this.taskCount = status;
  });
  this.sub$ = this.dataService.bugCount$.subscribe(status => {
    console.log(status);
    this.bugsCount = status;
  });
  this.sub$ = this.dataService.completedCount$.subscribe(status => {
    console.log(status);
    this.completedCount = status;
  });
  this.sub$ = this.dataService.inProgressCount$.subscribe(status => {
    console.log(status);
    this.inProgressCount = status;
  });
  this.sub$ = this.dataService.notStartedCount$.subscribe(status => {
    console.log(status);
    this.noStartedCount = status;
  });
  this.changeDetectForColor.detectChanges();
  }

  updateCount(){
    this.completedCount = this.contentTask.filter(t=>t.status ===1 ).length;
    this.inProgressCount = this.contentTask.filter(t=>t.status ===2 ).length;
    this.noStartedCount = this.contentTask.filter(t=>t.status ===3 ).length;

  }
  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

}
