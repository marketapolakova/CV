import React from 'react'
import S from "./navbar.module.scss"

function Navbar() {
    return (
        <div className={S.div}>
            <ul>
                <li className={S.li}>
                    Home
                </li>
                <li className={S.li}>
                    About me
                </li>
                <li className={S.li}>
                    Resume
                </li>
                <li className={S.li}>
                    Skills
                </li>
                <li className={S.li}>
                    Portfolio
                </li>
                <li className={S.li}>
                    Contact
                </li>
            </ul>
        </div>
    )
}

export default Navbar
