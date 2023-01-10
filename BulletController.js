import Bullet from "./Bullet.js";

export default class BulletController {
    bullets = [];
    timerTillNextBullet = 2 ;

    constructor(canvas) {
        this.canvas = canvas;
    }

    shoot(x, y, speed, delay) {
        if (this.timerTillNextBullet <= 2) {
            this.bullets.push(new Bullet(x, y, speed,));
            this.timerTillNextBullet = delay;
        }

        this.timerTillNextBullet--;
    }


    draw(ctx) {
        console.log(this.bullets.length);
        this.bullets.forEach((bullet) => {
            bullet.draw(ctx)
        });
    }
}