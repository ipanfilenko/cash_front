class AndroidService {
  loadUrl(url: string) {
    window.CashbroInterface?.loadUrl(url);
  }

  loadUrlInNewTab(url: string) {
    window.CashbroInterface?.loadUrlInNewTab(url);
  }

  share(url: string) {
    window.CashbroInterface?.share(url);
  }

  search() {
    window.CashbroInterface?.search();
  }

  copyLinkText(text: string) {}

  copyLinkAddress(url: string) {}
}

export default new AndroidService();
