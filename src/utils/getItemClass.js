/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-28 15:22:11
 * Last modified  : 2022-12-28 15:26:43
 */

function getItemClass(itemClassCode) {
  const itemClassDict = {
    MATERIAL: "材料",
    NORMAL: "普通",
    CONSUME: "消耗品",
    NONE: "杂项",
  };

  return itemClassDict[itemClassCode];
}

export default getItemClass;
