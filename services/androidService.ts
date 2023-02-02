class AndroidService {
  openEarnings() {
    window.CashbroInterface?.openEarnings();
  }

  loadUrlInNewTab(url: string) {
    window.CashbroInterface?.loadUrlInNewTab(url);
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
