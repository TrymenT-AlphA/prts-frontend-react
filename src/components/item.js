/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-28 11:24:42
 * Last modified  : 2022-12-28 12:43:35
 */

import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";

function Item(props) {
  const { id } = props;

  const { data, isLoading, error } = useGet(`${getServer()}/items/${id}`);

  if (error !== null) {
    return <span>{error}</span>;
  }

  if (isLoading) {
    return <div class="mdui-spinner"></div>;
  }

  return <img {...props} src={`/asset/item/${data.iconId}.png`} alt={data.name} />;
}

export default Item;
