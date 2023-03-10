import Head from 'next/head'
import { Inter } from '@next/font/google'
import { HeroCard } from '@/modules/home/heroCard/HeroCard';
import { SkillCard } from '@/modules/home/skillCard/SkillCard';
import { HobbiesCard } from '@/modules/home/hobbiesCard/HobbiesCard';
import { ExperienceCard } from '@/modules/home/experienceCard/ExperienceCard';
import { IconButton } from '@/common/components/icon-button/IconButton';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Navbar } from '@/modules/home/navbar/Navbar';
import { ThemeProvider } from '@/common/context/ThemeContext';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nair | Front-end DEV</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider>
        <header>
          <Navbar />
        </header>
        {/* <aside className='aside'>
          <IconButton icon={faLinkedin}/>
          <IconButton icon={faGithub}/>
        </aside> */}
        <main>
          <HeroCard />
          <SkillCard />
          <ExperienceCard />
          <HobbiesCard />
        </main>
      </ThemeProvider>
    </>
  )
}
