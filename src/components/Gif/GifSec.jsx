import React, { useEffect, useState, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { VscEyeClosed } from "react-icons/vsc";
import { FaHeart, FaRegHeart, FaInfoCircle } from "react-icons/fa";
import { ImEmbed2 } from "react-icons/im";
import { FaLink } from "react-icons/fa6";

import GifCard from "./GifCard";
import "../../styles/gif/GifSe.css";

const items = [
  {
    id: 1,
    url: "https://gifcandy.net/wp-content/uploads/2020/04/Janice-Griffith-bound-squirt-and-gape.gif",
    title: "Girl squirt squirting sex piss porn pussy 4k hd  Cat",
    category: "18+",
    type: "gif",
  },
  {
    id: 2,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-100.gif",
    title: "Girl squirt squirting sex piss porn pussy 4k hd ",
    category: "18+",
    type: "gif",
  },
  {
    id: 3,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-98.gif",
    title: "Funny CatGirl squirt squirting sex piss porn",
    category: "18+",
    type: "gif",
  },
  {
    id: 4,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-96.gif",
    title: "Girl squirt squirting sex piss porn",
    category: "18+",
    type: "gif",
  },
  {
    id: 5,
    url: "https://i.gifer.com/o6m.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 6,
    url: " https://i.gifer.com/ig4.gif",
    title:
      "unicorn cute happy glitter unikitty kittycorn meetaiko joy delirious cat jump aiko Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 7,
    url: "https://i.gifer.com/nRq.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 8,
    url: "https://i.gifer.com/6ki.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 9,
    url: "https://i.gifer.com/JSb.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 10,
    url: "https://i.gifer.com/1dTC.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 11,
    url: "https://i.gifer.com/2P2U.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 12,
    url: "https://i.gifer.com/4Me6.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 13,
    url: "https://i.gifer.com/L2DA.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 14,
    url: "https://i.gifer.com/V06s.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 15,
    url: "https://i.gifer.com/7RLt.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 16,
    url: "https://i.gifer.com/IvAw.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 17,
    url: "https://i.gifer.com/BFxa.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 18,
    url: "https://i.gifer.com/N5o5.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 19,
    url: "https://i.gifer.com/Laxf.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 20,
    url: "https://i.gifer.com/QglV.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 21,
    url: "https://i.gifer.com/9nhn.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 22,
    url: "https://i.gifer.com/60Ks.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 23,
    url: "https://i.gifer.com/XOsX.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 24,
    url: "https://i.gifer.com/6fQC.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 25,
    url: "https://i.gifer.com/NusJ.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 26,
    url: "https://i.gifer.com/NbxD.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 27,
    url: "https://i.gifer.com/3dof.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 28,
    url: "https://i.gifer.com/fxVE.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 29,
    url: "https://i.gifer.com/FM7o.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 30,
    url: "https://i.gifer.com/3UsO.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 31,
    url: "https://i.gifer.com/J59.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 32,
    url: "https://i.gifer.com/J4o.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 33,
    url: "https://i.gifer.com/LLuC.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 34,
    url: "https://i.gifer.com/4SHX.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 35,
    url: "https://i.gifer.com/Ie7K.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 36,
    url: "https://i.gifer.com/D5ul.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 37,
    url: "https://i.gifer.com/9grr.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 38,
    url: "https://i.gifer.com/uF.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 39,
    url: "https://i.gifer.com/Scpn.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 40,
    url: "https://i.gifer.com/Szwz.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 41,
    url: "https://i.gifer.com/9Szg.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 42,
    url: "https://i.gifer.com/1P4x.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 43,
    url: "https://i.gifer.com/Zbtq.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 44,
    url: "https://i.gifer.com/RRhK.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 45,
    url: "https://i.gifer.com/fxk4.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 46,
    url: "https://i.gifer.com/7o7K.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 47,
    url: "https://i.gifer.com/VdgG.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 48,
    url: "https://i.gifer.com/3dof.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 49,
    url: "https://i.gifer.com/6bU.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 50,
    url: "https://i.gifer.com/Kog.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 51,
    url: "https://i.gifer.com/Dr95.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 52,
    url: "https://i.gifer.com/Un8o.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 53,
    url: "https://i.gifer.com/NC8m.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 54,
    url: "https://i.gifer.com/3VUn.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 55,
    url: "https://i.gifer.com/6bU.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 56,
    url: "https://i.gifer.com/GEkw.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 57,
    url: "https://i.gifer.com/Q0Jz.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 58,
    url: "https://i.gifer.com/8BP.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 59,
    url: "https://i.gifer.com/7StL.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 60,
    url: "https://i.gifer.com/6bS.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 61,
    url: "https://i.gifer.com/7cbe.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 62,
    url: "https://i.gifer.com/OE8W.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 63,
    url: "https://i.gifer.com/5sHb.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 64,
    url: "https://i.gifer.com/5LXM.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 65,
    url: "https://i.gifer.com/8B6Z.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 66,
    url: "https://i.gifer.com/WkgZ.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 67,
    url: "https://i.gifer.com/1Ppt.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 68,
    url: "https://i.gifer.com/X72e.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 69,
    url: "https://i.gifer.com/37lt.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 70,
    url: "https://i.gifer.com/AjdI.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 71,
    url: "https://i.gifer.com/7RQq.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 72,
    url: "https://i.gifer.com/6Z83.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 73,
    url: "https://i.gifer.com/AjdI.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 74,
    url: "https://i.gifer.com/71jz.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 75,
    url: "https://i.gifer.com/xK.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 76,
    url: "https://i.gifer.com/6vw5.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 77,
    url: "https://i.gifer.com/82Un.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 78,
    url: "https://i.gifer.com/1Q1c.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 79,
    url: "https://i.gifer.com/fxac.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 80,
    url: "https://i.gifer.com/YQDj.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 81,
    url: "https://i.gifer.com/3W15.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 82,
    url: "https://i.gifer.com/2Vo1.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 83,
    url: "https://i.gifer.com/Q72U.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 84,
    url: "https://i.gifer.com/1UJr.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 85,
    url: "https://i.gifer.com/2zFo.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 86,
    url: "https://i.gifer.com/1FX8.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 87,
    url: "https://i.gifer.com/3F3F.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 88,
    url: "https://i.gifer.com/Paz.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 89,
    url: "https://i.gifer.com/4Vc.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 90,
    url: "https://i.gifer.com/aVH.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 91,
    url: "https://i.gifer.com/5Ik9.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 92,
    url: "https://i.gifer.com/ZjtR.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 93,
    url: "https://i.gifer.com/1FLH.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 94,
    url: "https://i.gifer.com/XDZT.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 95,
    url: "https://i.gifer.com/8LG2.gif",
    title: "Trending 4k Game Cute Danger Hd BGMI Pubg",
    category: "Game",
    type: "gif",
  },
  {
    id: 96,
    url: "https://i.gifer.com/7Jii.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 97,
    url: "https://i.gifer.com/g1OF.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 98,
    url: "https://i.gifer.com/7Jj0.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 99,
    url: "https://i.gifer.com/14Vb.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 100,
    url: "https://i.gifer.com/2zGr.gif",
    title: "Trending 4k Game Cute Danger Hd",
    category: "Game",
    type: "gif",
  },
  {
    id: 101,
    url: "https://i.gifer.com/Fpa.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd ",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 102,
    url: "https://i.gifer.com/GmUB.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 103,
    url: "https://i.gifer.com/ZkjI.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 104,
    url: "https://i.gifer.com/7V0.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 105,
    url: "https://i.gifer.com/1dTC.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 106,
    url: "https://i.gifer.com/W1A.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 107,
    url: "https://i.gifer.com/Qw4H.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 108,
    url: "https://i.gifer.com/9fjQ.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 109,
    url: "https://i.gifer.com/8Tvf.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 110,
    url: "https://i.gifer.com/8Nwv.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 111,
    url: "https://i.gifer.com/cp.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 112,
    url: "https://i.gifer.com/FyW3.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 113,
    url: "https://i.gifer.com/6mh.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 114,
    url: "https://i.gifer.com/DDA6.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 115,
    url: "https://i.gifer.com/2iiE.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 116,
    url: "https://i.gifer.com/Ym15.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 117,
    url: "https://i.gifer.com/4s2K.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 118,
    url: "https://i.gifer.com/qUk.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 119,
    url: "https://i.gifer.com/PknB.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 120,
    url: "https://i.gifer.com/1KrI.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 121,
    url: "https://i.gifer.com/1tgr.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 122,
    url: "https://i.gifer.com/KAZE.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 123,
    url: "https://i.gifer.com/PUMg.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 124,
    url: "https://i.gifer.com/QcfT.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 125,
    url: "https://i.gifer.com/ARQA.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 126,
    url: "https://i.gifer.com/O7yC.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 127,
    url: "https://i.gifer.com/4bRW.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 128,
    url: "https://i.gifer.com/CDo.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 129,
    url: "https://i.gifer.com/7AhZ.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 130,
    url: "https://i.gifer.com/8ZUg.gif",
    title: "Trending Hot girl Cute girl anime girl beautiful hot 4k hd",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 131,
    url: "https://gifcandy.net/wp-content/uploads/2021/07/gifcandy-6.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy ",
    category: "18+",
    type: "gif",
  },
  {
    id: 132,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-milf-97.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 133,
    url: "https://gifcandy.net/wp-content/uploads/2021/04/gifcandy-12.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 134,
    url: "https://gifcandy.net/wp-content/uploads/2020/05/gorgeous-riding.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 135,
    url: "https://gifcandy.net/wp-content/uploads/2024/06/gifcandy-5.webp",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 136,
    url: "https://gifcandy.net/wp-content/uploads/2024/05/gifcandy-1.webp",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 137,
    url: "https://gifcandy.net/wp-content/uploads/2024/06/gifcandy-3.webp",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 138,
    url: "https://gifcandy.net/wp-content/uploads/2024/06/gifcandy-2.webp",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 139,
    url: "https://gifcandy.net/wp-content/uploads/2024/06/gifcandy.webp",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 140,
    url: "https://gifcandy.net/wp-content/uploads/2024/05/gifcandy-4.webp",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 141,
    url: "https://gifcandy.net/wp-content/uploads/2020/02/busty-brunette-on-extreme-squirt-orgasm.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 142,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-101.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 143,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-95.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 144,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-92.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 145,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-91.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 146,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-90.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 147,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-89.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 148,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-88.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 149,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-87.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 150,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-85.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 151,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-82.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 152,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-81.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 153,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-79.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 154,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-77.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 155,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-76.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 156,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-75.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 157,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-72.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 158,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-71.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 159,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-70.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 160,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-69.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 161,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-68.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 162,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-67.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 163,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-66.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 164,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-65.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 165,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-64.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 166,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-63.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 167,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-61.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 168,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-60.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 169,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-59.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 170,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-58.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 171,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-57.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 172,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-56.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 173,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-55.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 174,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-54.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 175,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-53.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 176,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-52.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 177,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-51.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 178,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-49.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 179,
    url: "https://i.redd.it/skjdjcan5lwb1.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 180,
    url: "https://cl.phncdn.com/gif/2483451.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 181,
    url: "https://myteenwebcam.com/fapp/gifs/2594fe420ae9bbeae60c1dc8674143d2.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 182,
    url: "https://64.media.tumblr.com/8cb7b9187446ee27dd03a9c57da59358/tumblr_o12e0eNwqe1v59icgo1_500.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 183,
    url: "http://pictures.hentai-foundry.com/m/monkeybeard/137525.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 184,
    url: "https://64.media.tumblr.com/f58fed6dfb2b2802749fc6a73da506db/tumblr_pfhikhbHtE1xgiqh3o4_500.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 185,
    url: "https://xgifer.com/content/2022/04/squirt_001.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 186,
    url: "https://myteenwebcam.com/fapp/gifs/75d24819f66fe7415e52e0a0fa6f6ee4.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 187,
    url: "https://i.redd.it/a4gfhvf1j9gb1.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 188,
    url: "https://myteenwebcam.com/fapp/gifs/75d24819f66fe7415e52e0a0fa6f6ee4.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 189,
    url: "https://i.redd.it/6zk1v5ww4jaa1.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 190,
    url: "https://myteenwebcam.com/fapp/gifs/7aad1cca59c0ead3b838685a7970b15c.gif",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 191,
    url: "https://tbib.org//images/6770/b78ef122ab410d022875a5aa9b1966c104d7cb7f.gif?7522804",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 192,
    url: "https://tbib.org//images/1418/e09e7f9e27cb769b2441f627613dd7e7e14ccd14.gif?1669379",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 193,
    url: "https://tbib.org//images/2042/071ac06eefac7be6834d73c361cc412445bad7c0.gif?2555136",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 194,
    url: "https://tbib.org//images/1954/9ea043acae9714f9efd4e1a5c0150da424693b78.gif?7275387",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 195,
    url: "https://tbib.org//images/1948/af42a25197a3d6aa5ff151a0cc4915e58c70942b.gif?7275369",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 196,
    url: "https://tbib.org/thumbnails/2042/thumbnail_d23d1192b90b1ab5c0439ea86b1f73341134771f.jpg?2555190",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 197,
    url: "https://tbib.org//images/4513/be36d3059d29ecfd4424eab4b20cae7f156e5dbb.gif?5027674",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 198,
    url: "https://tbib.org/thumbnails/2042/thumbnail_ec18b6cb04930ba017c7cbf4f9d5fc8b80959d91.jpg?2555149",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 199,
    url: "https://tbib.org//images/2042/6a36e7bd17faeb5398272827acbfea964536d0da.gif?2555143",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 200,
    url: "https://tbib.org/thumbnails/2048/thumbnail_c05e01a0d58a663cde933fb3b1fa812792a96747.jpg?2561283",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 201,
    url: "https://tbib.org//images/5819/bb9dadd14ec8fa15fd98b494ca71476dc640e7d9.gif?6333686",
    title:
      "Trending Hot girl Cute girl anime girl beautiful 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 202,
    url: "https://tbib.org//images/5558/3d97e4249ef4ff6bb0e1652c193ee72dcfd942c1.gif?6072561",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 203,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 204,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 205,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 206,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 207,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 208,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 209,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 210,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 211,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 212,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 213,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 214,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 215,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 216,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 217,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 218,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 219,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 220,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 221,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 222,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 223,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 224,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 225,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 226,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 227,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 228,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 229,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 230,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 231,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 232,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 233,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 234,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 235,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 236,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 237,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 238,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 239,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 240,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 241,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 242,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 243,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 244,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 245,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 246,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 247,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 248,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 249,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 250,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 251,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 252,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 253,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 254,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 255,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 256,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 257,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 258,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 259,
    url: "https://tbib.org//images/6853/283b006dc47ccf5286658572839daaf9cbe2b14c.gif?7605425",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 260,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 261,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 262,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 263,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 264,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 265,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 266,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 267,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 268,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 269,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 270,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 271,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 272,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 273,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 274,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 275,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 276,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 277,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 278,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 279,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 280,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 281,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 282,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 283,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 284,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 285,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 286,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 287,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 288,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 289,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 290,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 291,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 292,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 293,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 294,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 295,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 296,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 297,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 298,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 299,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 300,
    url: "",
    title:
      "Trending Hot girl Cute girl anime girl beautiful hot 4k hd porn sex squirt piss girl pussy",
    category: "18+",
    type: "gif",
  },
  {
    id: 301,
    url: "https://i.gifer.com/6JrZ.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 302,
    url: "https://i.gifer.com/6Fx1.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 303,
    url: "https://i.gifer.com/BYy4.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 304,
    url: "https://i.gifer.com/9CtA.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 305,
    url: "https://i.gifer.com/6H3K.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 306,
    url: "https://i.gifer.com/XZdf.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 307,
    url: "https://i.gifer.com/4RDU.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 308,
    url: "https://i.gifer.com/YWY2.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 309,
    url: "https://i.gifer.com/CcdP.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 310,
    url: "https://i.gifer.com/V5w.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 311,
    url: "https://i.gifer.com/47Hr.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 312,
    url: "https://i.gifer.com/A3d7.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 313,
    url: "https://i.gifer.com/3YI.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 314,
    url: "https://i.gifer.com/6Kmn.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 315,
    url: "https://i.gifer.com/3YI.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 316,
    url: "https://i.gifer.com/3a35.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 317,
    url: "https://i.gifer.com/GCQt.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 318,
    url: "https://i.gifer.com/PVnW.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 319,
    url: "https://i.gifer.com/4H.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
  {
    id: 320,
    url: "https://i.gifer.com/GHFp.gif",
    title: "Trending ghost horror terror scary disturbing outros",
    category: "Ghost",
    type: "gif",
  },
];

const categories = [
  "All",
  "Trending",
  "Car",
  "Game",
  "18+",
  "Cute Girl",
  "Ghost",
  "Funny",
  "Villain",
  "Angry",
  "Laugh",
  "Sad",
  "Fight",
];

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const GifSec = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showWarning, setShowWarning] = useState(false);
  const [zoomedItem, setZoomedItem] = useState(null);
  const [shuffledItems, setShuffledItems] = useState([]);
  const [blurEnabled, setBlurEnabled] = useState(true);
  const [showEmbedModal, setShowEmbedModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [visibleItems, setVisibleItems] = useState(10);
  const [favorites, setFavorites] = useState([]);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const containerRef = useRef(null);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        loadMoreItems();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCategorySelect = (category) => {
    if (category === "18+") {
      setShowWarning(true);
    } else {
      setSelectedCategory(category);
      localStorage.setItem("selectedCategory", category);
    }
  };

  const handleItemClick = (item) => {
    setZoomedItem(item);
  };

  const toggleBlur = () => {
    const newBlurState = !blurEnabled;
    setBlurEnabled(newBlurState);
    localStorage.setItem("blurEnabled", JSON.stringify(newBlurState));
  };

  useEffect(() => {
    setShuffledItems(shuffleArray(items));
    const savedBlurState = JSON.parse(localStorage.getItem("blurEnabled"));
    if (savedBlurState !== null) {
      setBlurEnabled(savedBlurState);
    }

    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      setSelectedCategory(savedCategory);
    }

    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const filteredItems = shuffledItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      selectedCategory === item.category ||
      (selectedCategory === "18+" && item.category === "18+");

    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
  const copyEmbedCode = (embedCode) => {
    navigator.clipboard.writeText(embedCode).then(
      () => {
        setShowCopyMessage(true);
        setTimeout(() => {
          setShowCopyMessage(false);
        }, 2000); // Show the message for 2 seconds
      },
      (err) => {
        console.error("Failed to copy embed code: ", err);
      }
    );
  };

  const handleEmbedButtonClick = (item) => {
    setZoomedItem(item);
    setShowEmbedModal(true);
  };
  const handleInfoClick = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const isFavorite = (item) => {
    return favorites.some((fav) => fav.id === item.id);
  };

  const toggleFavorite = (item) => {
    let updatedFavorites;
    if (isFavorite(item)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
    } else {
      updatedFavorites = [...favorites, item];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url).then(
      () => {
        setShowCopyMessage(true);
        setTimeout(() => {
          setShowCopyMessage(false);
        }, 2000);
      },
      (err) => {
        console.error("Failed to copy URL: ", err);
      }
    );
  };

  return (
    <div className="container-gif" ref={containerRef}>
      <div className="search-container">
        <FaInfoCircle
          className="infoIcon"
          title="Click the left side button to select category"
          onMouseEnter={handleInfoClick}
          onClick={handleInfoClick}
        />
        <input
          type="text"
          placeholder="Search items..."
          className="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="toggleBlurButton">
          <div className="button-cover-blur" onClick={toggleBlur}>
            <input
              type="checkbox"
              className="checkbox"
              checked={blurEnabled}
              onChange={toggleBlur}
            />
            <div className="button-toggle"></div>
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="notification">
          Click the left side button to select category
        </div>
      )}

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button
          className={`sidebarToggle ${isSidebarOpen ? "open" : "closed"}`}
          onClick={toggleSidebar}
        >
          <i
            className={`fas ${
              isSidebarOpen ? "fa-chevron-left" : "fa-chevron-right"
            }`}
          ></i>
        </button>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Select Category</h3>
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className={`sidebarMenuItem ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      <div className="gallery">
        {filteredItems.slice(0, visibleItems).map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item)}>
            <GifCard gif={item} blurEnabled={blurEnabled} />
          </div>
        ))}
      </div>

      {zoomedItem && (
        <div
          className={`zoomOverlay ${
            blurEnabled && zoomedItem.category === "18+" ? "blurred" : ""
          }`}
          onClick={() => setZoomedItem(null)}
        >
          <img
            src={zoomedItem.url}
            alt={zoomedItem.title}
            className={`zoomedImage ${
              blurEnabled && zoomedItem.category === "18+" ? "blurred" : ""
            }`}
          />
          {blurEnabled && zoomedItem.category === "18+" && (
            <div className="iconOverlay">
              <VscEyeClosed className="eyeIcon" />
            </div>
          )}
          <div className="fav-copy">
            <button
              className="favoriteButton"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(zoomedItem);
              }}
            >
              {isFavorite(zoomedItem) ? (
                <FaHeart className="heartIcon favorite" />
              ) : (
                <FaRegHeart className="heartIcon" />
              )}
            </button>
            <button
              className="copyUrlButton"
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard(zoomedItem.url);
              }}
            >
              <FaLink className="c-url" />
            </button>
            <button
              className="embedButton"
              onClick={(e) => {
                e.stopPropagation();
                handleEmbedButtonClick(zoomedItem);
              }}
            >
              <ImEmbed2 className="embedIcon" />
            </button>
          </div>
          {showCopyMessage && (
            <div className="copyMessage">URL copied to clipboard!</div>
          )}
        </div>
      )}
      {showEmbedModal && (
        <div className="embedModalOverlay">
          <div className="embedModal">
            <h2>Embed GIF</h2>
            <p>
              The player is loaded faster than regular GIFs and works in all
              browsers and devices!
            </p>
            <div className="embedCodeContainer">
              <span>Fixed size</span>
              <div className="embedCodeBlock">
                <input
                  type="text"
                  readOnly
                  value={`<iframe src="${zoomedItem.url}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`}
                />
                <button
                  onClick={() =>
                    copyEmbedCode(
                      `<iframe src="${zoomedItem.url}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`
                    )
                  }
                >
                  Copy
                </button>
              </div>
              <span>Responsive</span>
              <div className="embedCodeBlock">
                <input
                  type="text"
                  readOnly
                  value={`<div style="padding-top:56.25%;position:relative;"><iframe src="${zoomedItem.url}" style="position:absolute;width:100%;height:100%;" frameborder="0" allowfullscreen></iframe></div>`}
                />
                <button
                  onClick={() =>
                    copyEmbedCode(
                      `<div style="padding-top:56.25%;position:relative;"><iframe src="${zoomedItem.url}" style="position:absolute;width:100%;height:100%;" frameborder="0" allowfullscreen></iframe></div>`
                    )
                  }
                >
                  Copy
                </button>
              </div>
            </div>
            <button
              className="closeModalButton"
              onClick={() => setShowEmbedModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showWarning && (
        <div className="warningOverlay">
          <div className="warningBox">
            <h2>Warning</h2>
            <p>You must be 18+ to view this content.</p>
            <button
              className="warningButton"
              onClick={() => {
                setShowWarning(false);
                setSelectedCategory("18+");
                localStorage.setItem("selectedCategory", "18+");
              }}
            >
              I am 18+
            </button>
            <button
              className="warningButton"
              onClick={() => setShowWarning(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GifSec;
