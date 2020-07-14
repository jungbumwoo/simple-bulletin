import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Login = () => (
    <div className={cx("container")}>
        <div className={cx("box")}>
            <span className={cx("title")}>Sign In</span>
            <input placeholder="username" type="text" name="username" />
            <input placeholder="password" type="password" name="password" />
            <button className={cx("first")}>Sign In</button>
            <button>Sign up</button>
        </div>
    </div>
);

export default Login;