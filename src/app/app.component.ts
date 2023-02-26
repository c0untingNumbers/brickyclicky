import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'brickyclicky';
  
  private app = new PIXI.Application<HTMLCanvasElement>({
    width: innerWidth,
    height: innerHeight,
  });

  ngOnInit(): void {
    document.body.appendChild(this.app.view);
  }
}
