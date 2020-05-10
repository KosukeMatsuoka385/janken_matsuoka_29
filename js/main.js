"use strict";

class JANKEN {
  constructor(totalTime, cards, totalScore, check, jud) {
    this.totalTime = totalTime; //始まりの時間
    this.timeRemaining = totalTime; //時間を減らすための変数
    this.timer = document.getElementById("time-remaining"); //残り時間表示用変数

    this.cardsArray = cards; //カードシャッフル用配列変数

    this.clicker = document.getElementById("clicks"); //クリックした回数用変数

    this.totalScore = totalScore; //勝利数変数

    this.check = check; //カードチェックの変数

    this.cpuer = document.getElementById("cpu"); //CPUの手変数

    this.jud = jud; //判定結果変数
    this.judgementer = document.getElementById("judgement"); //判定を書き換える為の変数

    this.scorer = document.getElementById("score"); //スコア表示用変数
  }

  startGame() { //ゲーム始まりの関数
    this.totalScore = 0; //初期勝利数
    this.totalClicks = 5; //残りクリック数
    this.timeRemaining = this.totalTime; //残り時間
    this.jud = "Result"; //勝利結果
    this.cpu = "What?"; //CPU初期値
    setTimeout(() => { //残り時間を減らすためのもの
      this.shuffleCards(this.cardsArray); //カードをシャッフル
      this.countdown = this.startCountdown(); //カウントダウンの始まり
    }, 500); //開始時間のディレイタイム

    this.clicker.innerText = this.totalClicks;//残りクリック数初期化
    this.timer.innerText = this.timeRemaining;//残り時間初期化
    this.scorer.innerText = this.totalScore; //勝利数表示
  }

  startCountdown() { //カウントダウン用関数
    return setInterval(() => { //残り時間を減らすメソッド
      this.timeRemaining--; //1秒ずつ減らす変数
      this.timer.innerText = this.timeRemaining; //残り時間を書き換える
      if (this.timeRemaining === 0) //残り時間が0になったら
        this.finishGame(); //ここで終わりの関数を呼び出す
    }, 1000); //1秒ごとに減らす為の1000
  }

  finishGame() { //ゲーム終了の関数
    clearInterval(this.countdown); //残り時間を初期化
    document.getElementById("finish-text").classList.add("visible"); //終わりを表示
    document.getElementById("gu_red").classList.remove("visible"); //visibleを消す処理
    document.getElementById("gu_blue").classList.remove("visible");
    document.getElementById("gu_green").classList.remove("visible");
    document.getElementById("cho_red").classList.remove("visible");
    document.getElementById("cho_blue").classList.remove("visible");
    document.getElementById("cho_green").classList.remove("visible");
    document.getElementById("pa_red").classList.remove("visible");
    document.getElementById("pa_blue").classList.remove("visible");
    document.getElementById("pa_green").classList.remove("visible");
  }

  clickCard(card) { //カードクリック時の関数
    // クリックはしてあるDOMなのかどうかの判定
    // visibleがすでに付与しているのか？if
    if (card.classList.contains("checked") == false) {}
    if (card.classList.contains("visible") == false) {
      this.totalClicks--; //残りクリックを減らす変数
      this.clicker.innerText = this.totalClicks; //クリックした数を減らす表示
      card.classList.add("visible"); //クリック時に暗転処理
      card.classList.add("checked"); //クラスにcheckを追加
    }
    if (this.totalClicks === 0) { //残り回数がなくなったら
      this.finishGame(); //ここで終わりの関数を呼び出す
    }
  }

  guCard(gu) { //グーの関数
    if (gu.classList.contains("checked") == false) {
      let rnd = Math.floor(Math.random() * 3 + 1); //グー用ランダム変数
      if (rnd === 1) { //引き分け
        this.totalScore += 0; //スコアの結果
        this.scorer.innerText = this.totalScore; //スコアを書き換える
        this.cpuer.innerText = "Rock" //CPUの手
        this.judgementer.innerText = "Drow"; //結果
      }
      if (rnd === 2) { //勝ち
        this.totalScore += 1;
        this.scorer.innerText = this.totalScore;
        this.cpuer.innerText = "Scissors";
        this.judgementer.innerText = "Win";
      }
      if (rnd === 3) { //負け
        this.totalScore += 0;
        this.scorer.innerText = this.totalScore;
        this.cpuer.innerText = "Paper";
        this.judgementer.innerText = "Lose";
      }
      gu.classList.add("checked"); //クラスにcheckを追加
      return;
    }
  }

  choCard(cho) { //チョキの関数
    if (cho.classList.contains("checked") == false) {
      let rnd = Math.floor(Math.random() * 3 + 4); //チョキ用ランダム変数
      if (rnd === 4) { //引き分け
        this.totalScore += 0;
        this.scorer.innerText = this.totalScore;
        this.cpuer.innerText = "Scissors";
        this.judgementer.innerText = "Drow";
      }
      if (rnd === 5) { //勝ち
        this.totalScore += 1;
        this.scorer.innerText = this.totalScore;
        this.cpuer.innerText = "Paper";
        this.judgementer.innerText = "Win";
      }
      if (rnd === 6) { //負け
        this.totalScore += 0;
        this.scorer.innerText = this.totalScore;
        this.cpuer.innerText = "Rock";
        this.judgementer.innerText = "Lose";
      }
      cho.classList.add("checked"); //クラスにcheckを追加
      return;
    }
  }

  paCard(pa) { //パーの関数
    if (pa.classList.contains("checked") == false) {
      let rnd = Math.floor(Math.random() * 3 + 7); //パー用ランダム変数
      if (rnd == 7) { //引き分け
        this.totalScore += 0;
        this.scorer.innerText = this.totalScore;
        this.cpuer.innerText = "Paper";
        this.judgementer.innerText = "Drow";
      }
      if (rnd == 8) { //勝ち
        this.totalScore += 1;
        this.scorer.innerText = this.totalScore;
        this.cpuer.innerText = "Rock";
        this.judgementer.innerText = "Win";
      }
      if (rnd == 9) { //負け
        this.totalScore += 0;
        this.scorer.innerText = this.totalScore;
        this.cpuer.innerHTML = "Scissors";
        this.judgementer.innerText = "Lose";
      }
      pa.classList.add("checked"); //クラスにcheckを追加
      return;
    }
  }

  shuffleCards(cardsArray) { // Fisher-Yates Shuffle Algorithm.
    for (let i = cardsArray.length - 1; i > 0; i--) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      cardsArray[randIndex].style.order = i;
      cardsArray[i].style.order = randIndex;
    }
  }
}

if (document.readyState == "loading") { //ゲーム情報準備読込
  document.addEventListener("DOMContentLoaded", ready); //DOM情報の読込が完了したら
} else {
  ready(); //始まり関数を読み込む
}

const time = 10; //残り時間

function ready() { //始まりの関数
  let overlays = Array.from(document.getElementsByClassName("overlay-text")); //オープニングテキストの表示変数
  let cards = Array.from(document.getElementsByClassName("card")); //カード全ての変数
  let guers = Array.from(document.getElementsByClassName("guer")); //グーの変数
  let choers = Array.from(document.getElementsByClassName("choer")); //チョキの変数
  let paers = Array.from(document.getElementsByClassName("paer")); //パーの変数
  let game = new JANKEN(time, cards, guers, choers, paers); //ジャンケンの変数、インスタンス

  overlays.forEach(overlay => { //オープニングテキストを
    overlay.addEventListener("click", () => { //クリックしたら
      overlay.classList.remove("visible"); //オープニングテキストを消して
      game.startGame(); //ゲームの開始
    });
  });

  cards.forEach(card => { //カードを
    card.addEventListener("click", () => { //クリックしたら
      game.clickCard(card); //カードの関数を呼ぶ
    });
  });

  guers.forEach(gu => { //グーカードを
    gu.addEventListener("click", () => { //クリックしたら
      game.guCard(gu); //グーカードの関数を呼ぶ
    });
  });

  choers.forEach(cho => { //チョキカードを
    cho.addEventListener("click", () => { //クリックしたら
      game.choCard(cho); //チョキカードの関数を呼ぶ
    });
  });

  paers.forEach(pa => { //パーカードを
    pa.addEventListener("click", () => { //クリックしたら
      game.paCard(pa); //パーカードの関数を呼ぶ
    });
  });
}