import {FC, memo} from 'react';
import Image from 'next/image';

import {contactData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Contact: FC = memo(() => {
  return (
    <Section className="bg-white" sectionId={SectionId.Contact}>
      <div>
        <h2 className="z-20 text-center text-2xl font-bold text-[#00001e]">代币经济学</h2>
        <div className="z-10 lg:flex lg:flex-row lg:items-center lg:justify-between">
          <Image
            alt="image"
            className="z-0 w-full transition duration-700 ease-linear hover:rotate-360 lg:flex-2"
            src={contactData.img}
          />
          <div className="z-10 lg:flex-3">
            {contactData.desc}
            <div className="mt-20 flex justify-around  lg:mt-10 lg:justify-start">
              {contactData.iconList?.map((item, i) => (
                <a href={item.href} key={i}>
                  <Image alt="image" className="w-10 lg:mr-5" src={item.img} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
