import Image from 'next/image';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import {heroData} from '../../data/data';

const index: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen items-center justify-center overflow-hidden pb-64">
        <Image
          alt={`bg-image`}
          className="absolute z-0 h-full w-full object-cover lg:h-max"
          placeholder="blur"
          priority
          src={heroData.bg}
        />
        <div className="relative px-4">
          <div className="flex flex-col  px-5 pt-10 lg:flex-row">
            <div className=" flex-1 lg:mt-20">
              <div className="mt-44 w-56 rounded-xl lg:mt-10 lg:h-120 lg:w-120">
                <Image alt="home-image" className="w-full " src={heroData.homeImg} />
              </div>
            </div>
            <div className="flex-1 pl-0 pt-0 lg:pl-48 lg:pt-48">
              <h3 className="text-6xl font-bold leading-loose text-white">cheems</h3>
              <p className="leading-loose text-white">我的父母30岁</p>
              <p className="leading-loose text-white">充满精力</p>
              <p className="leading-loose text-white">岗位需要我</p>
              <p className="leading-loose text-white">发光发热</p>
              <p className="leading-loose text-white">下班还能再来个社交活动</p>
              <p className="leading-loose text-white">喂养1-2个人类幼崽</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-3rem] left-[60%] h-[6rem] w-[6rem] animate-round rounded-full bg-gray-300"></div>
      </div>
    </Section>
  );
});

index.displayName = 'Hero';
export default index;
