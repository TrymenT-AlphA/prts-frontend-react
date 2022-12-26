/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * simply call mdui.mutation() after then component was rendered.
 * this is necessary for dynamic components
 * more detail: https://www.mdui.org/docs/global
 *
 * @summary initialize mdui
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:28:24
 * Last modified  : 2022-12-27 00:30:17
 */

import mdui from "mdui";
import * as React from "react";

function useMdui() {
  React.useEffect(() => {
    mdui.mutation();
  }, []);
}

export default useMdui;