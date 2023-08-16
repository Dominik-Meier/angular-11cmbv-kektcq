import { Component, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, VirtualScroll } from '@syncfusion/ej2-angular-gantt';
import { virtualData } from './data';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public data: object[];
  public taskSettings: object;
  public splitterSettings: object;
  public columns: object[];
  public labelSettings: object;
  public initTime: any;
  public startTime: any;
  public endTime: any;
  @ViewChild('gantt')
  public gantt: GanttComponent;
  constructor() {
    this.initTime = window['debug'];
    console.log(
      'Until reach constructor took: ' +
        (new Date().getTime() - this.initTime) +
        'ms'
    );
  }
  public ngOnInit(): void {
    this.data = virtualData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'parentID',
    };
    this.columns = [
      { field: 'TaskID' },
      { field: 'TaskName' },
      { field: 'StartDate' },
      { field: 'Duration' },
      { field: 'Progress' },
    ];
    this.splitterSettings = {
      columnIndex: 2,
    };
    this.labelSettings = {
      leftLabel: 'TaskName',
      taskLabel: 'Progress',
    };
    console.log(
      'Until reach ngOnInit took' +
        (new Date().getTime() - this.initTime) +
        'ms'
    );
  }
  button() {
    this.gantt.autoCalculateDateScheduling = true;
  }

  load(): void {
    console.log(
      'Until reach load(): ' + (new Date().getTime() - this.initTime) + 'ms'
    );
  }

  created(): void {
    console.log(
      'Until reach created(): ' + (new Date().getTime() - this.initTime) + 'ms'
    );
  }

  dataBound(): void {
    console.log(
      'Until reach dataBound(): ' +
        (new Date().getTime() - this.initTime) +
        'ms'
    );
  }
}
