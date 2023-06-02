import Head from 'next/head'
import { HeroCard } from '@/modules/home/heroCard/HeroCard';
import { SkillCard } from '@/modules/home/skillCard/SkillCard';
import { HobbiesCard } from '@/modules/home/hobbiesCard/HobbiesCard';
import { ExperienceCard } from '@/modules/home/experienceCard/ExperienceCard';
import { Navbar } from '@/modules/home/navbar/Navbar';
import { ThemeProvider } from '@/common/context/ThemeContext';
import "../i18n";
import { ProjectsCard } from '@/modules/home/projectsCard/ProjectsCard';
import { CertificateCard } from '@/modules/home/certificateCard/CertificateCard';

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
        <main>
          <HeroCard />
          <SkillCard />
          <ExperienceCard />
          <CertificateCard />
          <ProjectsCard />
        </main>
      </ThemeProvider>
    </>
  )
}
