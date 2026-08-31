/* ============================================================
   単独公演「Go Beyond」 共有コンテンツ（唯一の一次ソース）
   ここ1ファイルを直せば、全ページ（一般＋業界各面）に反映される。
   ── ラインナップ / 経歴(数字・年表) / 公演情報・日程 / チケット / 購入URL
   ============================================================ */
(function () {

  /* ▼ 公演の基本情報（日程・会場） ── ここを直せば hero/情報/footer/カウントダウン 全部変わる */
  var SHOW = {
    dateShort: "2026.9.29", dow: "(火)",
    dateLong: "2026年9月29日(火)",
    open: "18:30", start: "19:30",
    venue: "めぐろパーシモンホール", hall: "大ホール",
    showType: "多演目ショーケース", showSub: "複数演目＋コラボ／休憩あり",
    datetime: "2026-09-29T19:30:00+09:00" // カウントダウン基準(JST)
  };

  /* ▼ チケット購入URL（将来 ticket.haribow.com にする時もここだけ） */
  var PURCHASE_URL = "https://ticket.haribow.com/seats.html";

  /* ▼ ラインナップ（演目）。順番＝表示順。img:null で写真なし。bg:背景位置クラス(任意) */
  var LINEUP = [
    { tags: [{ t: "世界王者", c: "gold" }], title: "YOUNG BLOOD", img: "assets/lineup/young-blood.jpg",
      desc: "DOUBLE DUTCH CONTEST WORLD 2026 世界一。頂点に立った次世代チームの演技。" },
    { tags: [{ t: "世界王者", c: "gold" }], title: "2025 IJRU世界選手権 優勝演技", img: "assets/lineup/ijru-2025.jpg",
      desc: "世界30カ国以上が集う2025 IJRU世界選手権を制した、HARIBOW世界一の演技。" },
    { tags: [{ t: "限定コラボ", c: "red" }], title: "Cheer Re-Man's × HARIBOW", img: "assets/lineup/cheer-remans.jpg",
      desc: '全員が会社員のパフォーマンスチーム『チアリーマンズ』。8月、5,000席を満席にした彼らの単独公演にHARIBOWが出演した。今度は“空飛ぶスーツ集団”が、この舞台に立つ。' },
    { tags: [{ t: "限定ゲスト", c: "red" }], title: "AIR FOOTWORKS", img: "assets/lineup/air-footworks.jpg",
      desc: "2018年結成、世界初のエアダンス（鉄棒ダンス）ユニット。America's Got Talent 2024 でゴールデンブザーを受け、グランドファイナルへ進出。一夜限りのゲスト出演。" },
    { tags: [{ t: "復活" }, { t: "完全新作" }], title: "Roar", img: "assets/lineup/roar.jpg",
      desc: "ニューヨーク・アポロシアターで開催された国際大会 National Double Dutch League 2021 で3位。チーム『Roar』が、完全新作のパフォーマンスとして復活する。" },
    { tags: [{ t: "オーディション作品" }], title: "Cirque du Soleil オーディション演技", img: "assets/lineup/cirque-du-soleil.jpg", bg: "bg-cirque",
      desc: "世界最高峰のサーカス、シルク・ドゥ・ソレイユのオーディションで披露した、究極のスピード、ダブルダッチでの新たな表現を追求した作品。" },
    { tags: [{ t: "完全新作" }], title: "HOMECOMING", img: "assets/lineup/homecoming.jpg",
      desc: "一年中海外で活動しているメンバーが、この日のために帰ってくる。過去の実績ではなく、この夜のためだけに作られた完全新作。" },
    { tags: [{ t: "原点" }], title: "DOUBLE DUTCH CONTEST JAPAN 2023", img: "assets/lineup/ddc-japan-2023.jpg", bg: "bg-ddc",
      desc: "国内最大のダブルダッチ大会。HARIBOW第一世代がシーンに名乗りを上げた、原点の演技。" }
  ];

  /* ▼ ラインナップ見出し脇のハイライト文 */
  var LINEUP_HL = '2025 IJRU世界選手権（HARIBOW）と DOUBLE DUTCH CONTEST WORLD 2026（YOUNG BLOOD）——<b>2組の世界王者の演技が、同じ舞台に立つ。</b>';

  /* ▼ 経歴：掴みの4数字。 t:文字(そのまま表示) / n:数字(カウントアップ) comma:桁区切り */
  var STATS = [
    { t: "世界一", lb: "2025 IJRU<br>世界選手権" },
    { t: "史上初", lb: "BGT 観客<br>ゴールデンブザー" },
    { n: 7, lb: "カ国の<br>海外TV出演" },
    { n: 20000, comma: true, lb: "人規模のアリーナ<br>（NBA）" }
  ];

  /* ▼ 経歴：通過点タイムライン。k:ラベル h:一撃ライン b:補足(任意) big:強調(任意) */
  var TIMELINE = [
    { k: "世界のタレントショー", h: "Britain's Got Talent — 史上初の“観客ゴールデンブザー”、決勝進出", b: "イタリア・スペイン・フランスのタレントショーにも出演" },
    { k: "世界最高峰のサーカス／ヴァリエテ", h: "シルク・ドゥ・ソレイユ賞／リングリング賞／モンテカルロ賞 を受賞", b: "ムーラン・ルージュ、世界最大のテント Cirque Phénix、欧州最大級 Europa-Park ほか名門に続々出演" },
    { k: "ドイツアリーナツアー", h: "Feuerwerk「VIVA」— 1万人超級のアリーナで 30公演以上", b: "“欧州で最も成功した体操エンタメショー”（年間20万人超を動員）", big: true },
    { k: "世界的ビッグイベント", h: "NBA アブダビ — 約2万人アリーナのハーフタイム" },
    { k: "欧州7拠点・同時公演（2025）", h: "同じ時間に、7つの舞台を回した", b: "総勢35名のHARIBOWメンバーを派遣" },
    { k: "ダブルダッチ、世界の頂点", h: "2025 IJRU世界選手権 優勝", b: "世界30カ国以上が集う舞台で、世界一に" }
  ];

  /* ▼ 締切（このリポで日付を書く唯一の場所）
     ★正典は gas/Deadlines.js。ここは公式サイト用の写しなので、直すときは必ず両方。
       ズレは performance/solo_show/gas_tests/check_deadlines.js が検出する。
     ★ページのHTMLに日付を書かないこと。書くとこの1箇所で直せなくなる。 */
  var DEADLINES = {
    advance:   "9/28",   // 前売価格の最終日（9/29の当日から通常価格）
    team:      "9/12",   // 団体（5名〜）の申込の最終日
    supporter: "9/5"     // 来場サポーター券の申込の最終日（横断幕とTシャツの手配のため）
  };

  /* ▼ チケット料金表（一般ページのみ）。pre/reg があれば2列、price があれば colspan */
  /* ★2階の記載を足した（2026-08-29）。8/24に2階372席を全面開放して販売可能席が
       566→938になったのに、この料金表も index.html も「2階」を一度も書いていなかった。
       1階で個人が買える席は残りわずかで、**これから来るお客様の大半が座るのは2階**。
       どこの席かが書かれていない状態で売っていた（全体監査M2・M3）。
     ★2階の区分：中央14〜26番＝個人（一般A席と同額）／左右サイド＝団体。
       ただし8/17以降サイドは個人にも開放しているので（決定No.6）、
       お客様向けには階だけ書いて番号の内訳は書かない。実際の空きは購入画面の座席図が正。 */
  var TICKETS = [
    { name: "一般S席", tag: "サンクス動画付", sub: "1階 3〜12列 中央", pre: "¥4,500", reg: "¥5,000" },
    { name: "一般A席", sub: "1階 前方サイド・14〜18列 中央／2階", pre: "¥3,500", reg: "¥4,000" },
    { name: "大学生（個人）", sub: "大学院生も対象", pre: "¥2,500", reg: "¥3,000" },
    { name: "大学生 団体", sub: "5名以上・大学院生も対象／1階 後方サイド・2階", price: "¥2,000" },
    { name: "コミュニティ団体", sub: "5名以上／1階 後方サイド・2階", price: "¥3,000" },
    { name: "高校生・子供（小中学生）", price: "一般価格" },
    { name: "サポーター券", sub: "1階 2列中央12席・特典付／お申し込みは9月5日まで", price: "¥15,000" },
    { name: "未就学児", sub: "保護者の膝上でご鑑賞。お席が必要な場合は「高校生・子供」券をご購入ください", price: "無料" },
    /* ▼ 配信（決定事項一覧 No.25・2026-08-06 販売開始）。
         2026-08-24 まで公式サイトに一度も載っておらず、「近日」表示のまま19日間放置していた。
         英語版（global.haribow.com）は "On sale now — $17" と正しく出ていたので、
         日本語圏にだけ売り物が伝わっていない状態だった。
         ★配信は席の在庫を持たない唯一の商品。席の残りに関係なく売れる。 */
    { name: "生配信", tag: "オンライン", sub: "アーカイブ2週間付（〜10/13）", price: "¥1,000" },
    { name: "配信サポーター", tag: "オンライン", sub: "扇子・Tシャツ・サンクス動画付／お申し込みは9月5日まで", price: "¥10,000" }
  ];

  /* ---------- 描画ヘルパ ---------- */
  function q(sel) { return document.querySelector(sel); }

  function lineupCard(c) {
    var tags = c.tags.map(function (t) { return '<span class="ptag' + (t.c ? " " + t.c : "") + '">' + t.t + "</span>"; }).join("");
    var hasImg = !!c.img;
    var bg = hasImg ? '<div class="bg' + (c.bg ? " " + c.bg : "") + '" style="background-image:url(' + c.img + ')"></div>' : "";
    return '<div class="pcard' + (hasImg ? " ph" : "") + '">' + bg + '<div class="ptags">' + tags + "</div><h3>" + c.title + "</h3><p>" + c.desc + "</p></div>";
  }
  function statCell(s) {
    var num = ("n" in s)
      ? '<div class="num" data-to="' + s.n + '"' + (s.comma ? ' data-comma="1"' : "") + ">" + (s.comma ? "0" : "1") + "</div>"
      : '<div class="num-t">' + s.t + "</div>";
    return '<div class="stat">' + num + '<div class="lb">' + s.lb + "</div></div>";
  }
  function tlRow(t) {
    return '<div class="tl' + (t.big ? " tl-big" : "") + '"><div class="tl-k">' + t.k + '</div><div class="tl-h">' + t.h + "</div>" + (t.b ? '<div class="tl-b">' + t.b + "</div>" : "") + "</div>";
  }
  function ticketRow(t) {
    var name = '<td class="name">' + t.name + (t.tag ? '<span class="tag">' + t.tag + "</span>" : "") + (t.sub ? '<span class="sub">' + t.sub + "</span>" : "") + "</td>";
    var price = ("price" in t)
      ? '<td class="p" colspan="2">' + t.price + "</td>"
      : '<td class="p">' + t.pre + '</td><td class="p">' + t.reg + "</td>";
    return "<tr>" + name + price + "</tr>";
  }

  window.HARIBOW = {
    purchaseURL: PURCHASE_URL,
    show: SHOW,

    render: function () {
      var el;
      // クライマックス サブ（日付）
      if ((el = q("#climaxSub"))) el.innerHTML = SHOW.dateShort + " — 公園から世界、その先へ。";
      // ラインナップ
      if ((el = q("#lineupGrid"))) el.innerHTML = LINEUP.map(lineupCard).join("");
      if ((el = q("#lineupHl"))) el.innerHTML = LINEUP_HL;
      // 経歴
      if ((el = q("#statsRow"))) el.innerHTML = STATS.map(statCell).join("");
      if ((el = q("#timelineBox"))) el.innerHTML = TIMELINE.map(tlRow).join("");
      // 公演情報（hero meta / infoグリッド / footer）
      if ((el = q("#heroMeta"))) el.innerHTML =
        "<span><b>" + SHOW.dateShort + "</b> " + SHOW.dow + '</span><span class="dot"></span>' +
        "<span>開演 <b>" + SHOW.start + '</b></span><span class="dot"></span>' +
        "<span>" + SHOW.venue + " " + SHOW.hall + "</span>";
      if ((el = q("#infoGrid"))) el.innerHTML =
        '<div class="cell"><div class="k">Date</div><div class="v">' + SHOW.dateShort + " " + SHOW.dow + '</div><div class="s">開場 ' + SHOW.open + " ／ 開演 " + SHOW.start + "</div></div>" +
        '<div class="cell"><div class="k">Venue</div><div class="v">' + SHOW.venue + '</div><div class="s">' + SHOW.hall + "</div></div>" +
        '<div class="cell"><div class="k">Show</div><div class="v">' + SHOW.showType + '</div><div class="s">' + SHOW.showSub + "</div></div>";
      if ((el = q("#footMeta"))) el.innerHTML =
        'HARIBOW 初単独公演「Go Beyond」<br>' + SHOW.dateLong + " 開演" + SHOW.start + "／<br class=\"br-sp\">" + SHOW.venue + " " + SHOW.hall;
      // チケット
      if ((el = q("#ticketBody"))) el.innerHTML = TICKETS.map(ticketRow).join("");
      /* 締切。**料金表を出しているのに締切だけ書いていなかった**（2026-08-27の全面走査で判明）。
         団体の幹事が人数を集めてから、サポーター券の希望者が特典目当てで来てから、
         購入画面で初めて「受付は終了しました」に当たる状態だった。 */
      if ((el = q("#ticketDeadlines"))) {
        el.innerHTML =
          "※ 前売価格は <b>" + DEADLINES.advance + "</b> までのお申し込みに適用されます（公演当日は通常価格）。" +
          "<b>団体</b>（5名以上）のお申し込みは <b>" + DEADLINES.team + "</b> まで、" +
          "<b>サポーター券</b>のお申し込みは <b>" + DEADLINES.supporter + "</b> までです。";
      }
      // 購入リンク
      var a = document.querySelectorAll("[data-buy]");
      for (var i = 0; i < a.length; i++) a[i].setAttribute("href", PURCHASE_URL);
    }
  };
})();
