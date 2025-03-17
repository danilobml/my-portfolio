"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";

import profilePicture from "../../public/DaniloLima.jpg";
import awsIcon from "../../public/aws_icon.png";
import pythonIcon from "../../public/python_icon.png";
import typescriptIcon from "../../public/typescript_icon.png";
import javaIcon from "../../public/java_icon.png";
import reactIcon from "../../public/react_icon.png";
import nextIcon from "../../public/next_icon.png";
import nextIconDark from "../../public/next_icon_dark.png";
import nodeIcon from "../../public/nodejs_icon.png";
import djangoIcon from "../../public/django_icon.png";
import fastapiIcon from "../../public/fastapi_icon.png";
import springIcon from "../../public/spring_icon.png";
import fastapiProject from "../../public/fastapi.png";
import { Card, CardContent } from "@/components/ui/card";


export default function Home() {

  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-4 py-20">

        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image src={profilePicture} alt="profile-picture" className="w-full h-full object-cover cursor-pointer transition-all duration-300 hover:scale-110" />
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Danilo Lima</h1>
              <p className="text-gray-600 dark:text-gray-400">Full Stack Software Developer</p>
              <p className="text-gray-600 dark:text-gray-400">Berlin, Germany</p>
            </motion.div>
          </section>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <h2 className="text-lg text-gray-600 dark:text-gray-400 font-semibold">Turning ideas into scalable software solutions.</h2>

            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">AWS Certified. Building scalable, cloud-based, end-to-end solutions in Python, JavaScript/TypeScript and Java and several frameworks, such as <span className="text-black dark:text-white font-semibold">React, NextJs, Node/Express, Django, FastApi and Spring Boot</span>. Experient in serverless architecture and microservices.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Tech Stack:</h2>
            <div className="flex mt-5 gap-6">
              <Image src={awsIcon} alt="aws-icon" className="h-13 w-13 inline-block dark:bg-white" />
              <Image src={typescriptIcon} alt="ts-icon" className="h-14 w-14 inline-block" />
              <Image src={pythonIcon} alt="python-icon" className="h-13 w-13 inline-block" />
              <Image src={javaIcon} alt="java-icon" className="h-13 w-13 inline-block" />
            </div>
            <div className="flex mt-2 gap-5">
              <Image src={reactIcon} alt="react-icon" className="h-13 w-13 inline-block" />
              <Image src={theme !== 'dark' ? nextIcon : nextIconDark} alt="next-icon" className="h-13 w-13 inline-block rounded-full" />
              <Image src={nodeIcon} alt="nodejs-icon" className="h-13 w-13 inline-block" />
              <Image src={djangoIcon} alt="django-icon" className="h-12 w-12 inline-block" />
              <Image src={fastapiIcon} alt="fastapi-icon" className="h-13 w-13 inline-block" />
              <Image src={springIcon} alt="spring-icon" className="h-13 w-13 inline-block" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <Button
              className="rounded-full bg-gradient-to-r from-rose-400 to-indigo-600 text-white transition-transform hover:scale-105 cursor-pointer"
            >Resume</Button>
            <Link
              href="https://github.com/danilobml"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              target="_blank"
            >
              <FaGithub className="w-6 h-6"></FaGithub>
            </Link>

            <Link
              href="https://www.linkedin.com/in/danilo-barolo/"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6"></FaLinkedin>
            </Link>

            <Link
              href="mailto:danilobml@hotmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              target="_blank"
            >
              <FaEnvelope className="w-6 h-6"></FaEnvelope>
            </Link>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Experience:</h2>

            <div className="space-8-y">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Feb 2023 - Present</p>
                  <p className="font-medium">Software Developer</p>
                  <p className="text-blue-600 dark:text-blue-400">GP Joule CONNECT GmbH</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Developed customer-centered applications, including a complex operations monitoring dashboard and a fleet management system, delivering full-stack solutions using serverless architectures. Optimized system performance and scalability, driving significant improvements in customer acquisition and retention.</p>
            </div>

            <div className="space-8-y">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Jul 2022 - Present</p>
                  <p className="font-medium">Freelance Software Developer</p>
                  <p className="text-blue-600 dark:text-blue-400">Freelancer/Autonomous</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Design and development of responsive, scalable, web sites and applications, using several languages and frameworks, in order to deliver solutions that helped customers reduce costs, acquire clients, implement E-commerce, payment and SaaS platforms and services.</p>
            </div>

            <div className="space-8-y">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">2011 - 2022</p>
                  <p className="font-medium">Contract Manager</p>
                  <p className="text-blue-600 dark:text-blue-400">University of São Paulo</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Management of service contracts totaling over 100 million Euros. Improved services efficiency and regulatory compliance, contributig to save several thousand Euros.</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">*For further work experience, please check my resume in the link above.</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            <h2 className="text-xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Education:</h2>

            <div className="space-8-y">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Feb 2022 - Jul 2022</p>
                  <p className="font-medium">Full Stack Web-Development</p>
                  <p className="text-blue-600 dark:text-blue-400">WBS Coding School, Berlin</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Development of full stack web applications using React, NodeJs/Express - HTML, CSS, JavaScript, Agile Methododlogies, Docker, Git and GitHub.</p>
            </div>

            <div className="space-8-y">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Apr 2011 - Nov 2014</p>
                  <p className="font-medium">Masters in Economic History</p>
                  <p className="text-blue-600 dark:text-blue-400">University of São Paulo</p>
                </div>
              </div>
            </div>

            <div className="space-8-y">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2006 - Dez 2010</p>
                  <p className="font-medium">Bachelors in History</p>
                  <p className="text-blue-600 dark:text-blue-400">University of São Paulo</p>
                </div>
              </div>
            </div>

            <div className="space-8-y">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2001 - Dez 2005</p>
                  <p className="font-medium">Bachelors in Business</p>
                  <p className="text-blue-600 dark:text-blue-400">University of São Paulo</p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            <h2 className="text-xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Projects:</h2>

            <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
              <Link href="https://what-to-wear-api.onrender.com/docs" target="_blank">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={fastapiProject} alt="fastapi-project" className="rounded-lg mb-4 h-30" />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">What to Wear</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">FastAPI, SqlModel, LLM integration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://what-to-wear-api.onrender.com/docs" target="_blank">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={fastapiProject} alt="snacker-logo" className="rounded-lg mb-4 h-30" />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Snacker-FoodDelivery</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">React Native, AWS Lambda</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://what-to-wear-api.onrender.com/docs" target="_blank">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={fastapiProject} alt="fastapi-project" className="rounded-lg mb-4 h-30" />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">What to Wear</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">FastAPI, SqlModel, LLM integration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://what-to-wear-api.onrender.com/docs" target="_blank">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={fastapiProject} alt="fastapi-project" className="rounded-lg mb-4 h-30" />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">What to Wear</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">FastAPI, SqlModel, LLM integration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://what-to-wear-api.onrender.com/docs" target="_blank">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={fastapiProject} alt="fastapi-project" className="rounded-lg mb-4 h-30" />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">What to Wear</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">FastAPI, SqlModel, LLM integration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://what-to-wear-api.onrender.com/docs" target="_blank">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={fastapiProject} alt="fastapi-project" className="rounded-lg mb-4 h-30" />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">What to Wear</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">FastAPI, SqlModel, LLM integration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

            </div>
          </motion.section>
        </main>

        <footer className="mt-10 border-t border-gray-300 dark:border-gray-700 py-4 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 Danilo Lima</p>
        </footer>

      </div>
    </div>
  );
}
