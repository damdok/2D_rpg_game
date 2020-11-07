/*


人物信息


*/
document.currentScript["data-callback"](function (Game) {
  "use strict";
  return {
    name: "坦德姆",
    description: "斯塔特镇镇长",
    type: "npc",
    contact: [
      {
        name: "闲谈",
        content: [
          "我看你是新来的冒险者吧，我是斯塔特镇的镇长",
          "斯塔特镇北方就是都城，是很方便的城镇。在这里可以购买日用品，装备，方便以后的冒险。"
        ]
      }
    ],
    quest: ["fystone.clearBat"],
    image: "resource\/fystone.tandem.png",
    centerX: 16,
    centerY: 42,
    hitArea: [[0, 0]],
    level: 1,
    $str: 10,
    $dex: 10,
    $int: 10,
    $con: 10,
    $cha: 10,
    tileheight: 48,
    tilewidth: 32,
    animations: {
      walkdown: [0, 2, "walkdown", 100],
      walkleft: [3, 5, "walkleft", 100],
      walkright: [6, 8, "walkright", 100],
      walkup: [9, 11, "walkup", 100],
      rundown: [0, 2, "rundown", 50],
      runleft: [3, 5, "walkleft", 50],
      runright: [6, 8, "runright", 50],
      runup: [9, 11, "runup", 50],
      facedown: 1,
      faceleft: 4,
      faceright: 7,
      faceup: 10,
      attackdown: [0, 2, "walkdown", 100],
      attackleft: [3, 5, "walkleft", 100],
      attackright: [6, 8, "walkright", 100],
      attackup: [9, 11, "walkup", 100],
    }
  };

});
