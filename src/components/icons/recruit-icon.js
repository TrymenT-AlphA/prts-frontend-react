/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * icon see: https://www.mdui.org/docs/material_icon
 *
 * @summary https://www.mdui.org/docs/material_icon
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:30:46
 * Last modified  : 2022-12-29 03:13:17
 */

import useMdui from "../../hooks/useMdui";

function RecruitIcon(props) {
  useMdui([]);

  return (
    <i {...props} className={`${props.className} mdui-icon material-icons`}>
      &#xe85d;
    </i>
  );
}

export default RecruitIcon;
