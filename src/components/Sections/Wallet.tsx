import Image from 'next/image';
import {FC, memo} from 'react';
import {walletData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Wallet: FC = memo(() => {
  return (
    <Section className="bg-[#1e222d]" sectionId={SectionId.Wallet}>
      <h2 className="mb-8 text-center text-2xl font-bold text-white">如何购买</h2>
      <div className="flex flex-col">
        {walletData?.map((item, i) => (
          <div
            key={i}
            className="mb-8 flex flex-col rounded-2xl rounded-tr-none border-2 border-solid border-white p-3 lg:flex-row-reverse lg:items-center lg:justify-between">
            <Image alt="image" className="w-52" src={item.img} />
            <div className="mt-5 lg:pl-20">
              <h3 className="text-2xl font-bold leading-10 text-white ">{item.title}</h3>
              <p className="leading-8 text-white lg:w-7/12 ">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
});

Wallet.displayName = 'Wallet';
export default Wallet;
