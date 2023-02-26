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

    // const brickSprite = PIXI.Sprite.from('assets/brick.png');
    // brickSprite.width = 190;
    // brickSprite.height = 176;
    // brickSprite.anchor.set(0.5, 0.5);
    // brickSprite.y = 300;
    // brickSprite.x = backgroundSprite.width / 2;

    // brickSprite.interactive = true;
    // brickSprite.on('click', (e) => {
    //   this.modelService.player.click();
    //   console.log(this.modelService.player.getNumBricks());
    // });

    // this.app.stage.addChild(brickSprite);

    let elapsed = 0.0;
    this.app.ticker.add((delta) => {
      elapsed += delta;
      if (elapsed > 2.5) {
        Player.work();
        elapsed = 0;
      }
    });
  }

  onBrickClick() {
    this.modelService.player.click();
  }

  updateApartment() {
    const level = this.modelService.apartment.getLevel();
    if (level === 1) {
      const sprite = PIXI.Sprite.from('assets/apt_floor1.PNG');
      sprite.scale.set(0.0002 * innerWidth, 0.0002 * innerWidth);
      sprite.x = window.innerWidth / 10;
      sprite.y = window.innerHeight - window.innerHeight / 2;
      this.app.stage.addChild(sprite);
    } else if (level > 1 && level < 5) {
      const sprite = PIXI.Sprite.from('assets/apt_extension.PNG');
      const aptHeight = 600 * 0.0002 * innerWidth;
      sprite.scale.set(0.0002 * innerWidth, 0.0002 * innerWidth);
      sprite.x = window.innerWidth / 10;
      sprite.y =
        window.innerHeight - window.innerHeight / 2 - (level - 1) * aptHeight;
      this.app.stage.addChild(sprite);
    }
  }

  updateFactory() {
    const level = this.modelService.factory.getLevel();
    if (level === 1) {
      const sprite = PIXI.Sprite.from('assets/factory_floor1.PNG');
      sprite.scale.set(0.0002 * innerWidth, 0.0002 * innerWidth);
      sprite.x = (5 * window.innerWidth) / 10;
      sprite.y = window.innerHeight - window.innerHeight / 2;
      this.app.stage.addChild(sprite);
    } else if (level > 1 && level < 5) {
      const sprite = PIXI.Sprite.from('assets/factory_extension.PNG');
      const factoryHeight = 600 * 0.0002 * innerWidth;
      sprite.scale.set(0.0002 * innerWidth, 0.0002 * innerWidth);
      sprite.x = (5 * window.innerWidth) / 10;
      sprite.y =
        window.innerHeight -
        window.innerHeight / 2 -
        (level - 1) * factoryHeight;
      this.app.stage.addChild(sprite);
    }
  }

  buyCallback() {
    console.dir(this);
    this.updateApartment();
    this.updateFactory();
  }

  onBuy = this.buyCallback.bind(this);
}
