/*
  M-TIC職員ポータル 設定（config.js）
  ・ここにある値は、ブラウザで動くページに必ず入る「公開用の設定」です（パスワードや個人情報ではありません）
  ・データは、会員だけが読めるように、データベースの決まり（ルール）で守っています
  © 2026 NPO法人松戸技術革新センターM-TIC
*/
window.MTIC_CONFIG = {
  FIREBASE: {
    apiKey: 'AIzaSyByuSTq85S73iyF2wGHx4-T8XoD4Aygliw',
    authDomain: 'mtic-portal.firebaseapp.com',
    projectId: 'mtic-portal',
    storageBucket: 'mtic-portal.firebasestorage.app',
    messagingSenderId: '379101532900',
    appId: '1:379101532900:web:85a81ff1e32f050c60d2f1'
  },
  NOTIFY_URL: 'https://script.google.com/macros/s/AKfycbzwsGAOCw2cZ-GFY2mEMXqm74-bmsaoTKVNCy1BokQy_QfS3j8rXtcF5-uiS2a1x0k/exec',          // 通知・ファイル・注文の受付
  LOGO_URL: '',
  SHARED_IDLE_MINUTES: 30,
  KIOSK_IDLE_SECONDS: 25,
  CHAT_MAX_FILE_MB: 10
};
