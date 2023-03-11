import styles from './HeroCard.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Paper } from '@/common/components/paper/Paper';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    isColumn?: boolean;
}

export const HeroCard = ({isColumn}:Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if(ref.current) {
            ref.current.style.gridColumn = '1/4';
            ref.current.style.gridRow = '1';
        }
    }, [ref])

    return (
        <Paper ref={ref}>
            <div className={styles.cardImg}>
            </div>
            <div className={`${styles.cardMain}`}>
                <div className={`${styles.cardHeader} ${isColumn ? styles.flexCol : ''}`}>
                    <div className={styles.cardHeading}>
                        <span className={styles.cardTitle}>Nair Palacios</span>
                        <span className={styles.cardSubtitle}>{t("puesto")}</span>
                    </div>
                    <div className={styles.cardAction}>
                        <a href="mailto:nairpalacios@live.com" className={styles.cardActionItem}>
                            <span className="card-action-item icon"><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span className="card-action text">nairpalacios@live.com</span>
                        </a>
                        <a href='https://github.com/nairpa' target={'_blank'} className={styles.cardActionItem}>
                            <span className="card-action-item icon"><FontAwesomeIcon icon={faGithub}/></span>
                            <span className="card-action text">nairpa</span>
                        </a>
                        <a href='https://www.linkedin.com/in/nair-palacios' target={'_blank'} className={styles.cardActionItem}>
                            <span className="card-action-item icon"><FontAwesomeIcon icon={faLinkedin}/></span>
                            <span className="card-action text">nair-palacios</span>
                        </a>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur aperiam quaerat ad ipsa officia commodi necessitatibus reiciendis, inventore atque autem architecto.
                </div>
            </div>
        </Paper>
    )
}