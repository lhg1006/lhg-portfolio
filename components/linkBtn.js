import React from "react";
import Link from "next/link";
import btnCss from "@/public/css/button.module.css"

const LinkBtn = ({link, title}) => {
    return (
        <Link href={link}>
            <div className={btnCss.linkButtonContainer}>
                <div className={btnCss.linkButton}>{title}</div>
            </div>
        </Link>
    )
}
export default LinkBtn