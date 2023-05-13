import Image from 'next/image';
import {FC, memo} from 'react';
import {buyData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Buy: FC = memo(() => {
  const {buyImg, description, imgList} = buyData;

  return (
    <Section className="bg-buy-bg" sectionId={SectionId.Buy}>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="mt-10 flex flex-1 flex-col lg:mt-20">
          <div>{description}</div>
          <button className=" buy_btn mt-5 cursor-pointer rounded-full bg-gradient-to-r from-green-400 to-blue-500 py-1 text-xl text-white lg:mt-10">
            buy
          </button>
        </div>
        <div className="flex w-full flex-1 justify-center">
          <Image alt="about-me-image" className="w-48 lg:ml-40 lg:w-96" src={buyImg} />
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center lg:mt-20 lg:flex-row lg:justify-between">
        {imgList?.map((item, i) => (
          <div
            className="w-30 h-30 group mb-5 flex flex-col items-center justify-center rounded-xl bg-[#26282c] py-5 transition duration-500 hover:bg-[#707478] lg:h-80 lg:w-80"
            key={i}>
            <Image
              alt="image"
              className="w-52 scale-100 transform rounded-xl transition duration-500 group-hover:scale-110"
              src={item.img}
            />
            <h3 className="mt-5 font-bold text-white">{item.title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
});

Buy.displayName = 'Buy';
export default Buy;
