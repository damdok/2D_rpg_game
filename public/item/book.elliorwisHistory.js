/*


物品信息


*/
document.currentScript["data-callback"](function (Game) {
  "use strict";
  var content = [
    "艾利韦斯大陆，在有记载的时候，就进入了混乱的时代。诸神的化身经常出现在大陆的各个角落，寻找各自的信徒",
    "诸神离去，各方领主崛起，简历了一个一个国家，不断的征战，这个时代被后来称为英雄时代，我认为言过其实了",
    "英雄时代末期，一个年轻的帝国诞生了，就是现在的圣瓦隆帝国，神庙辅助这个帝国统一了大陆",
    "在现在这个时代中，圣瓦隆帝国以神庙为支柱，坚强的统治着艾利韦斯大陆。但是有传言说，一股黑暗的力量正在慢慢降临"
  ];

  return {
    name: "艾利韦斯的历史",
    description: "讲述关于维加女神和维加大陆的历史",
    use: function () {
      Game.Dialogue(content, "《维加的历史》");
    },
    value: 1,
    type: "book",
    image: "resource\/book.png",
    centerX: 17,
    centerY: 25,
    hitArea: [[0, 0]]
  };

});
