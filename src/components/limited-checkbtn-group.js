/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * a component to hold a group of checkbtns and display them
 *
 * @summary checkbtn group
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 13:41:26
 * Last modified  : 2022-12-30 13:27:25
 */

import { Children, cloneElement, isValidElement } from "react";
import mdui from "mdui";

function LimitedCheckbtnGroup(props) {
  const {
    className,
    title,
    titleClass,
    groupState,
    setGroupState,
    count,
    maxCount,
    setCount,
    dialogContent,
  } = props;
  var inst = new mdui.Dialog("#dialog");

  return (
    <div className={["checkbtn-group", className].join(" ")}>
      <label className={["mdui-textfield-label", titleClass].join(" ")}>
        {title}
      </label>
      {Children.map(props.children, (child) => {
        if (!isValidElement(child)) {
          return null;
        }
        const childProps = {
          ...child.props,
          state: groupState[child.props.content] ? 1 : 0,
          onChange: () => {
            if (!groupState[child.props.content] && count >= maxCount) {
              inst.open();
              return;
            }

            var newGroupState = { ...groupState };
            newGroupState[child.props.content] =
              !newGroupState[child.props.content];
            setGroupState(newGroupState);
            if (newGroupState[child.props.content]) {
              setCount(count + 1);
            } else {
              setCount(count - 1);
            }
          },
        };
        return cloneElement(child, childProps);
      })}

      <div className="mdui-dialog" id="dialog">
        <div className="mdui-dialog-title">提示</div>
        <div className="mdui-dialog-content">{dialogContent}</div>
        <div className="mdui-dialog-actions mdui-dialog-actions-stacked">
          <button className="mdui-btn mdui-ripple" mdui-dialog-close={1}>
            关闭窗口
          </button>
        </div>
      </div>
    </div>
  );
}

export default LimitedCheckbtnGroup;
