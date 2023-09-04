import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import myGradientScreenshot from "../public/project-screenshots/mygradient-screenshot.png";
import robofriendsScreenshot from "../public/project-screenshots/robofriends-screenshot.png";
import smartBrainScreenshot from "../public/project-screenshots/smartbrain-screenshot.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: 'SmartBrain',
      description: 'Face detection application',
      screenshot: smartBrainScreenshot,
      demo: '../public/nick-lal-smartbrain-demo-compressed.mp4',
      code: 'https://github.com/nickl-dev/smartbrain',
      download: true
    },
    {
      title: 'RoboFriends',
      description: 'Robot search directory',
      screenshot: robofriendsScreenshot,
      demo: 'https://nickl-dev-robofriends.netlify.app/',
      code: 'https://github.com/nickl-dev/robofriends',
      download: false
    },
    {
      title: 'MyGradient',
      description: 'Dual color background gradient generator',
      screenshot: myGradientScreenshot,
      demo: 'https://nickl-dev-mygradient.netlify.app/',
      code: 'https://github.com/nickl-dev/mygradient',
      download: false
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
        <link rel='iconicon' href='/favicon.io'></link>
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
                  className='bg-gray-800 text-white dark:bg-white dark:text-gray-800 px-4 py-2 border-none ml-8 rounded-sm'
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

            <p className='text-md py-5 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto md:text-lg'>
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
          <h3 className='text-3xl text-center py-1 dark:text-white'>My Work</h3>

          {/* Projects */}
          <div className='mt-12'>
            {projects.map((project, index) => {
              return (
                <div
                  className='flex flex-col justify-center items-center max-w-lg	xl:max-w-none xl:w-full xl:flex-row xl:items-start mx-auto mb-20 dark:text-white'
                  key={index}
                >
                  <div className='mb-6 w-full max-w-2xl xl:w-80 xl:m-0 xl:pr-7'>
                    <p className='font-semibold text-lg mb-2'>{project.title}</p>
                    <p>{project.description}</p>

                    <div className='mt-3.5'>
                      <a
                        className='py-2 px-4 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-sm'
                        href={project.download ? project.demo.replace('../public', '') : project.demo}
                        download={project.download ? project.demo.replace('../public/', '') : null}
                      >
                        See Demo
                      </a>
                      {project.code ?
                        <a
                          className='py-2 px-4 bg-gray-800 text-white dark:bg-white dark:text-gray-800 ml-2 rounded-sm'
                          href={project.code}
                        >
                          See Code
                        </a>
                      : null}
                    </div>
                  </div>

                  <a
                    href={project.demo}
                    className='w-full shadow-lg hover:shadow-xl xl:max-w-lg'
                  >
                    <Image
                      className='w-full xl:max-w-lg rounded-sm'
                      alt='Project screenshot'
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
