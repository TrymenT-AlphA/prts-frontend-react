/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * when error occurs display error information and auto redirect
 *
 * @summary error page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 10:09:41
 * Last modified  : 2022-12-27 10:55:43
 */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Toolbar from "../components/toolbar";
import { ArrowBackIcon } from "../components/icons";
import useCountdown from "../hooks/useCountdown";

function ErrorPage(props) {
  const navigate = useNavigate();
  const redirectTime = useCountdown(30);

  useEffect(() => {
    if (redirectTime === 0) {
      navigate("/");
    }
  }, [redirectTime]);

  return (
    <>
      <Toolbar currentPage={`错误`} />
      <div className="mdui-container">
        <div class="mdui-card mdui-m-t-1">
          <div class="mdui-card-primary">
            {redirectTime !== 0 ? (
              <div class="mdui-card-primary-title">{`出错了！${redirectTime} 秒后将自动跳转`}</div>
            ) : (
              <div class="mdui-card-primary-title">{`出错了！跳转中...`}</div>
            )}
            <div class="mdui-card-primary-subtitle">{props.error}</div>
          </div>
        </div>
        <div
          class="mdui-card mdui-ripple mdui-m-t-1"
          onClick={() => navigate("/")}
        >
          <div class="mdui-card-primary">
            <div class="mdui-card-primary-title">
              <ArrowBackIcon /> 返回首页
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
