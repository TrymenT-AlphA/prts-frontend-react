/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-28 11:24:42
 * Last modified  : 2022-12-28 16:24:56
 */

import { useState } from "react";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";

function Item(props) {
  const { id } = props;
  const [isError, setIsError] = useState(false);
  const { data, isLoading, error } = useGet(`${getServer()}/items/${id}`);

  if (error !== null) {
    return <span>{error}</span>;
  }

  if (isLoading) {
    return <div className="mdui-spinner" style={props.style}></div>;
  }

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

export default Item;
