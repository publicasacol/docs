import { useId } from "react";
import styles from "./features.module.css";
import WebIcon from "./icons/Web";
import QRCodeIcon from "./icons/QRCode";
import StatsIcon from "./icons/Stats";
import BuildingIcon from "./icons/Building";

export function Feature({ text, icon }) {
    return (
        <div className={styles.feature}>
            {icon}
            <h4>{text}</h4>
        </div>
    );
}

/** @type {{ key: string; icon: React.FC }[]} */
const FEATURES_LIST = [
    { key: "webpage", icon: <WebIcon />, text: "Página web" },
    { key: "qrcode", icon: <QRCodeIcon />, text: "Códigos QR" },
    { key: "statistics", icon: <StatsIcon />, text: "Estadísticas" },
    { key: "pagination", icon: <BuildingIcon />, text: "API Inmuebles" }
];

export default function Features() {
    const keyId = useId();

    return (
        <div className="text-center px-4 mb-10">
            <p className="text-lg mb-2 text-gray-600 md:!text-2xl">Powered by <a href="https://publicasa.com.co" target="_blank" rel="noopener noreferrer">publicasa</a></p>
            <div className={styles.features}>
                {FEATURES_LIST.map(({ key, icon, text }) => (
                    <Feature
                        text={text}
                        icon={icon}
                        key={keyId + key}
                    />
                ))}
            </div>
        </div>
    );
}
