/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * a component to hold a group of checkbtns and display them
 *
 * @summary checkbtn group
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 13:41:26
 * Last modified  : 2022-12-28 11:21:34
 */

import { Children, cloneElement, isValidElement, useState } from "react";
import Checkbtn from "./checkbtn";

function CheckbtnGroup(props) {
  const { className, title, titleClass, groupState, setGroupState } = props;
  const [checkAll, setCheckAll] = useState(true);
  const [unCheckAll, setUnCheckAll] = useState(false);

  return (
    <div className={["checkbtn-group", className].join(" ")}>
      <label className={["mdui-textfield-label", titleClass].join(" ")}>
        {title}
      </label>

      {/* clear selection */}
      <Checkbtn
        className="mdui-color-light-green-accent"
        content={`清空`}
        state={unCheckAll ? 1 : 0}
        onChange={() => {
          var newGroupState = { ...groupState };
          for (var key in newGroupState) {
            newGroupState[key] = false;
          }
          setGroupState(newGroupState);
          setCheckAll(false);
          setUnCheckAll(true);
        }}
      />

      {/* select all */}
      <Checkbtn
        className="mdui-color-light-blue-accent"
        content={`全选`}
        state={checkAll ? 1 : 0}
        onChange={() => {
          var newGroupState = { ...groupState };
          for (var key in newGroupState) {
            newGroupState[key] = true;
          }
          setGroupState(newGroupState);
          setCheckAll(true);
          setUnCheckAll(false);
        }}
      />

      <br />

      {/* all child check boxes */}
      {Children.map(props.children, (child) => {
        if (!isValidElement(child)) {
          return null;
        }
        const childProps = {
          ...child.props,
          state: groupState[child.props.content] ? 1 : 0,
          onChange: () => {
            var newGroupState = { ...groupState };
            newGroupState[child.props.content] =
              !newGroupState[child.props.content];
            setGroupState(newGroupState);

            if (!newGroupState[child.props.content]) {
              setCheckAll(false);
              if (Object.values(newGroupState).every((val) => !val)) {
                setUnCheckAll(true);
              }
            } else {
              setUnCheckAll(false);
              if (Object.values(newGroupState).every((val) => val)) {
                setCheckAll(true);
              }
            }
          },
        };
        return cloneElement(child, childProps);
      })}
    </div>
  );
}

export default CheckbtnGroup;
