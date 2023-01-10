import Player from "./Player.js";
import BulletController from "./BulletController.js";
// console.log("Namaste gammer!");
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 600;

const bulletController = new BulletController(canvas);
const player = new Player(canvas.width / 2.2, canvas.height / 1.2, bulletController);



function gameLoop() {
    setCommanStyle();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    bulletController.draw(ctx);
    player.draw(ctx);
}
function setCommanStyle() {
    ctx.shadowColor = "#d53";
    ctx.shadowBlur = 20;
    ctx.lineJoin = "round"
    ctx.lineWidth = 50;
}
setInterval(gameLoop, 1000 / 60);