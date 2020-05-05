//設問文として書き込む内容。「内面の魅力」など。。。
var questionSentence={
    //questionsと同じキーで書き込んでください
    //フロントで見える質問番号に対応しているので、q1はありません。
    q2:'あなたの推しの最大の魅力を教えて下さい。',
    q3:'あたなの推しはどのようなキャラですか。',
    q4:'推しの魅力的な行動を教えてください。',
    q5:'おすすめの配信はどれですか？',
    q6:'他のVtuber、またはリスナーとの魅力的な関係があれば、教えてください。',
}

var choices = {
    //仮のキー名です。書き換えてください。ただし次のオブジェクトとキー名を合わせてください
    //inputタグのname属性として使用します
    q2 : {//内面の魅力、とかそんなん
        //選択肢のキー名はinputタグのid属性に使用します
        text    :"熱血",
        text    :"冷静",
        text    :"内気",
        text    :"楽天的",
        text    :"優しい",
        text    :"常識的",
        text    :"面白い",
        text    :"ポジティブ",
        text    :"知的",
        text    :"ユニーク",
        text    :"清楚",
        text    :"清楚（真）",
        text    :"センシティブ",
        text    :"陽気",
        text    :"勇敢",
        text    :"ゲーム好き",
      },
    q3:{//配信傾向、とか
        text    :"陽キャ",
        text    :"陰キャ",
        text    :"アイドル",
        text    :"芸人",
        text    :"ツンデレ",
        text    :"ヤンデレ",
        text    :"クーデレ",
        text    :"ママ",
        text    :"幼女",
        text    :"男の娘",
        text    :"人外",
        text    :"常識人",
        text    :"ライバー",
        text    :"女子高生",
        text    :"男性",
        text    :"女性",
        text    :"女子大生",
        text    :"大人の女性",
        text    :"大人の男性",
        text    :"男子",
        text    :"女子",
    },
    q4:{
        text    :"一生懸命",
        text    :"楽しそう",
        text    :"センシティブ",
        text    :"清楚",
        text    :"清楚（真）",
        text    :"自由奔放",
        text    :"意外と常識的",
        text    :"意外と几帳面",
        text    :"献身的",
    },
    q5:{
        text    :"ゲーム実況",
        text    :"雑談配信",
        text    :"歌配信",
        text    :"企画配信",
        text    :"コラボ配信",
        text    :"ゲリラ配信",
        text    :"ホラー実況",
        text    :"耐久配信",
        text    :"寝落ち配信",
        text    :"ASMP配信",
        text    :"実写配信",
        text    :"介護配信",
    },
    q6:{
        text    :"てえてえ",
        text    :"家族",
        text    :"プロレス",
        text    :"ファンサービス",
        text    :"ファン参加企画",
    }
}
