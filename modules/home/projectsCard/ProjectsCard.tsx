import { Button } from "@/common/components/button/Button"
import { Text } from "@/common/components/heading/Heading"
import { Paper } from "@/common/components/paper/Paper"
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import Image from "next/image"
import { useEffect, useRef } from "react";
import styles from './ProjectsCard.module.css';

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
                ref.current.style.gridArea = "2 / 2 / 4 / 4"
            }
        }

    }, [query, ref])

    return(
        <div className={styles.container}>
            <Paper isColumn>
                <Text bold variant="heading" text={'Projects'} />
                <div className={styles.buttonContainer}>
                    <Button fillMode="outlined" text={'CSS'} />
                    <Button fillMode="outlined" text={'HTML'} />
                    <Button fillMode="outlined" text={'React'} />
                </div>
            </Paper>
            <Paper isColumn>
                <Image src='/demo1.png' alt='demo1' width={100} height={100}/>
                <Text variant="text" bold text={'#CSS'}/>
                <Text variant="title" bold text={'Component library'} />
                <Text variant="text" text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla amet delectus beatae debitis earum voluptatum voluptates dicta id '} />
                <div className={styles.buttonContainer}>
                    <Button fillMode="filled" text={'Demo'} />
                    <Button fillMode="outlined" text={'Code'} />
                </div>
            </Paper>
        </div>
    )
}