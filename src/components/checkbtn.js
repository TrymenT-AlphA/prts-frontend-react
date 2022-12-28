/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * checkbtn component, takes a `checked` state and `setChecked`
 * funcion to display an change state
 *
 * @summary checkbtn
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 13:20:43
 * Last modified  : 2022-12-28 11:21:49
 */

function Checkbtn(props) {
  const { className, content, state, onChange } = props;

  return (
    <label
      {...props}
      className={[
        "mdui-btn mdui-btn-dense mdui-ripple",
        state ? "" : "opacity-3",
        className,
      ].join(" ")}
      style={{ minWidth: 0, margin: 1 }}
    >
      <input
        type="checkbox"
        style={{ display: "none" }}
        checked={state ? 1 : 0}
        onChange={onChange}
      />
      {content}
    </label>
  );
}

export default Checkbtn;
