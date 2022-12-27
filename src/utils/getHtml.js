/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * a util function change the old string using custom tag to
 * a new string in html format
 * this function used `htmr` which helps to render the html text
 * correctly
 *
 * @summary replace custom tag with html
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:18:04 
 * Last modified  : 2022-12-27 08:35:02
 */

import htmr from "htmr";

function getHtml(oldString) {
  if (!oldString) {
    return "";
  }
  var newString = oldString;
  const allMatches = [...oldString.matchAll(/<[@$]([\w.]*)>/g)];
  for (var eachMatch of allMatches) {
    newString = newString.replace(
      eachMatch[0],
      `<font class="${eachMatch[1].replace(".", "_")}">`
    );
  }
  newString = newString.replaceAll(/<\/>/g, "</font>");
  return htmr(newString);
}

export default getHtml;
