import { Button } from "@/common/components/button/Button"
import { Text } from "@/common/components/heading/Heading"
import { Paper } from "@/common/components/paper/Paper"
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import styles from './ProjectsCard.module.css';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { LinkButton } from "@/common/components/link-button/LinkButton";

const projects = [
    {
        title: 'Weather app',
        tags: ['css', 'react', 'html'],
        body: 'asdas',
        img: '/weather-app.jpg',
        codeLink: 'https://github.com/nairpa/weather-app',
        demoLink:  'https://nairpa.github.io/weather-app/'
    },
    {
        title: 'Weather app',
        tags: ['html'],
        body: 'asdas',
        img: '/weather-app.jpg'
    },
    {
        title: 'Weather app',
        tags: ['css'],
        body: 'asdas',
        img: '/weather-app.jpg'
    },
]

export const ProjectsCard = () => {
    const ref = useRef<HTMLDivElement>(null);
    const query = useMediaQuery('(max-width: 780px)');
    const [ selectedTags, setSelectedTags ] = useState<string[]>([]);

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

    const handleClick = (tag: string) => {
        if(selectedTags.includes(tag.toLowerCase())) {
            setSelectedTags(selectedTags.filter(selectedTag => tag.toLowerCase() !== selectedTag))
        } else {
            setSelectedTags([
                ...selectedTags,
                tag.toLowerCase()
            ])  
        }  
    }

    const showProjectsByTag = (project: any) => {
        if(selectedTags.length) {
            if(project.tags.some((tag: string) => selectedTags.some(selectedTag => tag === selectedTag))) {
                return (
                    <Paper isColumn>
                        <div className={styles.imgContainer}>
                            <img src={project.img} alt='weatherapp' width={'100%'} height={'100%'} />
                        </div>
                        <div className={styles.tagsContainer}>
                            { project.tags.map((tag: string, i: number) => <LinkButton key={i} text={tag} />)}
                        </div>
                        <Text variant="title" bold text={project.title} />
                        <Text variant="text" text={project.body} />
                        <div className={styles.buttonContainer}>
                            <Button fillMode="filled" text={'Demo'} link="nairpa.github.io/weather-app"/>
                            <Button fillMode="outlined" text={'Code'} link="github.com/nairpa/weather-app" />
                        </div>
                    </Paper>
                )
            } else {
                return <></>
            }
        } else {
            return (
                <Paper isColumn>
                    <div className={styles.imgContainer}>
                        <img src={project.img} alt='weatherapp' width={'100%'} height={'100%'} />
                    </div>
                    <div className={styles.tagsContainer}>
                        { project.tags.map((tag: string, i: number) => <LinkButton key={i} text={tag} />)}
                    </div>
                    <Text variant="title" bold text={project.title} />
                    <Text variant="text" text={project.body} />
                    <div className={styles.buttonContainer}>
                        <Button fillMode="filled" text={'Demo'} link={project.demoLink}/>
                        <Button fillMode="outlined" text={'Code'} link={project.codeLink} />
                    </div>
                </Paper>
            )
        }
        
    }

    return(
        <div className={styles.container}>
            <Paper isColumn>
                <Text bold variant="heading" text={'Projects'} icon={faBook} />
                <div className={styles.buttonContainer}>
                    <Button fillMode="outlined" text={'CSS'} onClick={() => handleClick('CSS')} selected={ selectedTags.includes('css')} />
                    <Button fillMode="outlined" text={'HTML'} onClick={() => handleClick('HTML')} selected={ selectedTags.includes('html')}/>
                    <Button fillMode="outlined" text={'React'} onClick={() => handleClick('React')} selected={ selectedTags.includes('react')}/>
                </div>
            </Paper>
            <div className={styles.projectsContainer}>
                {projects.map(project => showProjectsByTag(project))}
            </div>
        </div>
    )
}