interface IAndroid {
  search(): void;
  loadUrl(url: string): void;
  loadUrlInNewTab(url: string): void;
  share(url: string): void;
}

export {};

declare global {
  interface Window {
    CashbroInterface: IAndroid;
  }
}
