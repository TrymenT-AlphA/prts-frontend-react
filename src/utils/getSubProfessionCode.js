/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 16:55:15
 * Last modified  : 2022-12-28 14:21:10
 */

function getSubProfessionCode(subProfession) {
  const subProfessionCodeDict = {
    冲锋手: "charger",
    尖兵: "pioneer",
    战术家: "tactician",
    执棋手: "bearer",
    剑豪: "sword",
    强攻手: "centurion",
    收割者: "reaper",
    教官: "instructor",
    斗士: "fighter",
    无畏者: "fearless",
    术战者: "artsfghter",
    武者: "musha",
    解放者: "librator",
    领主: "lord",
    重剑手: "crusher",
    不屈者: "unyield",
    决战者: "duelist",
    守护者: "guardian",
    要塞: "fortress",
    铁卫: "protector",
    驭法铁卫: "artsprotector",
    投掷手: "bombarder",
    攻城手: "siegesniper",
    散射手: "reaperrange",
    炮手: "aoesniper",
    神射手: "longrange",
    速射手: "fastshot",
    重射手: "closerange",
    中坚术师: "corecaster",
    扩散术师: "splashcaster",
    秘术师: "mystic",
    轰击术师: "blastcaster",
    链术师: "chain",
    阵法术师: "phalanx",
    驭械术师: "funnel",
    医师: "physician",
    咒愈师: "incantationmedic",
    疗养师: "healer",
    群愈师: "ringhealer",
    行医: "wandermedic",
    凝滞师: "slower",
    削弱者: "underminer",
    召唤师: "summoner",
    吟游者: "bard",
    工匠: "craftsman",
    护佑者: "blessing",
    伏击客: "stalker",
    傀儡师: "dollkeeper",
    处决者: "executor",
    怪杰: "geek",
    推击手: "pusher",
    行商: "merchant",
    钩索师: "hookmaster",
    陷阱师: "traper",
  };

  return subProfessionCodeDict[subProfession];
}

export default getSubProfessionCode;
