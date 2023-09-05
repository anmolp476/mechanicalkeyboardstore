type Product = {
  id: number;
  title: string;
  desc?: string;
  image?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const singleProduct: Product = {
  id: 1,
  title: "Leopold FC900R Two Tone White",
  desc: "Beautiful style, with genuine Cherry MX Switches, full-size layout, and dip switches for customizing layout!",
  image: "/keyboard_1.jpg",
  price: 149.99,
  options: [
    {
      title: "Cherry MX Brown",
      additionalPrice: 5,
    },
    {
      title: "Cherry MX Clear",
      additionalPrice: 7,
    },
    {
      title: "Cherry MX Silent Red",
      additionalPrice: 9,
    },
  ],
};

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Leopold FC900R Two Tone White",
    desc: "Beautiful style, with genuine Cherry MX Switches, full-size layout, and dip switches for customizing layout!",
    image: "/keyboard_1.jpg",
    price: 149.99,
    options: [
      {
        title: "Cherry MX Brown",
        additionalPrice: 5,
      },
      {
        title: "Cherry MX Clear",
        additionalPrice: 5,
      },
      {
        title: "Cherry MX Silent Red",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 2,
    title: "Ducky One 3 SF Aura Clear White",
    desc: "The One 3 series features Ducky's all new QUACK Mechanics design philosophy, and more!",
    image: "/keyboard_2.jpg",
    price: 129.99,
    options: [
      {
        title: "Cherry MX Brown",
        additionalPrice: 5,
      },
      {
        title: "Cherry MX Silver",
        additionalPrice: 5,
      },
      {
        title: "Cherry MX Silent Red",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 3,
    title: "Ducky One 2 Mini Pure White",
    desc: "10 additional PBT Double Shot colorful keycaps (Random color), also supports Ducky Macro 2.0",
    image: "/keyboard_3.png",
    price: 99.0,
    options: [
      {
        title: "Cherry MX Brown",
        additionalPrice: 5,
      },
      {
        title: "Kailh BOX Thick Jade",
        additionalPrice: 5,
      },
      {
        title: "Kailh BOX Silent Pink",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 4,
    title: "Vortex Race 3 TKL Dye",
    desc: "Vortex's newest 75% keyboard, the 83-key Race 3!",
    image: "/keyboard_4.jpg",
    price: 139.99,
    options: [
      {
        title: "Cherry MX Brown",
        additionalPrice: 5,
      },
      {
        title: "Cherry MX Clear",
        additionalPrice: 5,
      },
      {
        title: "Cherry MX Silver",
        additionalPrice: 7,
      },
    ],
  },
  {
    id: 5,
    title: "Obinslab Anne Pro 2 White 60%",
    desc: "USB-C or wireless with Bluetooth, large 1900mAh battery, and bluetooth functionality compatible with most OS",
    image: "/keyboard_5.jpg",
    price: 64.99,
    options: [
      {
        title: "Gateron Blue",
        additionalPrice: 20,
      },
      {
        title: "Gateron Red",
        additionalPrice: 20,
      },
      {
        title: "Kailh BOX Brown",
        additionalPrice: 25,
      },
    ],
  },
  {
    id: 6,
    title: "Ducky x Varmilo Miya",
    desc: "Comes with compact 65% form factor, designed to be compatible with most MacOS, and updated Sakura colorway",
    image: "/keyboard_6.jpg",
    price: 120.0,
    options: [
      {
        title: "Cherry MX Silent Red",
        additionalPrice: 10,
      },
      {
        title: "Varmillo EC Rose V2",
        additionalPrice: 10,
      },
      {
        title: "Varmillo EC Sakura V2",
        additionalPrice: 10,
      },
    ],
  },
];

type Keyboards = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  image?: string;
}[];

export const keyboards: Keyboards = [
  {
    id: 1,
    slug: "keyboards",
    title: "Mechanical Keyboards",
    desc: "Check out some neat boards!",
    image: "/menuImg.webp",
  },
  {
    id: 2,
    slug: "mice",
    title: "Gaming Mice",
    desc: "Coming soon...",
    image: "/gamingMice.jpg",
  },
  {
    id: 3,
    slug: "monitor",
    title: "Monitors",
    desc: "Coming soon...",
    image: "/monitor.jpg",
  },
];
