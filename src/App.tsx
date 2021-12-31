import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [td, settd] = useState<JSX.Element>();
  const [tt, settt] = useState<JSX.Element>();
  const [ttt, setttt] = useState<JSX.Element>();
  const [tj, settj] = useState<JSX.Element>();

  var dateTime = new Date();
  var j = [
    "星期天",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  var J = [
    "xīngqítiān",
    "xīngqíyī",
    "xīngqí'èr",
    "xīngqísān",
    "xīngqísì",
    "xīngqíwǔ",
    "xīngqíliù",
  ];
  var d = [
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二",
    "十三",
    "十四",
    "十五",
    "十六",
    "十七",
    "十八",
    "十九",
    "二十",
    "二十一",
    "二十二",
    "二十三",
    "二十四",
    "二十五",
    "二十六",
    "二十七",
    "二十八",
    "二十九",
    "三十",
    "三十一",
    "三十二",
    "三十三",
    "三十四",
    "三十五",
    "三十六",
    "三十七",
    "三十八",
    "三十九",
    "四十",
    "四十一",
    "四十二",
    "四十三",
    "四十四",
    "四十五",
    "四十六",
    "四十七",
    "四十八",
    "四十九",
    "五十",
    "五十一",
    "五十二",
    "五十三",
    "五十四",
    "五十五",
    "五十六",
    "五十七",
    "五十八",
    "五十九",
  ];
  var D = [
    "líng",
    "yī",
    "èr",
    "sān",
    "sì",
    "wǔ",
    "liù",
    "qī",
    "bā",
    "jiǔ",
    "shí",
    "shíyī",
    "shí'èr",
    "shísān",
    "shísì",
    "shíwǔ",
    "shíliù",
    "shíqī",
    "shíbā",
    "shíjiǔ",
    "èrshí",
    "èrshiyī",
    "èrshièr",
    "èrshisān",
    "èrshisì",
    "èrshiwǔ",
    "èrshiliù",
    "èrshiqī",
    "èrshibā",
    "èrshijiǔ",
    "sānshí",
    "sānshiyī",
    "Sānshièr",
    "sānshisān",
    "sānshisì",
    "sānshiwǔ",
    "sānshiliù",
    "sānshiqī",
    "sānshibā",
    "sānshijiǔ",
    "sìshí",
    "sìshiyī",
    "sìshièr",
    "sìshisān",
    "sìshisì",
    "sìshiwǔ",
    "sìshiliù",
    "sìshiqī",
    "sìshibā",
    "sìshijiǔ",
    "wǔshí",
    "wǔshiyī",
    "wǔshièr",
    "wǔshisān",
    "wǔshisì",
    "wǔshiwǔ",
    "wǔshiliù",
    "wǔshiqī",
    "wǔshibā",
    "wǔshijiǔ",
  ];
  var h = ["上午", "下午"];
  var H = ["shàngwǔ", "xiàwǔ"];
  useEffect(() => {
    const timer = setInterval(() => {
      settd(
        <>
          <ruby>
            今天 是<rt>Jīntiān shì</rt>
          </ruby>
          <> </>
          <ruby>
            {d[dateTime.getMonth() + 1]}
            <rt>{D[dateTime.getMonth() + 1]}</rt>
          </ruby>
          <> </>
          <ruby>
            月<rt>yuè</rt>
          </ruby>
          <> </>
          <ruby>
            {d[dateTime.getDate()]}
            <rt>{D[dateTime.getDate()]}</rt>
          </ruby>
          <> </>
          <ruby>
            号<rt>hào</rt>
          </ruby>
          。
        </>
      );
      var f = (
        <>
          <ruby>
            现在 是<rt>Xiànzài shì</rt>
          </ruby>
          <> </>
          <ruby>
            {dateTime.getHours() === 2 ? "两" : d[dateTime.getHours()]}
            <rt>
              {dateTime.getHours() === 2 ? "liǎng" : D[dateTime.getHours()]}
            </rt>
          </ruby>
          <> </>
          <ruby>
            点<rt>diǎn</rt>
          </ruby>
          <> </>
        </>
      );
      var g = (
        <>
          <ruby>
            现在 是<rt>Xiànzài shì</rt>
          </ruby>
          <> </>
          <ruby>
            {dateTime.getHours() > 12
              ? dateTime.getHours() - 12 === 2
                ? "下午 两"
                : "下午 " + d[dateTime.getHours() - 12]
              : dateTime.getHours() === 2
              ? "上午 两"
              : "上午 " + d[dateTime.getHours()]}
            <rt>
              {dateTime.getHours() > 12
                ? dateTime.getHours() - 12 === 2
                  ? "shàngwǔ liǎng"
                  : "shàngwǔ " + D[dateTime.getHours() - 12]
                : dateTime.getHours() === 2
                ? "xiàwǔ liǎng"
                : "xiàwǔ " + D[dateTime.getHours()]}
            </rt>
          </ruby>
          <> </>
          <ruby>
            点<rt>diǎn</rt>
          </ruby>
          <> </>
        </>
      );

      setttt(
        <>
          {dateTime.getMinutes() === 0 ? (
            <>
              {g}
              <> </>
              <ruby>
                钟<rt>zhōng</rt>
              </ruby>
            </>
          ) :dateTime.getMinutes() === 15||dateTime.getMinutes()===45?(
            <>
              {g}
              <> </>
              <ruby>
              {d[dateTime.getTime()%15]}<rt>{D[dateTime.getTime()%15]}</rt>
              </ruby>
              <> </>
              <ruby>
                刻<rt>kè</rt>
              </ruby> 
            </>
          ):dateTime.getMinutes() === 30?(
          <>
            {g}
            <> </>
            <ruby>
            半<rt>bàn</rt>
            </ruby> 
          </>
          ) :dateTime.getMinutes() < 10 ? (
            <>
              {g}
              <ruby>
                零{d[dateTime.getMinutes()]}
                <rt>líng{D[dateTime.getMinutes()]}</rt>
              </ruby>
              <> </>
              <ruby>
                分<rt>fēn</rt>
              </ruby>
            </>
          ) : (
            <>
              {g}
              <ruby>
                {d[dateTime.getMinutes()]}
                <rt>{D[dateTime.getMinutes()]}</rt>
              </ruby>
              <> </>
              <ruby>
                分<rt>fēn</rt>
              </ruby>
            </>
          )}
          。
        </>
      );

      settt(
        <>
          {dateTime.getMinutes() === 0 ? (
            <>
              {f}
              <> </>
              <ruby>
                钟<rt>zhōng</rt>
              </ruby>
            </>
          ) : dateTime.getMinutes() < 10 ? (
            <>
              {f}
              <ruby>
                零{d[dateTime.getMinutes()]}
                <rt>líng{D[dateTime.getMinutes()]}</rt>
              </ruby>
              <> </>
              <ruby>
                分<rt>fēn</rt>
              </ruby>
            </>
          ) : (
            <>
              {f}
              <ruby>
                {d[dateTime.getMinutes()]}
                <rt>{D[dateTime.getMinutes()]}</rt>
              </ruby>
              <> </>
              <ruby>
                分<rt>fēn</rt>
              </ruby>
            </>
          )}
          。
        </>
      );


      settj(
        <>
          <ruby>
            今天 是<rt>Jīntiān shì</rt>
          </ruby>
          <> </>
          <ruby>
            {j[dateTime.getDay()]}
            <rt>{J[dateTime.getDay()]}</rt>
          </ruby>
          。
        </>
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [j, J, D, d, dateTime]);
  return (
    <div className="App">
      <p>{td}</p>
      <p>{tj}</p>
      <p>
        {tt}
        <br />
        {ttt}
      </p>
    </div>
  );
}

export default App;
