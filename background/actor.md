## 角色信息

### 角色分类

- 玩家 ActorHero
- NPC ActorNPC
- 怪物(包括人形敌人) ActorMonster
- 盟友(雇佣兵) ActorAlly
- 宠物 ActorPet

怪物会主动攻击玩家和盟友

玩家和盟友会主动攻击怪物

玩家可以攻击NPC，但是会有惩罚（例如罚金或者道德值降低）

宠物不能被任何人攻击，宠物没有碰撞检测，遇到怪物会逃跑


### 角色职业 actor class

每个职业都有属性奖励，擅长技能

职业可以更换，根据角色当前等级，更换职业所需的金币和经验会递增

- 剑士
力量+2
擅长：肉搏，剑，枪

- 弓箭手
力量+1 敏捷+1
擅长：肉搏，弓

- 法师
智力+2
擅长：魔法，知识

- 牧师
体质+1 魅力+1
擅长：神术，说服，知识

- 吟游诗人
魅力+2
擅长：表演，知识

- 盗贼
智力+1 敏捷+1
擅长：说服，开锁

- 商人
智力+1 魅力+1
擅长：口才

### 角色技能

技能包括战斗技能和生活技能，统称技能

分类  技能

近战  肉搏，剑，枪
远程  弓箭
魔法  火球术，寒冰弹丸
神术  治疗，神圣冲击
表演  鼓舞战歌，惩罚战歌
口才  说服，交易
其他  知识，烹饪，开锁

### 角色属性

角色一级属性：

- 力量 strength str
- 敏捷 dexterity dex
- 耐力 constitution con
- 智力 intelligence int
- 魅力 charisma cha


二级属性：

- 攻击力 atk
- 防御力 def
- 魔法攻击 matk
- 魔法防御 mdef
- 生命值 hp
- 精神值 sp
- 暴击率 critical
- 闪避率 dodge


### 公式

##### 属性公式

- 生命值 = 耐力 × 5
- 精神值 = 智力 × 5
- 攻击力 = floor(力量 × 0.25)
- 魔攻击 = floor(智力 × 0.25)

- 暴击率 = 敏捷 × 0.005
- 闪避率 = 敏捷 × 0.005

floor是指向下取整，例如floor(3.99) = 3

###### 玩家初始属性

- str = 10
- dex = 10
- con = 10
- int = 10
- cha = 10

- hp = con * 5 = 50
- sp = int * 5 = 50
- atk = floor(str * 0.25) = 2
- matk = floor(int * 0.25) = 2
- critical = dex * 0.005 = 0.05 = 5%
- dodge = dex * 0.005 = 0.05 = 5%


##### 伤害公式

普通伤害 = attacker.atk + attacker.skill.power - enemy.def
魔法伤害 = attacker.matk + attacker.skill.power - enemy.mdef

其中skill.power是攻击者所使用攻击技能的伤害
