export const detectAdBlock =  async () => {
    let adBlockEnabled = false;
    const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    try {
      await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true);
    } catch (e) {
      adBlockEnabled = true;
    }

    return adBlockEnabled;
  }