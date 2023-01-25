class AndroidService {
  openEarnings() {
    window.CashbroInterface?.openEarnings();
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
}

export default new AndroidService();
