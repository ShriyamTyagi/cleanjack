import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Beheer",
    path: "/about-us",
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#6fd5ef" }} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ color: "#6fd5ef" }} />,

    subNav: [
      {
        title: "Beheer Locaties",
        path: "/about-us/aim",
      },
      {
        title: "Beheer Medwerkers",
        path: "/about-us/vision",
      },
    ],
  },
];
