/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 19:16:51
 * Last modified  : 2022-12-27 19:42:49
 */

function SearchBar(props) {
  return (
    <div
      {...props}
      className={[
        "mdui-textfield mdui-textfield-expandable",
        props.className,
      ].join(" ")}
    >
      <button className="mdui-textfield-icon mdui-btn mdui-btn-icon">
        <i className="mdui-icon material-icons">search</i>
      </button>
      <input
        className="mdui-textfield-input"
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => {
          props.onChange(e);
        }}
      />
      <button
        className="mdui-textfield-close mdui-btn mdui-btn-icon"
        onClick={props.onCloseClick}
      >
        <i className="mdui-icon material-icons">close</i>
      </button>
    </div>
  );
}

export default SearchBar;
