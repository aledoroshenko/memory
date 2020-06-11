// We should get the list of available files by theme

type TImagePath = string;

type TImagesByTheme = {
  [TThemeName: string]: {
    covers: TImagePath[];
    tiles: TImagePath[];
  };
};

export const imagesByTheme: TImagesByTheme = {
  CATS: {
    covers: ["/tiles/cats/covers/1.png"],
    tiles: [
      "/tiles/cats/tiles/1.png",
      "/tiles/cats/tiles/2.png",
      "/tiles/cats/tiles/3.png",
      "/tiles/cats/tiles/4.png",
      "/tiles/cats/tiles/5.png",
      "/tiles/cats/tiles/6.png",
      "/tiles/cats/tiles/7.png",
      "/tiles/cats/tiles/8.png",
      "/tiles/cats/tiles/9.png",
      "/tiles/cats/tiles/10.png",
      "/tiles/cats/tiles/11.png",
      "/tiles/cats/tiles/12.png",
      "/tiles/cats/tiles/13.png",
      "/tiles/cats/tiles/14.png",
      "/tiles/cats/tiles/15.png",
    ],
  },
};
