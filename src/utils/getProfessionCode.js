/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 16:44:49
 * Last modified  : 2022-12-27 16:45:25
 */

function getProfessionCode(profession) {
  const professionCodeDict = {
    近卫干员: "WARRIOR",
    先锋干员: "PIONEER",
    狙击干员: "SNIPER",
    术师干员: "CASTER",
    医疗干员: "MEDIC",
    重装干员: "TANK",
    特种干员: "SPECIAL",
    辅助干员: "SUPPORT",
  };

  return professionCodeDict[profession];
}

export default getProfessionCode;
