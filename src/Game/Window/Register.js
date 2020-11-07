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
import html   from "../HTML/Register.html";
import "../CSS/Register.scss";

let win = Window.create("registerWindow", html);
let WindowRegister = win;
export default WindowRegister;

let registerWindowSubmit = win.querySelector("#submit");
let registerWindowBack = win.querySelector("#back");

registerWindowSubmit.addEventListener("click", () => {
  Game.Register.submit();
});

registerWindowBack.addEventListener("click", () => {
  win.hide();
  Game.windows.main.show();
});
