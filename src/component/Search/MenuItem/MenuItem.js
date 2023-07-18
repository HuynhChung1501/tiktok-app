import classNames from "classnames/bind";
import styles from "./menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function MenuItem() {
    return (
        <>
            <p className={cx('title')}>Account</p>
            <div className={cx('menu-item')}>
                <img className={cx('user-avatar')} src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien-600x600.jpg" alt="ảnh đại diện" />
                <div>
                    <p className={cx('user-Name')}>Nguyen huynh Chung<span><FontAwesomeIcon icon={faCircleCheck} style={{ color: '#20D5EC', marginLeft: "8px" }} /></span></p>
                    <p className={cx('user-desc')}>Nguyen huynh Chung</p>
                </div>
            </div>
        </>
    );
}

export default MenuItem;