import { CiCircleCheck  }  from "react-icons/ci";
import { ReactElement } from "react";
import { RiContactsLine } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";

interface TodoDataEntry {
  id: number;
  icon1: ReactElement;
  icon2: ReactElement;
  text: string;
  date: string;

}

interface DoingDataEntry {
  id: number;
  icon1: ReactElement;
  icon2: ReactElement;
  text: string;
  button1text: string;
  button2text: string;
  date: string;
}

export const todoData: TodoDataEntry[] = [
  { id: 2, icon1: <CiCircleCheck />, icon2: <RiContactsLine />, text: "Fix responsiveness", date:"1-20 Sept" },
  { id: 3, icon1: <GiSandsOfTime /> ,icon2: <RiContactsLine />, text: "Client call", date:"12-24 Sept" },
  { id: 4, icon1: <CiCircleCheck /> ,icon2: <RiContactsLine />, text: "Prepare report", date:"11-14 Sept" },
];

export const DoingData: DoingDataEntry[] = [
  {
    id: 1,
    icon1: <CiCircleCheck />,
    icon2: <RiContactsLine />,
    text: "Check Optimization ",
    button1text: "High",
    button2text: "Off track",
    date: "16 Sept - 12 Oct",
  },
];
