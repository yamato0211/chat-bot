const defaultDataset = {
    "init": {
        answers: [
            { content: "勉強を教えて！", nextId: "job_offer" },
            { content: "相談したいです", nextId: "consultant" },
            { content: "暇です", nextId: "community" },
            { content: "遊びに行こう！", nextId: "dating" },
        ],
        question: "こんにちは！ご用件はなんでしょうか？",
    },
    "job_offer": {
        answers: [
            { content: "数学", nextId: "website" },
            { content: "物理", nextId: "webapp" },
            // { content: "プログラミング", nextId: "automation_tool" },
            { content: "その他", nextId: "other_jobs" }
        ],
        question: "どの教科でしょうか？",
    },
    "website": {
        answers: [
            { content: "参考書を見てみる", nextId: "https://www.amazon.co.jp/%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%E5%BC%8F%E6%95%B0%E5%AD%A63-%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%E7%A0%94%E7%A9%B6%E6%89%80/dp/4410101544/ref=sr_1_17?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=24Q7GR5SJTB4V&keywords=%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88&qid=1645545573&sprefix=%E8%B5%A4%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%2Caps%2C253&sr=8-17" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "数学についてですね。おすすめの参考書を紹介します",
    },
    "webapp": {
        answers: [
            { content: "参考書を見てみる", nextId: "https://www.amazon.co.jp/%E5%90%8D%E5%95%8F%E3%81%AE%E6%A3%AE%E7%89%A9%E7%90%86-%E5%8A%9B%E5%AD%A6%E3%83%BB%E7%86%B1%E3%83%BB%E6%B3%A2%E5%8B%951-%E6%B2%B3%E5%90%88%E5%A1%BE%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E6%B5%9C%E5%B3%B6-%E6%B8%85%E5%88%A9/dp/4777213765/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=26M9WKY9SQLDY&keywords=%E5%90%8D%E9%96%80%E3%81%AE%E6%A3%AE&qid=1645545694&sprefix=%E5%90%8D%E9%96%80%E3%81%AE%E6%A3%AE%2Caps%2C252&sr=8-1" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "物理についてですね。おすすめの参考書を紹介します。",
    },
    "automation_tool": {
        answers: [
            { content: "あきらめる", nextId: "init" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "プログラミングについてですね。自力でがんばれ。",
    },
    "other_jobs": {
        answers: [
            // { content: "そこを何とか", nextId: 'soko' },
            { content: "教科内容を送信する", nextId: "contact" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "その他についてですね。教科内容を教えてください。",
    },
    "soko": {
        answers: [
            { content: "ありがとう！", nextId: 'contact' },
            { content: "最初の質問に戻る", nextId: 'init' }
        ],
        question: "しょうがないですね。どの教科か教えてください"
    },
    "consultant": {
        answers: [
            // { content: "YouTubeで動画を見る(ドンキー限定)", nextId: "https://www.youtube.com/channel/UCRYjlmwRpHOtrbiEssOQQ0g?view_as=subscriber" },
            // { content: "コンボを練習する(ドンキー限定)", nextId: "https://www.youtube.com/watch?v=B4LKj80dIu8" },
            { content: "相談内容を送信する", nextId: 'contact' },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "相談内容を教えてください。",
    },
    "community": {
        answers: [
            { content: "趣味とかありますか？", nextId: "community_activity" },
            { content: "今度一緒に遊びに行きましょう！", nextId: "dating" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "奇遇ですね。僕もです",
    },
    "community_activity": {
        answers: [
            { content: "今度一緒に泳ぎに行きましょう", nextId: "dating" },
            // { content: "同じです（DMする）", nextId: "https://twitter.com/U_0_1115" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "趣味は水泳です！",
    },
    "dating": {
        answers: [
            // { content: "DMする", nextId: "https://twitter.com/U_0_1115" },
            { content: "送信する", nextId: 'contact' },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "喜んで！希望の日時を送信してください。",
    },
}

export default defaultDataset