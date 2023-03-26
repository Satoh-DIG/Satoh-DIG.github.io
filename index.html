'use strict'
// 1行目に記載している 'use strict' は削除しないでください

/**
 * サマリ選択部分
 */

// サマリの一覧を表示
// let summaryOption = document.getElementById("summary");
// const arraySummaryNo = ["S-001", "S-002", "G-101"];

// summaryOption.addEventListener("mouseenter", function () {    
//     for (let i = 0; i >= arraySummaryNo.length - 1; i++) {
//         document.getElementsByTagName("option")[i].value = arraySummaryNo[i];
//         document.getElementsByTagName("option")[i].innerText = arraySummaryNo[i];
//     }
// });


/**
 * サマリが選択された後の処理 buttonClick
 */
// function buttonClick() {
//     console.log(summarySelect.value);
//     return document.getElementById("summaryBox").innerText = summarySelect.value; // サマリ内のデータを表示させる　オブジェクトをすべて貼り付けたい
// }
function buttonClick() {
    const summaryName = summarySelect.value; // 選択されたサマリ番号
    for (const elem of allGearSummary) {
        if (elem.summaryId === summaryName) {
            return document.getElementById("summaryBox").innerText = JSON.stringify(elem, null, 2);
        }
    }
}
// 初期化、summarySelectリスト内を初期値(最上位)に設定
let summarySelect = document.getElementById('summary');
summarySelect.options[0].selected = true;

// イベントリスナーで"goButton"の動きを判定
let goButton = document.getElementById('goButton');
goButton.addEventListener('click', buttonClick);

/**
 * 拘束部位が選択された後の処理 fixedPartButtonClick
 */
function fixedPartButtonClick() {
    return console.log(fixedPartSelect.value);
}
//
let fixedPartSelect = document.getElementById('fixedPart');
// イベントリスナーで"fixedPartButton"の動きを判定
let fixedPartButton = document.getElementById('fixedPartButton');
fixedPartButton.addEventListener('click', fixedPartButtonClick);

/**
 * 回転部位が選択された後の処理 inputRotateButtonClick
 */
function inputRotateButtonClick() {
    return console.log(inputRotateSelect.value);
}
//
let inputRotateSelect = document.getElementById('inputRotate');
// イベントリスナーで"inputRotateButton"の動きを判定
let inputRotateButton = document.getElementById('inputRotateButton');
inputRotateButton.addEventListener('click', inputRotateButtonClick);

/**
 * 回転数が入力された後
*/
let inputRevNum = 0;
function inputRevButtonClick() {
    console.log(document.getElementById('inputRev').value);
    return inputRevNum = document.getElementById('inputRev').value;
}
//console.log(Number(inputRevNum));
let inputRevButton = document.getElementById('inputRevButton');
inputRevButton.addEventListener('click', inputRevButtonClick);



/**
 * 共線図の作成
 */

// 入力用の歯数データ配列の作成
// 選択されているサマリ番号に応じたデータ(歯数等)を抽出
let dataGearArray = []; // 歯数データ格納用 他でも使うため宣言
function drawButtonClick() {
    const summaryName = summarySelect.value;
    const result = [];
    for (const elem of allGearSummary) {
        if (elem.summaryId === summaryName) {
            result.push(elem.gearSun, elem.gearPinion, elem.gearRing);
        }
    }
    dataGearArray = result;
    dataXcodeArray = makeXcodeArray(dataGearArray);
    dataYcodeArray = makeYcodeArray(dataGearArray,inputRevNum);
    // dataCalcArray = makeCalcArray(dataGearArray, inputRevNum)
    return drawChart()

}
let drawButtonOn = document.getElementById('drawButton');
drawButtonOn.addEventListener('click', drawButtonClick);

// 入力用の座標データ配列の作成
// xの値の配列　4点
// グラフ用の切片傾き配列　切片、1次係数、2次係数
let dataXcodeArray = []; // x座標用の配列
function makeXcodeArray(array) {
    const result = [];
    const zSunNum = array[0] // gearSun
    const zRingNum = array[2] // gearRing
    result.push(0);
    result.push(1);
    result.push(1 + zSunNum / zRingNum);
    result.push(1 + (zSunNum / zRingNum) + (zSunNum / zRingNum) * (1 + (zSunNum / zRingNum)) / (1 - (zSunNum / zRingNum)));
    return dataXcodeArray = result;
}

// let dataCalcArray = []; // グラフの傾き・切片用配列
// function makeCalcArray(array, revNum) {
//     const result = [];
//     // 切片
//     result.push(Number(revNum));
//     // 傾きの算出 1次係数
//     result.push((0 - revNum) / 1.0);
//     // 2次係数
//     result.push(0);
//     return dataCalcArray = result;
// }

let dataYcodeArray = [];//y座標用の配列
function makeYcodeArray(array, revNum) {
    const result2 = [];
    const zSunNum = Number(array[0]); // gearSun
    const zRingNum = Number(array[2]); // gearRing
    const fixP = Number(0); // 固定部位なので回転はゼロ
    const ramda=zSunNum/zRingNum;
    
    result2.push(Number(revNum));
    result2.push(0);
    result2.push(Number((1 + ramda) * (fixP - Number(revNum)) + Number(revNum)));
    result2.push(Number((1 + ramda) / (1 - ramda) * (fixP - Number(revNum)) + Number(revNum)));
    return dataYcodeArray = result2;
}

// 式の定義として入れる場合
const func = (x, a) => {
    return a[0] + a[1] * x + a[2] * x ** 2;
};

// グラフの描画
function drawChart() {
    const ctx = document.getElementById('chart');
    const myChart = new Chart(ctx, {
        type: 'scatter',  // scatter=散布図
        data: {
            datasets: [{ // データ系列の設定
                // label: summaryName,// sammaryNo 凡例に表示する配列
                showLine: true, // 線を表示する
                pointRadius: 5, // ポイントの大きさ
                // XYデータの配列 式から作る場合
                // data: ((a) => { 
                //     const ret = [];
                //     for (let x = 0; x <= 3; x++) { // データの区切り　サン、キャリア、リング、ピニオンの間隔なので4点
                //         ret.push({ x: dataXcodeArray[x], y: func(x, a) });
                //     }
                //     return ret;
                // })(dataCalcArray), // [0]:切片 [1]:1次係数 [2]:2次係数
                // XYデータの配列　直接入力の場合
                data: [{
                    x:dataXcodeArray[0],
                    y:dataYcodeArray[0]
                },{
                    x:dataXcodeArray[1],
                    y:dataYcodeArray[1]
                },{
                    x:dataXcodeArray[2],
                    y:dataYcodeArray[2]
                },{
                    x:dataXcodeArray[3],
                    y:dataYcodeArray[3]
                }]
            }],
        },
        // グラフオプション
        options: {
            responsive: true, // レスポンシブ対応
            // x軸,y軸の設定
            scales: {
                x: {
                    type: 'linear',
                    display: false,
                    position: 'bottom',
                    min: -0.5,
                    max: 3.5,
                    title: {
                        display: true,
                        text: 'Gear Name',
                        font: {
                            size: 14,
                        }
                    },
                    ticks: {
                        stepSize: 1,
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    title: {
                        display: true,
                        text: 'number of revolutions[rpm]',
                        font: {
                            size: 14,
                        }
                    },
                }
            },
        },
    })
}

// グラフを消去する
// function destroyButtonClick(){
//     if (myChart) {
//         myChart.destroy();
//     }
// }
// let destroyButton = document.getElementById('destroyButton');
// inputRevButton.addEventListener('click', destroyButtonClick);

