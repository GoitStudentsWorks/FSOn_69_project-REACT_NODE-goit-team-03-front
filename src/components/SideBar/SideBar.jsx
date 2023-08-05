import React from 'react';
import { Logo } from 'components/Logo';
import { BoardList } from 'components/BoardList';
import { HelpBanner } from 'components/HelpBanner';
import { LogOut } from 'components/LogOut';
import { SideBarWrapper } from './SideBar.styled';

export const SideBar = () => {
  return (
    <SideBarWrapper>
      <Logo />
      <BoardList />
      <HelpBanner />
      <LogOut />
    </SideBarWrapper>
  );
};
