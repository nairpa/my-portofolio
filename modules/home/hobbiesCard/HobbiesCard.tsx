import { Text } from "@/common/components/heading/Heading"
import { Paper } from "@/common/components/paper/Paper"
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import Image from 'next/image';
import { useEffect, useRef } from "react";
import styles from './HobbiesCard.module.css';
import { useTranslation } from 'react-i18next';

export const HobbiesCard = () => {
    const query = useMediaQuery('(max-width: 780px');
    const ref = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if(ref.current) {
            if(query) {
                ref.current.style.gridArea = "5 / 1 / 7 / 4";
            } else {
                ref.current.style.gridArea = "";
            }
        } 
    }, [ref, query])

    return (
        <Paper ref={ref} isColumn>
            <Text bold variant='heading' text={t("pasatiempos")}/>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} width={300} height={200} alt="img-hobbies" src="/role-games.webp" ></Image>
                </div>
                <Text bold variant="subtitle" text={t("pasatiempoPrimero")} />
                <Text variant="text" text={t("pasatiempoPrimeroDescripcion")}/>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} width={300} height={200} alt="img-hobbies" src="/travel.jpg" ></Image>
                </div>
                <Text bold variant="subtitle" text={t("pasatiempoSegundo")} />
                <Text variant="text" text={t("pasatiempoSegundoDescripcion")}/>
            </div>
        </Paper>
    )
}