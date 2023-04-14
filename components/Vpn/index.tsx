import React from "react";
import Switch from "react-switch";
import androidService from "../../services/androidService";

import styles from "./style.module.scss";


function Vpn() {
    const handleClick = () => {
        androidService.onFreeVpnClick();
    }

    return (
        <div className={styles.block}>
            <div className={styles.blockBorder}></div>
            <div className={styles.wrapper}>
                <div>
                    <div>Free VPN</div>
                    <div className={styles.subText}>Tap here to turn ON safe surfing</div>
                </div>    
                <div>
                    <Switch
                        onChange={handleClick}
                        checked={false} // create a state if we need turn on switcher
                        uncheckedIcon={false}
                        checkedIcon={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default Vpn;
