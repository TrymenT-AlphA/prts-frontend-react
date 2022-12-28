/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 16:54:57
 * Last modified  : 2022-12-28 14:19:57
 */

function getSubProfession(subProfessionCode) {
  const subProfessionDict = {
    charger: "冲锋手",
    pioneer: "尖兵",
    tactician: "战术家",
    bearer: "执棋手",
    sword: "剑豪",
    centurion: "强攻手",
    reaper: "收割者",
    instructor: "教官",
    fighter: "斗士",
    fearless: "无畏者",
    artsfghter: "术战者",
    musha: "武者",
    librator: "解放者",
    lord: "领主",
    crusher: "重剑手",
    unyield: "不屈者",
    duelist: "决战者",
    guardian: "守护者",
    fortress: "要塞",
    protector: "铁卫",
    artsprotector: "驭法铁卫",
    shotprotector: "哨戒铁卫",
    bombarder: "投掷手",
    siegesniper: "攻城手",
    reaperrange: "散射手",
    aoesniper: "炮手",
    longrange: "神射手",
    fastshot: "速射手",
    closerange: "重射手",
    corecaster: "中坚术师",
    splashcaster: "扩散术师",
    mystic: "秘术师",
    blastcaster: "轰击术师",
    chain: "链术师",
    phalanx: "阵法术师",
    funnel: "驭械术师",
    physician: "医师",
    incantationmedic: "咒愈师",
    healer: "疗养师",
    ringhealer: "群愈师",
    wandermedic: "行医",
    slower: "凝滞师",
    underminer: "削弱者",
    summoner: "召唤师",
    bard: "吟游者",
    craftsman: "工匠",
    blessing: "护佑者",
    stalker: "伏击客",
    dollkeeper: "傀儡师",
    executor: "处决者",
    geek: "怪杰",
    pusher: "推击手",
    merchant: "行商",
    hookmaster: "钩索师",
    traper: "陷阱师",
  };

  return subProfessionDict[subProfessionCode];
}

export default getSubProfession;
