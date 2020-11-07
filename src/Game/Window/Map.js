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
import html   from "../HTML/Map.html";
import "../CSS/Map.scss";

let win = Window.create("mapWindow", html);
let WindowMap = win;
export default WindowMap;

let Close = win.querySelector("button#Close");
let MapImage = win.querySelector("div#MapImage");
let MapName = win.querySelector("label#MapName");

Close.addEventListener("click", (event) => {
  Game.windows.map.hide();
});

win.whenUp(["esc"], (key) => {
  setTimeout( () => {
    Close.click();
  }, 20);
});

win.on("beforeShow", (event) => {
  if (Game.stage && Game.area && Game.area.map) {
    MapName.textContent = Game.area.map.data.name;
    let stage = {
      x: Game.stage.x,
      y: Game.stage.y,
      centerX: Game.stage.centerX,
      centerY: Game.stage.centerY
    };
    Game.stage.x = 0;
    Game.stage.y = 0;
    Game.stage.centerX = 0;
    Game.stage.centerY = 0;
    let canvas = document.createElement("canvas");
    canvas.width = Game.area.map.width;
    canvas.height = Game.area.map.height;
    let context = canvas.getContext("2d");
    Game.stage.draw(context);
    let minimap = document.createElement("canvas");
    minimap.width = Math.floor(canvas.width / 8);
    minimap.height = Math.floor(canvas.height / 8);
    let minimapContext = minimap.getContext("2d");
    minimapContext.drawImage(canvas,
      0, 0, canvas.width, canvas.height,
      0, 0, minimap.width, minimap.height);
    context = null;
    canvas = null;
    MapImage.innerHTML = "";
    MapImage.appendChild(minimap);
    Game.stage.x = stage.x;
    Game.stage.y = stage.y;
    Game.stage.centerX = stage.centerX;
    Game.stage.centerY = stage.centerY;
  }
});
