/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-28 15:22:11
 * Last modified  : 2022-12-28 15:27:31
 */

function getItemClassCode(itemClass) {
  const itemClassCodeDict = {
    材料: "MATERIAL",
    普通: "NORMAL",
    消耗品: "CONSUME",
    杂项: "NONE",
  };

  return itemClassCodeDict[itemClass];
}

export default getItemClassCode;
