import { Text } from "@/common/components/heading/Heading"
import { Paper } from "@/common/components/paper/Paper"
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import Image from 'next/image';
import { useEffect, useRef } from "react";
import styles from './HobbiesCard.module.css';

export const HobbiesCard = () => {
    const query = useMediaQuery('(max-width: 780px');
    const ref = useRef<HTMLDivElement>(null);

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
            <Text bold variant='heading' text={"Hobbies"}/>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} width={300} height={200} alt="img-hobbies" src="/role-games.webp" ></Image>
                </div>
                <Text bold variant="subtitle" text={"Role playing"} />
                <Text variant="text" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} width={300} height={200} alt="img-hobbies" src="/travel.jpg" ></Image>
                </div>
                <Text bold variant="subtitle" text={"To Travel"} />
                <Text variant="text" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
            </div>
        </Paper>
    )
}