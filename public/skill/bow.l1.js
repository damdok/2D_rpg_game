/*


技能信息


*/
document.currentScript["data-callback"](function (Game) {
  "use strict";
  return {
    name: "弓箭攻击Level1",
    description: "弓箭攻击Level1",
    image: "resource\/bow.png",
    icon: "resource\/bow_icon.png",
    sound: "resource\/bow.ogg",
    cost: 1,
    next: {
      gold: 10,
      exp: 10,
      id: "bow.l2"
    },
    distance: 50,
    cooldown: 800,
    type: "normal",
    condition: function () {
      var weapon = Game.hero.data.equipment.weapon;
      if (!weapon || Game.items[weapon].data.type != "bow") {
        Game.hero.popup("需要装备弓");
        return false;
      }
      return true;
    },
    power: "1d4",
    tileheight: 64,
    tilewidth: 64,
    alpha: 0.5,
    animations: {
      attackdown: {
        frames: [0],
        speed: 20,
        next: "",
        centerX: 32,
        centerY: 65,
        actor: "shootdown"
      },
      attackleft: {
        frames: [1],
        speed: 20,
        next: "",
        centerX: 15,
        centerY: 55,
        actor: "shootleft"
      },
      attackright: {
        frames: [2],
        speed: 20,
        next: "",
        centerX: 50,
        centerY: 55,
        actor: "shootright"
      },
      attackup: {
        frames: [3],
        speed: 20,
        next: "",
        centerX: 32,
        centerY: 30,
        actor: "shootup"
      }
    }
  };
});
