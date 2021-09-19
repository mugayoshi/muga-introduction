import {VFC} from "react";
import { Terminal } from "../components/Terminal";
import { TheFooter } from "../components/global/TheFooter";
import { TheHeader } from "../components/global/TheHeader";
import imgPath from '../assets/img/big-sur.jpeg';

export const DefaultLayout: VFC = () => {
  return (
    <div className='min-h-screen bg-local min-w-full' style={{backgroundImage: `url(${imgPath})`}}>
      <TheHeader />
      <Terminal/>
      <TheFooter />
    </div>
  );
};
