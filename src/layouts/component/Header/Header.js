import classNames from "classnames/bind";
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from "./header.module.scss";
import Search from "~/component/Search";
import Button from "~/component/Button";
import { AddIcon, EllipsisVertical, LanguageIcon } from "~/component/Icon";
import Popper from "~/component/Popper/Popper";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Search />
            <div className={cx('action')}>
                <Button iconLeft={<AddIcon />}>Upload</Button>
                <Button primary>Login</Button>
                <HeadlessTippy
                    interactive={true}
                    tabIndex="-1"
                    render={attrs => (
                        <Popper>
                            {
                                <div className={cx('popper-more')}  {...attrs}>
                                    <div className={cx('menu-item')}>
                                        <LanguageIcon className={cx('icon')} />
                                        <span className={cx('text-content')}>English</span>
                                    </div>
                                </div>
                            }
                        </Popper>
                    )}
                >
                    <button className={cx('btn-more')}>
                        <EllipsisVertical />
                    </button>
                </HeadlessTippy>
            </div>
        </div>
    );
}

export default Header;