/*


地图信息


*/
document.currentScript["data-callback"](function (Game) {
  "use strict";
  var map = {
    actors: [],
    touch: [],
    onto: []
  };

  map.name = "巴斯托森林北部";
  map.type = "outdoor";

  // 自动生成怪物
  map.spawnMonster = {
    list: {
      "bat.purple": 0.8,
      "robber.green": 0.1,
      "slime.green": 0.1
    },
    count: 6
  };

  // 自动生成矿产
  map.spawnItem = {
    list: {
      "ore.iron": 0.5,
      "herb.stramonium": 0.5
    },
    count: 6
  };

  map.onto.push({
    x: 0,
    y: 15,
    description: "通往法斯通镇",
    execute: function () {
      Game.hero.gotoArea("fystone", 45, 38);
    }
  });

  map.onto.push({
    x: 31,
    y: 62,
    description: "通往巴斯托森林中部",
    execute: function () {
      Game.hero.gotoArea("bastowforest.center", 31, 1);
    }
  });

  return map;

});
