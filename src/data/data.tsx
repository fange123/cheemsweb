import bg from '../images/home_bg.png';
import homeImg from '../images/cheems.png';
import aboutImageSrc from '../images/about.png';
import buyImg from '../images/bro.png';
import buy1 from '../images/1.png';
import buy2 from '../images/2.gif';
import buy3 from '../images/3.png';
import wallet1 from '../images/2.jpeg';
import wallet2 from '../images/1.jpeg';
import wallet3 from '../images/3.gif';
import footPng from '../images/foot.png';
import onePng from '../images/tt.png';
import twoPng from '../images/tl.png';
import threePng from '../images/ma.png';
import fourPng from '../images/a.png';

import {About, Hero, HomepageMeta} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'cheems',
  description: '',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Buy: 'buy',
  Wallet: 'wallet',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  bg,
  homeImg,
  name: `bg`,
};

/**
 * About section
 */
export const aboutData: About = {
  aboutImageSrc,
  description: (
    <>
      <p>
        这世上还有很多爱你的人，比如你的家人、 <strong className="text-xl text-yellow-300">我</strong>、你的
      </p>
      <p>
        朋友、<strong className=" text-xl text-yellow-300">我</strong>、你的爸爸、妈妈、兄弟、姐妹还有
        <strong className="text-xl text-yellow-300">我</strong>
      </p>
      <p className="mt-10">我不希望再失去任何一个了</p>
      <p>加入我们，成为cheems家族的一员，打造最强表情包社区，继续发光发热</p>
      <p>合约地址：0x6fd58f5a2f3468e35feb098b5f59f04157002407</p>
    </>
  ),
};

// buy
export const buyData = {
  buyImg,
  imgList: [
    {img: buy1, title: 'ARB合约开源'},
    {img: buy2, title: '官方推特'},
    {img: buy3, title: '官方电报'},
  ],
  description: (
    <>
      <p className="text-sm leading-7 text-white lg:text-xl lg:leading-10">
        $cheems 将98%空投给ARB地址不做任何预留， 将2%
      </p>
      <p className="text-sm leading-7 text-white lg:text-xl lg:leading-10">添加初始流动性，无税，无机制，无预留</p>
      <p className="text-sm leading-7 text-white lg:text-xl lg:leading-10">不骗人，骗人是小狗</p>
    </>
  ),
};

//wallet
export const walletData = [
  {
    title: '支持什么钱包？',
    desc: ' 建议使用TP钱包、欧易web3钱包请一定要前往官网下载钱包否则会上当受骗不要在搜索引擎搜索下载',
    img: wallet1,
  },
  {
    title: '怎么样获得ARB ETH？',
    desc: '在抹茶、币安、OKX交易所购买ETH后提取到你的钱包地址即可，请一定要记住选择ARB链。',
    img: wallet2,
  },
  {
    title: '如何使用UNIV3swap？',
    desc: ' UNIswap官方网站：https://app.uniswap.org/#/swap输入$cheems合约地址,选择好币对，确认签名。',
    img: wallet3,
  },
];

//contact

export const contactData = {
  img: footPng,
  desc: (
    <>
      <p className="leading-7">$cheems在ARB链上</p>
      <p className="break-all leading-7">
        合约地址:
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          0xDfcD9117eBcdE0D658eEdf0898419638F56B6980
        </span>
      </p>
      <p className="leading-7">代币总量:1000000000000</p>
      <p className="leading-7">代币机制：没有什么扯淡的机制，只有无机制才是最吊的</p>
      <p className="leading-7">
        怎么样分配的？98%空投给ARB地址不做任何预留，无私募，100%全流通，剩余的2%将用来添加流动性
      </p>
    </>
  ),
  iconList: [
    {
      img: onePng,
      href: '',
    },
    {
      img: twoPng,
      href: '',
    },
    {
      img: threePng,
      href: '',
    },
    {
      img: fourPng,
      href: '',
    },
  ],
};
