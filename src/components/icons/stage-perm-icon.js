/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-28 23:07:07
 * Last modified  : 2022-12-28 23:08:18
 */

import useMdui from "../../hooks/useMdui";

function StagePermIcon(props) {
  useMdui([]);

  return (
    <i {...props} className={`${props.className} mdui-icon material-icons`}>
      &#xeb3b;
    </i>
  )
}

export default StagePermIcon;
