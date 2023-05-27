import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import canadaDrivesScreenShot from "../public/project-screenshots/canadadrives-homepage-2.0-screenshot.png";
import cleanfolioScreenshot from "../public/project-screenshots/cleanfolio-screenshot.png";
import greetingsScreenshot from "../public/project-screenshots/greetings-screenshot.png";
import Head from "next/head";
import Image from "next/image";
import myGradientScreenshot from "../public/project-screenshots/mygradient-screenshot.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: 'Canada Drives - Homepage 2.0',
      description: 'Canada Drives static website homepage revamp',
      techStack: 'JavaScript, Nuxt.js, Tailwind, SCSS',
      screenshot: canadaDrivesScreenShot,
      demo: 'https://www.canadadrives.ca/'
    },
    {
      title: 'Cleanfolio',
      description:
        'Clean and simple portfolio site template for developers',
      techStack: 'JavaScript, Vue.js, SCSS',
      screenshot: cleanfolioScreenshot,
      demo: 'https://nickl-dev-cleanfolio.netlify.app/',
      code: 'https://github.com/nickl-dev/cleanfolio-vue'
    },
    {
      title: 'Greetings',
      description: 'Social media application',
      techStack:
        'JavaScript, React.js, Semantic UI, Express, Apollo, GraphQL, MongoDB',
        screenshot: greetingsScreenshot,
      demo: 'https://nickl-dev-greetings.netlify.app/',
      code: 'https://github.com/nickl-dev/greetings'
    },
    {
      title: 'MyGradient',
      description: 'Dual color background gradient generator',
      techStack: 'HTML, TypeScript, Bootstrap, SCSS',
      screenshot: myGradientScreenshot,
      demo: 'https://nickl-dev-mygradient.netlify.app/',
      code: 'https://github.com/nickl-dev/mygradient'
    }
  ]

  return (
    <div className={darkMode ? 'dark' : ''}>

      {/* Meta tags */}
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <meta name='description' content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
        <meta property='og:description' content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
        <meta property='og:title' content={process.env.NEXT_PUBLIC_SITE_NAME} />
        <meta property='og:site_name' content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property='og:image' content='/site-image.svg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:type' content='Website' />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_SITE_URL} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white px-5 sm:px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-end dark:text-white'>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-2xl text-gray-800 dark:text-white'
                />
              </li>
              <li>
                <a
                  className='bg-gray-800 text-white dark:bg-white dark:text-gray-800 px-4 py-2 border-none rounded-md ml-8'
                  href='/nick-lal-resume.pdf'
                  download='nick-lal-resume.pdf'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* About Me */}
          <div className='text-center'>
            <h2 className='text-5xl py-2 font-semibold dark:text-white md:text-6xl'>
              {process.env.NEXT_PUBLIC_MY_NAME}
            </h2>

            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
              {process.env.NEXT_PUBLIC_OCCUPATION}
            </h3>

            <p className='text-md py-5 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto md:text-xl leading-tight'>
              {process.env.NEXT_PUBLIC_DESCRIPTION}
            </p>

            <div className='text-5xl flex justify-center gap-2 py-3 text-gray-600 dark:text-gray-400'>
              <a href='https://www.linkedin.com/in/nicklal/'>
                <AiFillLinkedin />
              </a>
              <a href='https://github.com/nickl-dev'>
                <AiFillGithub />
              </a>
            </div>
          </div>
        </section>

        <section className='py-10'>
          <h3 className='text-3xl py-1 dark:text-white'>My Work</h3>

          {/* Projects */}
          <div className='grid gap-10 py-10 sm:grid-cols-2'>
            {projects.map((project, index) => {
              return (
                <div
                  className='rounded-md p-4 border border-gray-400 basis-1'
                  key={index}
                >
                  <p className='font-semibold text-lg mb-2'>{project.title}</p>
                  <p className='mb-1'>{project.description}</p>
                  <code className='text-sm leading-3'>{project.techStack}</code>

                  <div className='mt-2 mb-3'>
                    <a className='py-1 px-2 rounded-md border bg-gray-800 text-white dark:bg-white dark:text-gray-800' href={project.demo}>See Demo</a>
                    {project.code ?
                      <a
                        className='py-1 px-2 rounded-md border bg-gray-800 text-white dark:bg-white dark:text-gray-800 ml-2'
                        href={project.code}
                      >
                        See Code
                      </a>
                    : null}
                  </div>

                  <hr className='mb-2 border border-gray-400'/>

                  <a href={project.demo}>
                    <Image
                      alt='Project screenshot'
                      className='mt-2 hover:bg-slate-100'
                      // height={"100%"}
                      layout='responsive'
                      // fill={true}
                      src={project.screenshot}
                      // width={"100%"}
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
