import ShortcutEnum from "./shortcut.enum";

export interface Shortcut {
  id: ShortcutEnum;
  title: string;
  url: string | null;
  iconPath: string;
  isFull?: boolean;
}

const pathPrefix = "/images/shortcuts";

class ShortcutModel {
  private readonly avalibleList = [
    ShortcutEnum.EARNINGS,
    ShortcutEnum.FLIPCART,
    ShortcutEnum.ALIEXPRESS,
    ShortcutEnum.MYNTRA,
    ShortcutEnum.GOOGLE,
    ShortcutEnum.FACEBOOK,
    ShortcutEnum.INSTAGRAM,
    ShortcutEnum.YOUTUBE,
  ];

  private readonly list: Shortcut[] = [
    {
      id: ShortcutEnum.CASHBACK,
      title: "Cashback",
      url: null,
      iconPath: `${pathPrefix}/percent.svg`,
    },
    {
      id: ShortcutEnum.EARNINGS,
      title: "Earnings",
      url: null,
      iconPath: `${pathPrefix}/money.svg`,
    },
    {
      id: ShortcutEnum.ADD_SHORTCUT,
      title: "",
      iconPath: `${pathPrefix}/plus.svg`,
      url: null,
    },
    {
      id: ShortcutEnum.FLIPCART,
      title: "Flipkart",
      iconPath: `${pathPrefix}/flipkart.svg`,
      url: "https://ad.admitad.com/g/rb1qie435b65a0ec1dc2a80d05f527/",
      isFull: true,
    },
    {
      id: ShortcutEnum.ALIEXPRESS,
      title: "AliExpress",
      iconPath: `${pathPrefix}/aliexpress.svg`,
      url: "https://alitems.co/g/5mdimmknwt65a0ec1dc2cd43c39a51/",
      isFull: true,
    },
    {
      id: ShortcutEnum.MYNTRA,
      title: "Myntra",
      iconPath: `${pathPrefix}/myntra.svg`,
      url: "https://ad.admitad.com/g/s56leml8ck65a0ec1dc223d5247706/",
    },
    {
      id: ShortcutEnum.GOOGLE,
      title: "Google",
      iconPath: `${pathPrefix}/google.svg`,
      url: "https://www.google.com/",
      isFull: true,
    },
    {
      id: ShortcutEnum.FACEBOOK,
      title: "Facebook",
      iconPath: `${pathPrefix}/facebook.svg`,
      url: "https://www.facebook.com/",
      isFull: true,
    },
    {
      id: ShortcutEnum.INSTAGRAM,
      title: "Instagram",
      iconPath: `${pathPrefix}/facebook.svg`,
      url: "https://www.instagram.com/",
      isFull: true,
    },
    {
      id: ShortcutEnum.YOUTUBE,
      title: "Youtube",
      iconPath: `${pathPrefix}/youtube.svg`,
      url: "https://www.youtube.com/",
      isFull: true,
    },
  ];

  private filter(list: Shortcut[]) {
    const avalibleShortcuts = list.filter((item) => this.avalibleList.some((avalibleId) => avalibleId === item.id));
    return avalibleShortcuts;
  }

  get favorite() {
    const list = this.filter(this.list);
    return list;
  }
}

export default new ShortcutModel();
