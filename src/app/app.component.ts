import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js';
import Player from 'src/model/Player';
import Shop from 'src/model/Shop';
import { ModelService } from './model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private app = new PIXI.Application<HTMLCanvasElement>({
    resizeTo: window,
  });

  constructor(private modelService: ModelService) {}

  ngOnInit(): void {
    document.body.appendChild(this.app.view);

    const backgroundSprite = PIXI.Sprite.from('assets/background.png');
    const bgAspectRatio = 1920 / 1080;
    backgroundSprite.height = window.innerHeight;
    backgroundSprite.width = bgAspectRatio * window.innerHeight;
    this.app.stage.addChild(backgroundSprite);

    const brickSprite = PIXI.Sprite.from('assets/brick.png');
    brickSprite.width = 190;
    brickSprite.height = 176;
    brickSprite.anchor.set(0.5, 0.5);
    brickSprite.y = 300;
    brickSprite.x = backgroundSprite.width / 2;

    brickSprite.interactive = true;
    brickSprite.on('click', (e) => {
      this.modelService.player.click();
      console.log(this.modelService.player.getNumBricks());
    });

    this.app.stage.addChild(brickSprite);

    let elapsed = 0.0;
    this.app.ticker.add((delta) => {
      elapsed += delta;
      if (elapsed > 60) {
        Player.work();
        elapsed = 0.0;
      }
      console.log(`Player bricks = ${Player.getNumBricks()}`);
      console.log(`Worker cost: ${Shop.getWorkerCost()}`);
    });
  }
}
