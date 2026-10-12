/*
  M-TIC職員ポータル 設定ファイル（config.js）
  ------------------------------------------------------------------
  ・index.html と同じ場所に置きます。index.html を新しい版に差し替えても、このファイルは差し替えません
  ・オンラインショップ（shop/index.html）も、このファイルを読みます（../config.js）
  ・ここに書く値は「公開してよい値」です（パスワードや個人情報は書かないこと）
  ・Firebaseコンソール → プロジェクトの設定 → マイアプリ → 「SDK の設定と構成」→「構成」の値を貼ります
  作成：2026-10-12（ポータル v2.0・v2.1 用。Firebase プロジェクト mtic-portal の値を入れた本番用）
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
  NOTIFY_URL: 'https://script.google.com/macros/s/AKfycbzwsGAOCw2cZ-GFY2mEMXqm74-bmsaoTKVNCy1BokQy_QfS3j8rXtcF5-uiS2a1x0k/exec',  // 裏方GAS「M-TIC通知」のウェブアプリURL
  LOGO_URL: '',            // ロゴ画像を同じ場所に置いたら 'logo.png' のように書く（空ならテキストのロゴ）
  SHARED_IDLE_MINUTES: 30, // 共用端末モードで自動サインアウトするまでの分
  KIOSK_IDLE_SECONDS: 25,  // キオスクで、操作がないと最初の画面に戻るまでの秒
  CHAT_MAX_FILE_MB: 10     // チャットで送れるファイルの大きさ（裏方GASの MAX_FILE_MB と同じにする）
  // EXTRA_APPS: [ { id: 'form1', name: '○○フォーム', section: 'daily', icon: 'link' } ]  ← アイコンを足すとき（URLはリンク設定で入れる）
};
