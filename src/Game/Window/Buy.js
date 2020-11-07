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
import html   from "../HTML/Buy.html";
import "../CSS/Buy.scss";

let win = Window.create("buyWindow", html);
let WindowBuy = win;
export default WindowBuy;

let buyWindowClose = win.querySelector("button#buyWindowClose");
let buyWindowSell = win.querySelector("button#buyWindowSell");

let buyWindowAll = win.querySelector("button#buyWindowAll");
let buyWindowWeapon = win.querySelector("button#buyWindowWeapon");
let buyWindowArmor = win.querySelector("button#buyWindowArmor");
let buyWindowPotion = win.querySelector("button#buyWindowPotion");
let buyWindowMaterial = win.querySelector("button#buyWindowMaterial");
let buyWindowBook = win.querySelector("button#buyWindowBook");
let buyWindowMisc = win.querySelector("button#buyWindowMisc");

let buyWindowGold = win.querySelector("span#buyWindowGold");
let buyWindowTable = win.querySelector("#buyWindowTable");

let lastItems = null;
let lastFilter = null;
let lastSelect = -1;

buyWindowClose.addEventListener("click", () => {
  win.hide();
});

buyWindowSell.addEventListener("click", () => {
  win.hide();
  Game.windows.sell.open(lastItems);
});

win.whenUp(["tab"], () => {
  setTimeout( () => {
    win.hide();
    Game.windows.sell.open(lastItems);
  }, 20);
});

buyWindowAll.addEventListener("click", (event) => {
  win.open(lastItems, null);
});

buyWindowWeapon.addEventListener("click", (event) => {
  win.open(lastItems, "sword|spear|bow");
});

buyWindowArmor.addEventListener("click", (event) => {
  win.open(lastItems, "head|body|feet");
});

buyWindowPotion.addEventListener("click", (event) => {
  win.open(lastItems, "potion");
});

buyWindowMaterial.addEventListener("click", (event) => {
  win.open(lastItems, "material");
});

buyWindowBook.addEventListener("click", (event) => {
  win.open(lastItems, "book|scroll|letter");
});

buyWindowMisc.addEventListener("click", (event) => {
  win.open(lastItems, "misc");
});

win.assign("open", (items, filter, select) => {

  if (typeof select == "undefined") {
    select = -1;
  }

  lastItems = items;
  lastFilter = filter;
  lastSelect = select;

  buyWindowGold.textContent = Game.hero.data.gold + "G";

  let defaultColor = "white";
  let activeColor = "yellow";

  buyWindowAll.style.color = defaultColor;
  buyWindowWeapon.style.color = defaultColor;
  buyWindowArmor.style.color = defaultColor;
  buyWindowPotion.style.color = defaultColor;
  buyWindowMaterial.style.color = defaultColor;
  buyWindowBook.style.color = defaultColor;
  buyWindowMisc.style.color = defaultColor;

  if ( !filter ) {
    buyWindowAll.style.color = activeColor;
  } else if (filter.match(/sword/)) {
    buyWindowWeapon.style.color = activeColor;
  } else if (filter.match(/head/)) {
    buyWindowArmor.style.color = activeColor;
  } else if (filter.match(/potion/)) {
    buyWindowPotion.style.color = activeColor;
  } else if (filter.match(/material/)) {
    buyWindowMaterial.style.color = activeColor;
  } else if (filter.match(/book/)) {
    buyWindowBook.style.color = activeColor;
  } else if (filter.match(/misc/)) {
    buyWindowMisc.style.color = activeColor;
  }

  let index = 0;
  let table = "";

  Object.keys(items).forEach(itemId => {
    let itemCount = items[itemId];

    let item = Game.items[itemId];

    if (filter && filter.indexOf(item.data.type) == -1)
      return;

    let line = "";

    if (select == index) {
      line += `<tr style="background-color: green;">\n`;
    } else {
      line += `<tr>\n`;
    }


    if (item.icon) {
      line += `  <td style="text-align: center;"><img alt="" src="${item.icon.src}"></td>\n`;
    } else {
      line += `  <td> </td>\n`;
    }
    line += `  <td>${item.data.name}</td>\n`;
    line += `  <td style="text-align: center;">${Math.ceil(item.data.value * 1.2)}G</td>\n`;
    line += `  <td style="text-align: center;">${itemCount}</td>\n`;
    line += `  <td>${item.data.description}</td>\n`;

    if (Math.ceil(item.data.value * 1.2) > Game.hero.data.gold || items[itemId] <= 0) {
      line += `  <td><button disabled style="Opacity: 0.5;" class="brownButton">买入</button></td>\n`;
    } else {
      line += `  <td><button data-id="${itemId}" class="brownButton">买入</button></td>\n`;
    }

    line += "</tr>\n";
    table += line;
    index++;
  });

  buyWindowTable.innerHTML = table;
  win.show();
});

win.whenUp(["enter"], () => {
  let buttons = buyWindowTable.querySelectorAll("button");
  if (lastSelect >= 0 && lastSelect < buttons.length) {
    buttons[lastSelect].click();
  }
});

win.whenUp(["up", "down"], (key) => {
  let count = buyWindowTable.querySelectorAll("button").length;
  if (count <= 0) return;

  if (lastSelect == -1) {
    if (key == "down") {
      win.open(lastItems, lastFilter, 0);
    } else if (key == "up") {
      win.open(lastItems, lastFilter, count - 1);
    }
  } else {
    if (key == "down") {
      let select = lastSelect + 1;
      if (select >= count) {
        select = 0;
      }
      win.open(lastItems, lastFilter, select);
    } else if (key == "up") {
      let select = lastSelect - 1;
      if (select < 0) {
        select = count - 1;
      }
      win.open(lastItems, lastFilter, select);
    }
  }
});

win.whenUp(["esc"], () => {
  setTimeout( () => {
    win.hide();
  }, 20);
});

win.whenUp(["left", "right"], (key) => {
  if (key == "right") {
    let filter = lastFilter;
    if ( !filter ) {
      filter = "sword|spear|bow";
    } else if (filter.match(/sword/)) {
      filter = "head|body|feet";
    } else if (filter.match(/head/)) {
      filter = "potion";
    } else if (filter.match(/potion/)) {
      filter = "material";
    } else if (filter.match(/material/)) {
      filter = "book|scroll|letter";
    } else if (filter.match(/book/)) {
      filter = "misc";
    } else if (filter.match(/misc/)) {
      filter = null;
    }
    win.open(lastItems, filter);
  } else if (key == "left") {
    let filter = lastFilter;
    if ( !filter ) {
      filter = "misc";
    } else if (filter.match(/sword/)) {
      filter = null;
    } else if (filter.match(/head/)) {
      filter = "sword|spear|bow";
    } else if (filter.match(/potion/)) {
      filter = "head|body|feet";
    } else if (filter.match(/material/)) {
      filter = "potion";
    } else if (filter.match(/book/)) {
      filter = "material";
    } else if (filter.match(/misc/)) {
      filter = "book|scroll|letter";
    }
    win.open(lastItems, filter);
  }
});

buyWindowTable.addEventListener("click", (event) => {
  let itemId = event.target.getAttribute("data-id");
  if (itemId && lastItems.hasOwnProperty(itemId)) {
    let item = Game.items[itemId];

    Game.hero.data.gold -= Math.ceil(item.data.value * 1.2);
    if (Game.hero.data.items[itemId]) {
      Game.hero.data.items[itemId]++;
    } else {
      Game.hero.data.items[itemId] = 1;
    }

    lastItems[itemId]--;

    if (lastItems[itemId] === 0) {
      delete lastItems[itemId];
    }

    win.open(lastItems, lastFilter);
  }
});
