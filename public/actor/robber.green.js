/*


人物信息


*/
document.currentScript["data-callback"](function (Game) {
  "use strict";
  return {
    name: "绿色强盗",
    description: "游走在乡村小道，专门向招惹得起的人下手",
    type: "monster",
    exp: 10,
    image: "resource\/robber.green.png",
    centerX: 16,
    centerY: 42,
    hitArea: [[0, 0]],
    level: 1,
    $str: 8,
    $dex: 6,
    $int: 8,
    $con: 5,
    $cha: 5,
    tileheight: 48,
    tilewidth: 32,
    skills: ["sword.l1"],
    buff: [],
    nerf: [],
    animations: {
      walkdown: [0, 2, "walkdown", 100],
      walkleft: [3, 5, "walkleft", 100],
      walkright: [6, 8, "walkright", 100],
      walkup: [9, 11, "walkup", 100],
      rundown: [0, 2, "rundown", 50],
      runleft: [3, 5, "walkleft", 50],
      runright: [6, 8, "runright", 50],
      runup: [9, 11, "runup", 50],
      attackdown: [0, 2, "", 100],
      attackleft: [3, 5, "", 100],
      attackright: [6, 8, "", 100],
      attackup: [9, 11, "", 100],
      facedown: 1,
      faceleft: 4,
      faceright: 7,
      faceup: 10
    }
  };

});
