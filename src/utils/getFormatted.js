/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * just as named, format a string using custom placeholder
 * and value
 *
 * @summary format a string using custom placeholder
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:21:01 
 * Last modified  : 2022-12-28 00:53:43
 */

function getFormatted(oldString, blackboard) {
  if (!oldString) {
    return "";
  }
  if (!blackboard) {
    return oldString;
  }

  var dict = {};
  for (var eachKVPair of blackboard) {
    dict[eachKVPair.key.toLowerCase()] = eachKVPair.value;
  }

  var newString = oldString;
  const allMatches = [...oldString.matchAll(/{(\w+):?([\d\.]*)(%?)}/g)];
  for (var eachMatch of allMatches) {
    var key = eachMatch[1].toLowerCase();
    var value = dict[key];
    if (eachMatch[3] === "%") {
      newString = newString.replace(
        eachMatch[0],
        `${(100 * value).toFixed(Number(eachMatch[2]))}%`
      );
    } else {
      newString = newString.replace(eachMatch[0], value);
    }
  }
  return newString;
}

export default getFormatted;
