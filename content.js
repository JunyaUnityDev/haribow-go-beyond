/* ============================================================
   単独公演「Go Beyond」 共有コンテンツ
   ここ1ファイルを直せば、全ページ（一般＋業界各面）に反映される。
   ・ラインナップ（演目カード）
   ・チケット購入URL
   ============================================================ */
(function () {
  // ▼ チケット購入URL（将来 ticket.haribow.com にする時もここだけ）
  var PURCHASE_URL = "https://junyaunitydev.github.io/haribow-solo-show-survey/seats.html";

  // ▼ ラインナップ（演目）。順番＝表示順。
  //   tags: [{t:表示文字, c:"gold"|"red"|なし}]  img:写真パス(nullで写真なし)  bg:背景位置クラス(任意)
  var LINEUP = [
    {
      tags: [{ t: "世界王者", c: "gold" }], title: "YOUNG BLOOD",
      img: "assets/lineup/young-blood.jpg",
      desc: "DOUBLE DUTCH CONTEST WORLD 2026 世界一。頂点に立った次世代チームの演技。"
    },
    {
      tags: [{ t: "世界王者", c: "gold" }], title: "2025 IJRU世界選手権 優勝演技",
      img: "assets/lineup/ijru-2025.jpg",
      desc: "世界30カ国以上が集う2025 IJRU世界選手権を制した、HARIBOW世界一の演技。"
    },
    {
      tags: [{ t: "限定コラボ", c: "red" }], title: "Special Guest Collaboration",
      img: null,
      desc: 'この夜だけの、特別ゲストとのコラボレーション。<span style="color:var(--teal)">近日発表。</span>'
    },
    {
      tags: [{ t: "復活" }, { t: "完全新作" }], title: "Roar",
      img: "assets/lineup/roar.jpg",
      desc: "ニューヨーク・アポロシアターで開催されたNational Double Dutch League 2021 世界3位。伝説のチーム『Roar』が、完全新作のパフォーマンスとして復活する。"
    },
    {
      tags: [{ t: "オーディション作品" }], title: "Cirque du Soleil オーディション演技",
      img: "assets/lineup/cirque-du-soleil.jpg", bg: "bg-cirque",
      desc: "世界最高峰のサーカス、シルク・ドゥ・ソレイユのオーディションで披露した、究極のスピード、ダブルダッチでの新たな表現を追求した作品。"
    },
    {
      tags: [{ t: "原点" }], title: "DOUBLE DUTCH CONTEST JAPAN 2023",
      img: "assets/lineup/ddc-japan-2023.jpg", bg: "bg-ddc",
      desc: "国内最大のダブルダッチ大会。HARIBOW第一世代がシーンに名乗りを上げた、原点の演技。"
    }
  ];

  function cardHTML(c) {
    var tags = c.tags.map(function (t) {
      return '<span class="ptag' + (t.c ? " " + t.c : "") + '">' + t.t + "</span>";
    }).join("");
    var hasImg = !!c.img;
    var bg = hasImg
      ? '<div class="bg' + (c.bg ? " " + c.bg : "") + '" style="background-image:url(' + c.img + ')"></div>'
      : "";
    return '<div class="pcard' + (hasImg ? " ph" : "") + '">' + bg +
      '<div class="ptags">' + tags + "</div>" +
      "<h3>" + c.title + "</h3><p>" + c.desc + "</p></div>";
  }

  window.HARIBOW = {
    purchaseURL: PURCHASE_URL,
    // 空の .pgrid に演目カードを描画
    renderLineup: function (sel) {
      var box = typeof sel === "string" ? document.querySelector(sel) : sel;
      if (!box) return;
      box.innerHTML = LINEUP.map(cardHTML).join("");
    },
    // data-buy を持つリンク/ボタンの href を購入URLに設定（href直書きはフォールバック）
    applyPurchaseLinks: function () {
      var a = document.querySelectorAll("[data-buy]");
      for (var i = 0; i < a.length; i++) a[i].setAttribute("href", PURCHASE_URL);
    }
  };
})();
