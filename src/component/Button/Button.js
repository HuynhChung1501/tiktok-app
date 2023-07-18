import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { forwardRef } from "react";

import styles from "./button.module.scss";

const cx = classNames.bind(styles)

function Button({ to, href, primary, small, large, outline_default, children, onClick, iconLeft, iconRight, ...passProps }, ref) {
    let Comp = 'button'

    const props = {
        ...passProps
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    return (
        <Comp className={cx('wrapper', {
            primary: primary,
            small: small,
            large: large,
            outline_default: outline_default,
        })}
            onClick={onClick}
            {...props}
        >
            {iconLeft && <span className={cx('icon')} >{iconLeft}</span>}
            {children}
            {iconLeft && <span className={cx('icon')} >{iconRight}</span>}
        </Comp>
    );
}

Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    outline_default: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.string,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
}


export default forwardRef(Button);