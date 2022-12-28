/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 16:40:11
 * Last modified  : 2022-12-29 02:45:22
 */

function getChapter(zoneId) {
  const chapterDict = {
    main_0: "黑暗时代（上）",
    main_1: "黑暗时代（下）",
    main_2: "异卵同生",
    main_3: "二次呼吸",
    main_4: "急性衰竭",
    main_5: "靶向药物",
    main_6: "局部坏死",
    main_7: "苦难摇篮",
    main_8: "怒号光明",
    main_9: "风暴瞭望",
    main_10: "破碎日冕",
    main_11: "淬火尘霾",
  };

  return chapterDict[zoneId];
}

export default getChapter;
