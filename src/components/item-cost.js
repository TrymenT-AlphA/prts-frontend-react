/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-28 11:24:42
 * Last modified  : 2023-03-11 14:11:24
 */

import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ItemCost(props) {
  const { id } = props;
  const { data, isLoading, error } = useGet(`${getServer()}/items/${id}`);

  if (error !== null) {
    return <span>{error}</span>;
  }

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div
      style={{
        display: "inline-block",
      }}
      onClick={() => props.onClick()}
    >
      <div className="mdui-valign">
          <LazyLoadImage
            src={`/asset/item/${data.iconId}.png`}
            alt={data.name}
            className="mdui-m-r-1"
            style={{ width: "48px", height: "48px" }}
          />
        <div>
          <label className="mdui-textfield-label mdui-text-truncate">
            {data.name}
          </label>
          <span>{props.count}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCost;
