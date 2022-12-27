/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * a component to hold a group of checkbtns and display them
 *
 * @summary checkbtn group
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 13:41:26
 * Last modified  : 2022-12-27 19:49:55
 */

import { Children, cloneElement, isValidElement, useState } from "react";
import Checkbtn from "./checkbtn";

function CheckbtnGroup(props) {
  const { className, title, titleClass, groupState, setGroupState } = props;
  const [checkAll, setCheckAll] = useState(true);

  return (
    <div className={["checkbtn-group", className].join(" ")}>
      <label className={["mdui-textfield-label", titleClass].join(" ")}>
        {title}
      </label>
      <Checkbtn
        className="mdui-color-red-a700"
        content={`全选`}
        state={checkAll}
        setState={setCheckAll}
        onClick={() => {
          if (checkAll) {
            return;
          }
          var newGroupState = { ...groupState };
          for (var key in newGroupState) {
            newGroupState[key] = true;
          }
          setGroupState(newGroupState);
        }}
      />
      {Children.map(props.children, (child) => {
        if (!isValidElement(child)) {
          return null;
        }
        const childProps = {
          ...child.props,
          state: groupState[child.props.content],
          setState: (newState) => {
            var newGroupState = { ...groupState };
            newGroupState[child.props.content] = newState;
            setGroupState(newGroupState);
            if (!newState) {
              setCheckAll(false);
            }
          },
        };
        return cloneElement(child, childProps);
      })}
    </div>
  );
}

export default CheckbtnGroup;
