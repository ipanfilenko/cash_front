interface IAndroid {
  search(): void;
  openEarnings(): void;
  loadUrlOutsideBrowser(url: string): void;
  loadUrlInNewTab(url: string): void;
  copyLinkAddress(url: string): void;
  copyLinkText(url: string): void;
  share(title: string, url: string): void;
  detectAdBlock(): void;
}

export {};

declare global {
  interface Window {
    CashbroInterface: IAndroid;
  }
}
