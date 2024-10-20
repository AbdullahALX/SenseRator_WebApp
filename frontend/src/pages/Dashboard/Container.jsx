import React from 'react';
import {
  Avatar,
  Button,
  ScrollShadow,
  Listbox,
  ListboxItem,
  ListboxSection,
  Spacer,
  useDisclosure,
  cn,
} from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { Link, Outlet } from 'react-router-dom';

import SidebarDrawer from './sidebar-drawer';
import ThemeSwitcher from '../../components/ThemeSwitcher';

export default function Container({
  children,
  header,
  title,
  subTitle,
  classNames = {},
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const content = (
    <div className="relative flex h-full w-72 flex-1 flex-col p-6">
      <div className="flex items-center gap-2 px-2">
        <span className="text-base font-bold uppercase leading-6 text-foreground">
          SenseRator 2.0
        </span>
      </div>

      <Spacer y={8} />

      <ScrollShadow className="-mr-6 h-full max-h-full pr-6">
        <Listbox aria-label="Recent chats" variant="flat">
          <ListboxSection
            classNames={{
              base: 'py-0',
              heading: 'py-0 pl-[10px] text-small text-default-400',
            }}
            title="Directory"
          >
            <ListboxItem
              key="map"
              className="h-[44px]  text-default-500 relative  "
              href="/doc/map"
            >
              Map
              {/* <Link
                className="w-full  h-full absolute top-0 bottom-0 my-auto"
                to="/doc/map "
              >
                Map
              </Link> */}
            </ListboxItem>
            <ListboxItem
              key="overview"
              className="group h-[44px] px-[12px] py-[10px] text-default-500"
              href="/doc/overview"
            >
              SenseRator 2.0 Overview
            </ListboxItem>

            <ListboxItem
              key="team"
              className="h-[44px] px-[12px] py-[10px] text-default-500"
              href="/doc/team"
            >
              SenseRator 2.0 Team
            </ListboxItem>
            <ListboxItem
              key="urbanity-lab"
              className="h-[44px] px-[12px] py-[10px] text-default-500"
              href="/doc/urbanity-lab"
            >
              URBANity Lab
            </ListboxItem>
            <ListboxItem
              key="psfi"
              className="h-[44px] px-[12px] py-[10px] text-default-500"
              href='/doc/psfi'
            >
              Pedestrian Safety Flow Index
            </ListboxItem>
            <ListboxItem
              key="psfi-calculation"
              className="h-[44px] px-[12px] py-[10px] text-default-500"
              href="/doc/psf-calculation"
            >
              PFS Calculation
            </ListboxItem>
            <ListboxItem
              key="video-compression"
              className="h-[44px] px-[12px] py-[10px] text-default-500"
              href="/doc/video-compression"
            >
              Video Compression
            </ListboxItem>
          </ListboxSection>
        </Listbox>
      </ScrollShadow>

      <Spacer y={8} />

      <div className="mt-auto flex flex-col">
        <Button
          as={Link}
          to="/"
          fullWidth
          className="justify-start text-default-600"
          startContent={
            <Icon
              className="text-default-600"
              icon="solar:info-circle-line-duotone"
              width={24}
            />
          }
          variant="light"
        >
          Home
        </Button>
        <Button
          fullWidth
          className="justify-start text-default-600"
          startContent={
            <Icon
              className="text-default-600"
              icon="solar:info-circle-line-duotone"
              width={24}
            />
          }
          variant="light"
        >
          Help & Feedback
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-dvh w-full py-4">
      <SidebarDrawer
        className="h-full flex-none rounded-[14px] bg-default-50"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        {content}
      </SidebarDrawer>
      <div className="flex w-full flex-col px-4 sm:max-w-[calc(100%_-_288px)]">
        <header
          className={cn(
            'flex h-16 min-h-16 items-center justify-end gap-2 rounded-none rounded-t-medium border-small border-divider px-4 py-3',
            classNames?.['header']
          )}
        >
          <ThemeSwitcher />
        </header>
        <main className="flex h-full overflow-hidden">
          <div className="flex h-full w-full flex-col gap-4 rounded-none rounded-b-medium border-0 border-b border-l border-r border-divider overflow-hidden">
            <Outlet /> {/* Renders the dynamic components */}
          </div>
        </main>
      </div>
    </div>
  );
}
