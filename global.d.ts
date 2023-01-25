interface IAndroid {
  search(): void;
  openEarnings(): void;
  loadUrlInNewTab(url: string): void;
  share(url: string): void;
}

export {};

declare global {
  interface Window {
    CashbroInterface: IAndroid;
  }
}
