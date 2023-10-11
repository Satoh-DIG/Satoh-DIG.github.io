// friendColors 配列をグローバルスコープで定義
const friendColors = [
  "red", 
  "blue", 
  "green", 
];

// load　ページの読み込みが完了した時のイベント発生
window.addEventListener("load", () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  // １回目だけの理由がわからん　２度目にはダイヤログなし
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }

  const containerEl = document.querySelector("#newsfeed");

  // ------------------------------------------------------------
  // HTMLFormElement オブジェクトを作成する
  // ------------------------------------------------------------
  let form = document.createElement("form");
  // BODY のノードリストに登録する
  document.body.appendChild(form);
  // ------------------------------------------------------------
  // HTMLInputElement オブジェクトを作成する
  // ------------------------------------------------------------
  let input = document.createElement("input");
  // inputのidに名前をつける
  input.id = "userInput";
  // フォームのノードリストに登録する
  form.appendChild(input);

  // 変数userTextに、userInput内のinnerText内のテキストを格納する
  let userText = document.getElementById("userInput").value;

  // ボタン作成
  // ボタン要素を作成
  let btn = document.createElement("button");
  // ボタンのテキストを設定
  btn.innerHTML = "コメント追加";
  btn.id = "btnId";
  // ボタンを追加 （コメント欄のフォームに追加する）
  form.appendChild(btn);

  // 書き込むためのループ？
  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
    const post = bacefook.newsfeed[index];

    // // 大枠のフレームを追加
    // const flameEl=document.createElement("div");
    // flameEl.className = "flame";

    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;

    const postEl = document.createElement("div");
    postEl.innerText = post.text;
    postEl.append(friendEl);

    // 友達ごとに色を設定
    // console.log(friendColors[index])
    if (friendColors[index]) {
        friendEl.style.border = `3px solid ${friendColors[index]}`;
    } else {
        friendEl.style.border = "3px solid #ccc"; // デフォルトの色
    }

    // // フレーム枠に追加
    // flameEl.appendChild(friendEl);
    // flameEl.appendChild(postEl);
    // // フレーム枠にボーダラインを追加
    // flameEl.style.border = "10px solid #010";
    // // ページにコンテナ要素を追加
    // document.body.appendChild(flameEl);

    const momentTime = moment(bacefook.newsfeed[index].timestamp).format(
      "MMMM Do YYYY, h:mm:ss a"
    );
    containerEl.append(momentTime);
    // console.log(bacefook.newsfeed[index].timestamp)

    containerEl.append(postEl);
    containerEl.append(bacefook.newsfeed[index].image);
    // console.log(bacefook.newsfeed[index]);
    // 改行を追加
    const brElement = document.createElement("br");
    containerEl.append(brElement);
  }
  let currentCountFeed = bacefook.newsfeed.length;
  // ボタンクリックアクション
  function bClick(event) {
    //let currentInfo = document.getElementsByClassName("current-info");
    //console.log(currentInfo.value);
    //currentInfo.remove();

    for (
      let index = bacefook.newsfeed.length - 1;
      index >= currentCountFeed;
      index--
    ) {
      const post = bacefook.newsfeed[index];

      const friendEl = document.createElement("div");
      friendEl.className = "friend";
      friendEl.innerText = post.friend;

      const postEl = document.createElement("div");
      postEl.innerText = post.text;
      postEl.prepend(friendEl);

      const momentTime = moment(bacefook.newsfeed[index].timestamp).format(
        "MMMM Do YYYY, h:mm:ss a"
      );
      containerEl.prepend(momentTime);

      containerEl.prepend(postEl);

      // containerEl.prepend(bacefook.newsfeed.image)
    }
    //alert(input.value);
    // console.log(input.value);
    event.preventDefault();
  }

  const Button = document.getElementById("btnId");
  Button.addEventListener("click", bClick);
});
