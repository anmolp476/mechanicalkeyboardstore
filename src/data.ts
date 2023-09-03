type Product = {
  id: number;
  title: string;
  desc?: string;
  image?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

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
    desc: "The One 3 series features Ducky's all new QUACK Mechanics design philosophy which focuses on achieving best-in-class aesthetics, hotswap functionality, sound dampening, stabilizers, and more!",
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
    desc: "10 additional PBT Double Shot colorful keycaps (Random color), also supports Ducky Macro 2.0, the most powerful hardware available in the market",
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
    desc: "Vortex's newest 75% keyboard, the 83-key Race 3! Do you need dedicated arrow keys that your 60% doesn't provide, but don't want the size of a TKL? A 75% may be just for you!",
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
    desc: "Can be used wired over USB-C or wirelessly over Bluetooth 5.0, large 1900mAh battery, and bluetooth functionality is compatible with Windows, Mac, Linux, iOS, and Android",
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
];













