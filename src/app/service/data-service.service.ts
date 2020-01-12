import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import API_URL from '../../constants/constants'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  currentPage$: Subject<number> = new Subject();
  taskCount$: Subject<number> = new Subject();
  bugCount$: Subject<number> = new Subject();
  completedCount$: Subject<number> = new Subject();
  inProgressCount$: Subject<number> = new Subject();
  notStartedCount$: Subject<number> = new Subject();

  public dropDownValue: any;
  public data: any;
  public userIcon :any;
  constructor(public http: HttpClient) {
    console.log(API_URL)
    this.getTicketFromServer().subscribe(res => {
      this.data = res;
      console.log(this.data);
    }, (err) => {
      console.log(err);
    });
  }

  public  statusChange(event, task) {
    let updatedData;
    console.log(event.target.value, task);
    const updatedstatus = parseInt(event.target.value);
    const data = { ...task, status: updatedstatus };
    this.chnageDATA(task.id, data).subscribe(res => {
      console.log(res);
      return updatedData.filter(data => data.id != res['id']);
    });
  }

  public getTicketFromServer() {
    return this.http.get(
      `${API_URL}/ticket`,
    );
  }

  chnageDATA(id,value){
    return this.http.put(
      `${API_URL}/ticket/${id}`,value,
    );
  }

  public getDropdownFromServer() {
    return this.http.get(
      `${API_URL}/status`,
    );
  }
}
