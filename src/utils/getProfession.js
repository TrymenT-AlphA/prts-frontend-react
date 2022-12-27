/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 16:40:11
 * Last modified  : 2022-12-27 16:44:46
 */

function getProfession(professionCode) {
  const professionDict = {
    WARRIOR: "近卫干员",
    PIONEER: "先锋干员",
    SNIPER: "狙击干员",
    CASTER: "术师干员",
    MEDIC: "医疗干员",
    TANK: "重装干员",
    SPECIAL: "特种干员",
    SUPPORT: "辅助干员",
  };

  return professionDict[professionCode];
}

export default getProfession;
