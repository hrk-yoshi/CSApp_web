// ボタン要素と表示領域を取得
const btn1 = document.getElementById('issue1');
const btn2 = document.getElementById('issue5');
const treeContainer = document.getElementById('treeContainer');
const data = {
  group1: {
    CategoryA: [
      { name: "URL A-1", link: "https://faq.ricoh.jp/app/answers/detail/a_id/2473"},
      { name: "URL A-2", link: "https://faq.ricoh.jp/app/answers/detail/a_id/2473"},
    ],
    CategoryB: [
      { name: "URL B-1", link: "https://faq.ricoh.jp/app/answers/detail/a_id/2473" },
      { name: "URL B-2", link: "https://faq.ricoh.jp/app/answers/detail/a_id/2473" },
    ]
  },
  group2: {
    CategoryX: [
      { name: "URL X-1", link: "https://faq.ricoh.jp/app/answers/detail/a_id/2473"},
      { name: "URL X-2", link: "https://faq.ricoh.jp/app/answers/detail/a_id/2473"},
    ],
    CategoryY: [
      { name: "URL Y-1", link: "https://faq.ricoh.jp/app/answers/detail/a_id/2473" }
    ]
  }
};

// === カテゴリ一覧を表示 ===
function showCategories(groupData) {
  let html = "<ul>";
  Object.keys(groupData).forEach(category => {
    html += `<li onclick="showUrls('${category}')">${category}</li>`;
  });
  html += "</ul>";
  treeContainer.innerHTML = html;
  currentGroup = groupData;
}

// === URL一覧を表示 ===
function showUrls(category) {
  const urls = currentGroup[category];
  let html = `<h3>${category}</h3><ul>`;
  urls.forEach(item => {
    html += `<li><a href="faq.html?link=${encodeURIComponent(item.link)}">${item.name}</a></li>`;
  });
  html += "</ul><button onclick='goBack()'>← Back</button>`";
  treeContainer.innerHTML = html;
}

// === 戻る処理 ===
function goBack() {
  showCategories(currentGroup);
}

// === グループ切り替え ===
let currentGroup = null;
btn1.addEventListener('click', () => showCategories(data.group1));
btn2.addEventListener('click', () => showCategories(data.group2));