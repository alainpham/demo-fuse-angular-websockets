import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-purews',
  templateUrl: './purews.component.html',
  styleUrls: ['./purews.component.css']
})

export class PurewsComponent implements OnInit {

  receivedMsg = [];
  tobeSentMsg = 0;
  receiveSocket = null;
  sendSocket = null;
  @ViewChild('chart') el: ElementRef;
  constructor() { }

  sendMsg() {
    this.sendSocket.send(this.tobeSentMsg);
    console.log('sending msg ' + this.tobeSentMsg);
  }
  ngOnInit() {
    this.receiveSocket = new WebSocket('ws://localhost:9292/channel');
    this.sendSocket = new WebSocket('ws://localhost:9292/channel');
    this.receiveSocket.onopen = function () { console.log('Starting getting event-bus messages ......'); };
    this.receiveSocket.onmessage = function(msg) {
          // Log message in the console
    console.log(msg.data);

    // update data in the angular app
    this.receivedMsg.push(msg.data);
    if (this.receivedMsg.length > 20) {
      this.receivedMsg.shift();
    }
    Plotly.update(this.el.nativeElement, {
      y: [this.receivedMsg]
    });

    }.bind(this);

       // initialize a chart
       this.basicChart();
  }


  basicChart() {
    const element = this.el.nativeElement;

    const style = {
      margin: { t: 0 }
    };
    const data = [{
      y: [0]
    }];
    Plotly.plot(element, data, style);
  }

}
