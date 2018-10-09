import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private chartData: Array<any>;

  constructor(){}

  ngOnInit(){
    // We will give everything a chance to load
    setTimeout(() => {
      this.generateData();
      
      // Changet the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for(let i = 0; i < (9 + Math.floor(Math.random() *  10)); i++){
      this.chartData.push([`Index ${i}`, Math.floor(Math.random() * 100)
    ]);
    }
  }
}
