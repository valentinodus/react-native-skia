import {
  Canvas,
  Text,
  useFont,
  Fill,
  Skia,
  SkTypeface,
  topLeft,
  center,
  bottomRight,
  vec,
  Glyphs,
  useClockValue,
  useComputedValue,
  Rect,
  useSpring,
  Selector,
  Blend,
  Group,
  BlendMode,
  enumKey,
  LinearGradient,
  rect,
} from "@shopify/react-native-skia";
// import { Skia } from "../Skia";
import { useMemo } from "react";
// import { Button } from "react-native";
// import { CoonsPatchMeshGradient } from "../Aurora/components/CoonsPatchMeshGradient";

// const MULT = 1;
const interval = 10000; // timeEnd - timeStart
// const duration = 500;

export const Skiappe2 = ({ assets }: Props) => {
  const fontSize = 32;
  const font = Skia.Font(assets.GorditaBold, fontSize);

  if (font === null) {
    return null;
  }

  const clock = useClockValue();

  const paint = Skia.Paint();
  paint.setBlendMode(BlendMode[enumKey("dstIn")]);

  const rectWidth = useComputedValue(() => {
    return ((clock.current % interval) / interval) * 710;
  }, [clock]);

  //   const rectWidth = useComputedValue(() => {
  //     return ((clock.current % interval) / interval) * 710;
  //   }, [clock]);

  const SIZE = 1000;
  const r1 = useMemo(() => rect(0, 0, SIZE, 80), [SIZE]);

  const glyphs = font.getGlyphIDs(lineLetterByLetter.x);

  const yFromTop = 50;
  const xFromLeft = 40;
  const widths = font.getGlyphWidths(glyphs);

  // let counterWidth = xFromLeft;

  // glyphs = [id, id2, id]
  // text = [{id, pos}, {id2, pos}]

  // glyphs.reduce((prev, id, i) => {
  //   const left
  //   acc += i > 0 ? widths[i - 1] : 0;

  //   const delta = rectWidth.current >= acc ? 30 : 0;
  //   console.log(rectWidth.current >= acc, acc);

  //   return { id, pos: vec(acc, yFromTop + delta) };
  // }, [xFromLeft, []]);

  const pos = useComputedValue(() => {
    let counterWidth = xFromLeft;

    return glyphs.map((id, i) => {
      counterWidth += i > 0 ? widths[i - 1] : 0;

      // make this fluid SKIAvo
      const delta = rectWidth.current + 10 >= counterWidth ? 5 : 0;

      return { x: counterWidth, y: yFromTop - delta };
    });
  }, [rectWidth]);

  return (
    <>
      <Canvas style={{ flex: 1 }}>
        <Rect rect={r1}>
          <LinearGradient
            start={topLeft(r1)}
            end={bottomRight(r1)}
            colors={["#61DAFB", "#fb61da"]}
          />
        </Rect>
        <Group>
          {glyphs.map((id, i) => {
            return (
              <Glyphs
                key={i}
                font={font}
                x={Selector(pos, (v) => v[i].x)}
                y={Selector(pos, (v) => v[i].y)}
                glyphs={[
                  {
                    id,
                    pos: vec(0, 0),
                  },
                ]}
                opacity={0.3}
                color="white"
              />
            );
          })}
        </Group>
        {/* <Text
          text={lineWordByWord.x}
          x={xFromLeft}
          y={yFromTop}
          font={font}
          opacity={0.3}
          color="white"
        /> */}
        <Group layer>
          <Rect x={0} y={0} width={rectWidth} height={300} color="white" />

          <Group layer={paint}>
            {/* <Text text={lineWordByWord.x} x={40} y={50} font={font} /> */}

            <Group>
              {glyphs.map((id, i) => (
                <Glyphs
                  key={i}
                  font={font}
                  x={Selector(pos, (v) => v[i].x)}
                  y={Selector(pos, (v) => v[i].y)}
                  glyphs={[{ id, pos: vec(0, 0) }]}
                />
              ))}
            </Group>
          </Group>
        </Group>
      </Canvas>
    </>
  );
};

interface Props {
  assets: {
    GorditaRegular: SkTypeface;
    GorditaBold: SkTypeface;
  };
}

const lineWordByWord = {
  ts: 40.6,
  te: 42.572,
  l: [
    {
      c: "What",
      o: 0,
    },
    {
      c: " ",
      o: 0.27,
    },
    {
      c: "doesn't",
      o: 0.293,
    },
    {
      c: " ",
      o: 0.487,
    },
    {
      c: "kill",
      o: 0.506,
    },
    {
      c: " ",
      o: 0.583,
    },
    {
      c: "you",
      o: 0.614,
    },
    {
      c: " ",
      o: 0.758,
    },
    {
      c: "makes",
      o: 0.836,
    },
    {
      c: " ",
      o: 1.152,
    },
    {
      c: "you",
      o: 1.237,
    },
    {
      c: " ",
      o: 1.445,
    },
    {
      c: "stronger",
      o: 1.531,
    },
  ],
  x: "What doesn't kill you makes you stronger",
};

const lineLetterByLetter = {
  ts: 40.6,
  te: 42.572,
  l: [
    {
      c: "W",
      o: 0.06,
    },
    {
      c: "h",
      o: 0.12,
    },
    {
      c: "a",
      o: 0.169,
    },
    {
      c: "t",
      o: 0.238,
    },
    {
      c: " ",
      o: 0.27,
    },
    {
      c: "d",
      o: 0.293,
    },
    {
      c: "o",
      o: 0.317,
    },
    {
      c: "e",
      o: 0.341,
    },
    {
      c: "s",
      o: 0.382,
    },
    {
      c: "n",
      o: 0.4079,
    },
    {
      c: "'",
      o: 0.435,
    },
    {
      c: "t",
      o: 0.458,
    },
    {
      c: " ",
      o: 0.487,
    },
    {
      c: "k",
      o: 0.506,
    },
    {
      c: "i",
      o: 0.522,
    },
    {
      c: "l",
      o: 0.537,
    },
    {
      c: "l",
      o: 0.562,
    },
    {
      c: " ",
      o: 0.583,
    },
    {
      c: "y",
      o: 0.614,
    },
    {
      c: "o",
      o: 0.643,
    },
    {
      c: "u",
      o: 0.709,
    },
    {
      c: " ",
      o: 0.758,
    },
    {
      c: "m",
      o: 0.836,
    },
    {
      c: "a",
      o: 0.889,
    },
    {
      c: "k",
      o: 0.969,
    },
    {
      c: "e",
      o: 1.034,
    },
    {
      c: "s",
      o: 1.089,
    },
    {
      c: " ",
      o: 1.152,
    },
    {
      c: "y",
      o: 1.237,
    },
    {
      c: "o",
      o: 1.296,
    },
    {
      c: "u",
      o: 1.358,
    },
    {
      c: " ",
      o: 1.445,
    },
    {
      c: "s",
      o: 1.531,
    },
    {
      c: "t",
      o: 1.59,
    },
    {
      c: "r",
      o: 1.659,
    },
    {
      c: "o",
      o: 1.736,
    },
    {
      c: "n",
      o: 1.827,
    },
    {
      c: "g",
      o: 1.857,
    },
    {
      c: "e",
      o: 1.861,
    },
    {
      c: "r",
      o: 1.861,
    },
  ],
  x: "What doesn't kill you makes you stronger",
};