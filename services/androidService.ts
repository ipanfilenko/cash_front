class AndroidService {
  openEarnings() {
    window.CashbroInterface?.openEarnings();
  }

  loadUrlInNewTab(url: string) {
    window.CashbroInterface?.loadUrlInNewTab(url);
  }

  loadUrlOutsideBrowser(url: string) {
    window.CashbroInterface?.loadUrlOutsideBrowser(url);
  }

  copyLinkAddress(url: string) {
    window.CashbroInterface?.copyLinkAddress(url);
  }

  copyLinkText(url: string) {
    window.CashbroInterface?.copyLinkText(url);
  }

  share(title: string, url: string) {
    window.CashbroInterface?.share(title, url);
  }

  search() {
    window.CashbroInterface?.search();
  }

  isDevice() {
    return Boolean(window.CashbroInterface);
  }
}

export default new AndroidService();
