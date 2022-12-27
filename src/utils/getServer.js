/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * get the backend server address according to `config.js`
 *
 * @summary get the backend server address
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 08:33:00
 * Last modified  : 2022-12-27 08:34:37
 */

import config from "../config";

function getServer() {
  return `${config.host}:${config.port}/api/${config.version}`;
}

export default getServer;
