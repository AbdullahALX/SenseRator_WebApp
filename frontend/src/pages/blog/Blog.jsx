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
import { Container, Route, Router, Rows } from 'lucide-react';

import FAQAccordion from "../../components/faqAccordion"

export default function HeroWithNavBar() {
    const menuItems = ['Map', 'Blog'];
    const darkMode = useDarkMode(false); // Use the dark mode hook
    //TODO: Find a way to check if we use darkmode depending on earlier switches?
    return (
        <div class="h-screen overflow-scroll">
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
                <NavbarContent className="hidden md:flex gap-10 ">
                    <NavbarItem>
                        <Button as={Link} href="/" variant="light">
                            Home
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} href="map" variant="light">
                            Map
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} variant="light">
                            Docs
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <ThemeSwitcher />
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu className="bg-black justify-center items-center gap-10">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link className="w-full " href="#" size="lg">
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            <div class="container mx-auto">
                <div class="grid grid-cols-3 gap-8 justify-center">
                    <div class="row">
                        <div class="border rounded-md text-center p-10" id="Directory">
                            <h2 class="bg-gradient-to-br from-foreground-800 to-foreground-500 bg-clip-text pt-4 text-4xl font-semibold tracking-tight text-transparent dark:to-foreground-200 lg:inline-block">Directory</h2>
                            <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                            <p> Come back later! </p>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <FAQAccordion/>
                    </div>
                </div>
            </div>
        </div>
    );
}
