import classNames from "classnames/bind";

import styles from "./LayoutDefault.module.scss";
import Header from "~/layouts/component/Header";
import Home from "~/Pages/Home";

const cx = classNames.bind(styles)

function LayoutDefault() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Header />
            </header>
            <div>
                <Home />
            </div>
        </div>
    );
}

export default LayoutDefault;