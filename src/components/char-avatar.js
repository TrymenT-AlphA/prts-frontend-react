/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 15:54:00
 * Last modified  : 2022-12-27 16:08:41
 */

function CharAvatar(props) {
  const { id } = props;

  return (
    <img
      className="mdui-list-item-avatar mdui-m-a-0"
      src={`/asset/avatar/${id}.png`}
      alt={id}
      style={{ width: "40px", height: "40px" }}
    />
  );
}

export default CharAvatar;
