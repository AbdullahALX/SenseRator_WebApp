import { Chip } from '@nextui-org/chip';
import { Button } from '@nextui-org/button';
import { motion } from 'framer-motion';

import { Input } from '@nextui-org/react';
import { Image } from '@nextui-org/react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import ThemeSwitcher from '../../components/ThemeSwitcher';

import logo from '../../assets/logo3.png';
import logoLight from '../../assets/logo2.png';
import useDarkMode from 'use-dark-mode'; // Assuming you're using a dark mode hook library

export default function HeroWithNavBar() {
  const menuItems = ['Map', 'Docs', 'Blog'];
  const darkMode = useDarkMode(false); // Use the dark mode hook

  return (
    <div className=" h-screen overflow-hidden">
      <Navbar isBlurred maxWidth="xl">
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarContent className="flex md:hidden pr-3" justify="center">
          <NavbarBrand>
            <Image width={170} src={darkMode.value ? logoLight : logo} />
          </NavbarBrand>
        </NavbarContent>
        <NavbarBrand className="hidden md:flex">
          <Image width={200} src={darkMode.value ? logo : logoLight} />
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="relative justify-center items-center h-full flex overflow-y-hidden">
        <div className="absolute left-0 right-0 bottom-0 top-0 z-0">
          <Image
            className="w-full h-full"
            src="https://nextui.org/gradients/docs-left.png"
            alt="gradient"
          />
        </div>
        <section className="max-w-screen-xl mx-auto px-4 py-28 gap-15 md:px-8 flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center space-y-7 max-w-4xl mx-auto text-center"
          >
            <Chip variant="shadow" color="default">
              Experience AI-Driven Urban Planning!
            </Chip>
            <h1 className="text-4xl font-light tracking-tighter mx-auto md:text-6xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text text-pretty">
              Transform Cities with{' '}
              <span className="bg-gradient-to-t from-light to-foreground text-transparent bg-clip-text border-none">
                SenseRator 2.0
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-foreground/80 text-balance">
              Semi-Real-Time Mapping and AI Analysis for Smarter, Safer, and
              More Livable Urban Spaces
            </p>

            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button color="primary" variant="solid" as={Link} href="doc">
                  {' '}
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full h-full absolute -top-32 flex justify-end items-center -z-10"
        >
          <div className="w-3/4 flex justify-center items-center">
            <div className="w-12 h-[600px] bg-light blur-[100px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg]"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
