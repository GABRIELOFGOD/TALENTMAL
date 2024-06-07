import React from "react";

// ============ WHY JOIN ICONS ============ //
import { IoBagOutline } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { TbBulb } from "react-icons/tb";

// ========= TALENT POOL ICONS ========== //
import { FiUser } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { CgFolderRemove } from "react-icons/cg";

// ========== EXPLOY TALENT ICONS =========== //
import { RiHandCoinLine, RiBox3Line, RiShieldLine } from "react-icons/ri";
import { TbCoins } from "react-icons/tb";
import { FiBriefcase } from "react-icons/fi";
import { FaCode } from "react-icons/fa";


// =============== TYPES =================== //
export type WhyJoinProp = {
  icon: React.ReactNode,
  title: string,
  body: string
}

export interface TesimonyProp {
  name: string;
  image: string;
  testimony: string;
  position?: string
}

export const whyJoin: WhyJoinProp[] = [
  {
    icon: <IoBagOutline />,
    title: 'High-end opportunities',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  },
  {
    icon: <IoMdTrendingUp />,
    title: 'Hiring Visibility',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  },
  {
    icon: <GoPeople />,
    title: 'Dedicated recruitment team',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  },
  {
    icon: <TbBulb />,
    title: 'Career growth oppourtunity',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  }
  
]

export const exployTalent: WhyJoinProp[] = [
  {
    icon: <RiHandCoinLine />,
    title: 'Marketing',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  },
  {
    icon: <RiShieldLine />,
    title: 'Support',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  },
  {
    icon: <TbCoins />,
    title: 'Finance',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  },
  {
    icon: <RiBox3Line />,
    title: 'Design',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  },
  {
    icon: <FiBriefcase />,
    title: 'Human Management',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  },
  {
    icon: <FaCode />,
    title: 'Development',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  }
  
]

export const talentPool: WhyJoinProp[] = [
  {
    icon: <FiUser />,
    title: 'Create a profile',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  },
  {
    icon: <FiFileText />,
    title: 'Complete vetting',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  },
  {
    icon: <CgFolderRemove />,
    title: 'Join our talent pool',
    body: 'We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. '
  }
]

export const studentTestimony: TesimonyProp[] = [
  {
    name: 'John Doe',
    position: 'CEO Design Agency',
    testimony: 'With our advisory services, we help employers figure out the type, quality & quantity of talent they need to achieve optimal productivity & success.',
    image: '/images/young.jpg'
  },
  {
    name: 'John Doe',
    position: 'CEO Design Agency',
    testimony: 'With our advisory services, we help employers figure out the type, quality & quantity of talent they need to achieve optimal productivity & success.',
    image: '/images/young.jpg'
  },
  {
    name: 'John Doe',
    position: 'CEO Design Agency',
    testimony: 'With our advisory services, we help employers figure out the type, quality & quantity of talent they need to achieve optimal productivity & success.',
    image: '/images/young.jpg'
  },
  {
    name: 'John Doe',
    position: 'CEO Design Agency',
    testimony: 'With our advisory services, we help employers figure out the type, quality & quantity of talent they need to achieve optimal productivity & success.',
    image: '/images/young.jpg'
  },
]