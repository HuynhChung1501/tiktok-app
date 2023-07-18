import { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from "./search.module.scss";
import Popper from "~/component/Popper";
import MenuItem from "~/component/Search/MenuItem";

const cx = classNames.bind(styles)

function Search() {
    const [valueSearch, setValueSearch] = useState('')
    const [resultValue, setResultValue] = useState([])
    const [showResult, setShowResult] = useState(true)
    const inputRef = useRef()

    useEffect(() => {
        setResultValue([1, 23, 4])
    }, [])

    function handleSetValue(e) {
        setValueSearch(e)
    }

    function handleResetSearch() {
        setValueSearch('')
        inputRef.current.focus();
    }
    function handleClickOutSide() {
        setShowResult(false)
    }

    return (
        <div className={cx('search')}>
            <HeadlessTippy
                visible={showResult && resultValue.length > 0}
                interactive={true}
                tabIndex="-1"
                placement="bottom"
                offset={[14, 16]}
                onClickOutside={handleClickOutSide}
                render={attrs => (
                    <Popper>
                        {
                            <div className={cx('box-search')}  {...attrs}>
                                {
                                    <MenuItem />
                                }
                            </div>
                        }
                    </Popper>
                )
                }
            >
                <input
                    className={cx('search-input')}
                    placeholder="Search"
                    ref={inputRef}
                    required
                    value={valueSearch}
                    spellCheck={false}
                    onFocus={() => { setShowResult(true) }}
                    onChange={e => handleSetValue(e.target.value)}
                    type="text"
                />
            </HeadlessTippy >
            {
                valueSearch &&
                <button className={cx('btn-close')} onClick={handleResetSearch}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            }
            <button className={cx('btn-search')} onClick={e => e.preventDefault}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
            </button>
        </div >
    );
}

export default Search;