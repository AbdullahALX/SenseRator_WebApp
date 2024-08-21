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
import { Button } from '@nextui-org/button';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import {
  AppWindow,
  ChevronDown,
  Contact2,
  TimerReset,
  User2,
  Webhook,
} from 'lucide-react';
import logo from '../../assets/logo3.png';
import { Image } from '@nextui-org/react';

export default function NavBar() {
  const menuItems = ['map', 'docs', 'blog'];

  return (
    <Navbar isBlurred maxWidth="xl">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            width={20}
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <span className="font-light tracking-tighter text-inherit text-lg">
            SenseRator 2.0
          </span>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8 ">
        <NavbarBrand>
          <Image width={250} src={logo} />
        </NavbarBrand>
        <NavbarItem>
          <Button as={Link} variant="light">
            map
          </Button>
        </NavbarItem>
        <NavbarItem>
          <NavbarItem>
            <Button as={Link} variant="light">
              docs
            </Button>
          </NavbarItem>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} variant="light">
            blog
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg" color="foreground">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
}
