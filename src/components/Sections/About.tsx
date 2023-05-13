import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useEffect, useState} from 'react';
import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {aboutImageSrc, description} = aboutData;
  const [flag, setFlag] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const clientWidth = document.documentElement.clientWidth;
    if (clientWidth > 900) {
      if (scrollTop > 400) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    } else {
      if (scrollTop > 200) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  console.log('flag ', flag);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!aboutImageSrc})}>
        {!!aboutImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image
                alt="about-me-image"
                className={`h-full w-full -translate-x-36 transform object-cover transition duration-500 ease-in-out ${
                  flag ? 'translate-x-0' : ''
                }`}
                src={aboutImageSrc}
              />
            </div>
          </div>
        )}
        <div
          className={classNames('overflow-hidden', {
            'md:col-span-3': !!aboutImageSrc,
          })}>
          <div
            className={classNames('inline-block  transform transition duration-500 ease-in-out', {
              'translate-x-0': flag,
              'translate-x-220': !flag,
            })}>
            <h2 className="mt-5 text-2xl font-bold text-white lg:mb-5 lg:mt-0">关于我们</h2>
            <div className="prose prose-sm text-gray-300 sm:prose-base">{description}</div>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
