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
 * Last modified  : 2022-12-27 19:49:58
 */

function Checkbtn(props) {
  const { className, content, state, setState } = props;

  return (
    <label
      {...props}
      className={[
        "mdui-btn mdui-btn-dense mdui-ripple",
        state ? "" : "opacity-5",
        className,
      ].join(" ")}
      style={{ minWidth: 0, margin: 1 }}
    >
      <input
        type="checkbox"
        style={{ display: "none" }}
        checked={state ? 1 : 0}
        onChange={() => setState(!state)}
      />
      {content}
    </label>
  );
}

export default Checkbtn;
