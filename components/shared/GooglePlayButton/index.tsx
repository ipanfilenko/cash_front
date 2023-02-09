
import Image from "next/image";
import Link from "next/link";
import googlePay from "../../../public/images/google-play.png";

import styles from "./style.module.scss";

function GooglePlayButton () {
    return (
        <Link href={process.env.NEXT_PUBLIC_MOBILE_APPLICATION_LINK || ''} className={styles.googlePlayLink}>
            <Image
                src="/images/google-play.png"
                alt="Mobile application"
                className={styles.googlePlaySmall}
                width="200"
                height="100"
                priority
            />  
        </Link>
    );
}

export default GooglePlayButton;
