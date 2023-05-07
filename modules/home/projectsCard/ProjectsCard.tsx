import { Button } from "@/common/components/button/Button"
import { Text } from "@/common/components/heading/Heading"
import { Paper } from "@/common/components/paper/Paper"
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import Image from "next/image"
import { useEffect, useRef } from "react";
import styles from './ProjectsCard.module.css';
import { faBook } from "@fortawesome/free-solid-svg-icons";

export const ProjectsCard = () => {
    const ref = useRef<HTMLDivElement>(null);
    const query = useMediaQuery('(max-width: 780px)');

    useEffect(() => {
        if(ref.current) {
            ref.current.style.gridColumn='2/4';
            ref.current.style.gridRow='2/4';
            ref.current.style.width='auto';

            if(query) { 
                ref.current.style.gridArea = "2 / 1 / 4 / 4"
            } else {
                ref.current.style.gridArea = "4 / 1 / 4 / 4"
            }
        }

    }, [query, ref])

    return(
        <div className={styles.container}>
            <Paper isColumn>
                <Text bold variant="heading" text={'Projects'} icon={faBook} />
                <div className={styles.buttonContainer}>
                    <Button fillMode="outlined" text={'CSS'} />
                    <Button fillMode="outlined" text={'HTML'} />
                    <Button fillMode="outlined" text={'React'} />
                </div>
            </Paper>
            <Paper isColumn>
                <div className={styles.imgContainer}>
                    <img src='/weather-app.jpg' alt='weatherapp' width={'100%'} height={'100%'} />
                </div>
                <Text variant="text" bold text={'#CSS'} />
                <Text variant="title" bold text={'Weather app'} />
                <Text variant="text" text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla amet delectus beatae debitis earum voluptatum voluptates dicta id '} />
                <div className={styles.buttonContainer}>
                    <Button fillMode="filled" text={'Demo'} link="nairpa.github.io/weather-app"/>
                    <Button fillMode="outlined" text={'Code'} link="github.com/nairpa/weather-app" />
                </div>
            </Paper>
        </div>
    )
}