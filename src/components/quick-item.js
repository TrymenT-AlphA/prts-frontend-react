/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-28 11:24:42
 * Last modified  : 2022-12-28 16:25:41
 */

import { useState } from "react";

function QuickItem(props) {
  const { data } = props;
  const [isError, setIsError] = useState(false);

  return (
    <img
      {...props}
      src={
        isError
          ? `/asset/item_rarity_img/sprite_item_r${data.rarity + 1}.png`
          : `/asset/item/${data.iconId}.png`
      }
      alt={data.name}
      onError={() => setIsError(true)}
    />
  );
}

export default QuickItem;
