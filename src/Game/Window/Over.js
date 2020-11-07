/*

A-RPG Game, Built using JavaScript ES6
Copyright (C) 2015 qhduan(http://qhduan.com)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

"use strict";

import Game   from "../Base.js";
import Window from "../Window.js";
import html   from "../HTML/Over.html";
import "../CSS/Over.scss";

let win = Window.create("overWindow", html);
let WindowOver = win;
export default WindowOver;

let overWindowMessage = win.querySelector("#overWindowMessage");
let overWindowReason = win.querySelector("#overWindowReason");
let overWindowClose = win.querySelector("button#overWindowClose");

let deadText = [
  "不幸的事情终于发生了……即便你的内心曾对神灵祈祷",
  "不幸的事情终于发生了……你就知道自己今天不应该穿白色的袜子",
  "不幸的事情终于发生了……明明还没有体验过天伦之乐",
  "不幸的事情终于发生了……你的墓碑上写着：“下次不能随便踢小动物”",
  "不幸的事情终于发生了……你感觉自己的身体变轻了…轻了…轻了…",
  "不幸的事情终于发生了……你摸了摸自己的脖子，似乎找不到脑袋了，于是你一赌气",
  "不幸的事情终于发生了……你的墓碑上写着：“下次再也不把治疗药水借给别人了”",
  "不幸的事情终于发生了……曾经有一瓶治疗药水摆在你面前，而你没有珍惜",
  "不幸的事情终于发生了……你回想起曾经在广阔的原野上尽情的奔跑",
  "不幸的事情终于发生了……不过好消息是你再也不用减肥了",
  "不幸的事情终于发生了……下次在冒险前一定要吃饱饭"
];

win.assign("open", (reason) => {
  if (reason) {
    overWindowReason.textContent = reason;
  } else {
    overWindowReason.innerHTML = "";
  }
  overWindowMessage.textContent = deadText[Math.floor(Math.random() * deadText.length)];
  Game.windows.stage.hide();
  Game.windows.interface.hide();
  win.show();
});

overWindowClose.addEventListener("click", (event) => {
  Game.clearStage();
  win.hide();
  Game.windows.main.show();
});
