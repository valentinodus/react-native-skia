import {
  Canvas,
  Text,
  useFont,
  Fill,
  Skia,
  SkTypeface,
  vec,
  Glyphs,
  useClockValue,
  useComputedValue,
  Rect,
  useSpring,
  Selector,
  bottomRight,
  LinearGradient,
  topLeft,
  Points,
  Vertices,
  Group,
} from "@shopify/react-native-skia";
// import { Skia } from "../Skia";
import { useMemo, useState } from "react";
import { Button, useWindowDimensions } from "react-native";

const MULT = 1;
const interval = 1972 * MULT; // timeEnd - timeStart
const duration = 500;

export const Skiappe = ({ assets }: Props) => {
  const fontSize = 54;
  const font = Skia.Font(assets.GorditaBold, fontSize);

  if (font === null) {
    return null;
  }

  //   const [toggled, setToggled] = useState(false);
  //   const position = useSpring(toggled ? 100 : 0);

  const clock = useClockValue();
  //   const opacity = useComputedValue(() => {
  //     return (clock.current % interval) / interval;
  //   }, [clock]);

  const glyphs = font.getGlyphIDs(lineLetterByLetter.x);

  const widths = font.getGlyphWidths(glyphs);

  let counterWidth = 300;
  const text = useMemo(
    () =>
      glyphs.map((id, i) => {
        counterWidth += i > 0 ? widths[i - 1] : 0;

        return { id, pos: vec(counterWidth, 0) };
      }),
    [glyphs, widths]
  );

  let counterWidth2 = 0;
  const text2 = useMemo(
    () =>
      glyphs.map((id, i) => {
        counterWidth2 += i > 0 ? widths[i - 1] : 0;

        return {
          id,
          pos: vec(counterWidth2, 160 - 0 /*lineLetterByLetter.l[i].o * 100*/),
        };
      }),
    [glyphs, widths]
  );

  let counterWidth3 = 0;
  const text3 = useMemo(
    () =>
      glyphs.map((id, i) => {
        counterWidth3 += i > 0 ? widths[i - 1] : 0;

        return { id, pos: vec(counterWidth3, 100 + Math.random() * 30) };
      }),
    [glyphs, widths]
  );

  const opacities = useComputedValue(() => {
    // return (clock.current % interval) / interval; // % progress
    const progress = (clock.current % interval) / interval;

    // offset / interval // % inizio di una lettera

    return glyphs.map((id, i) => {
      const offset = lineLetterByLetter.l[i].o * 1000 * MULT;
      const letterStart = offset / interval;
      // const letterEnd = (offset + duration) / interval

      if (progress <= letterStart) {
        return 0;
      } else {
        const letterProgress =
          ((progress * 100 - letterStart * 100) / duration) * 100;

        return letterProgress > 1 ? 1 : letterProgress;
      }
    });
    // durata di una lettera

    // 1. restituire un array di lettere

    // 2. delay fra lettera
  }, [clock]);

  //   ts - durata

  const vertices = [vec(256, 256), vec(325, 364), vec(195, 364)];

  const colors = ["#5E60D5", "#5E60D5", "#5E60D5"];

  return (
    <>
      <Canvas style={{ flex: 1 }}>
        <Group transform={[{ translateY: 300 }, { translateX: 300 }]}>
          {/* <Rect rect={r1}>
            <LinearGradient
                start={topLeft(r1)}
                end={bottomRight(r1)}
                colors={["#61DAFB", "#fb61da"]}
            />
        </Rect> */}
          <Fill color="#F7B801" />

          <Group transform={[{ rotate: 0.95 }, { translateY: -380 }]}>
            {text.map((gliph, i) => (
              <Glyphs
                key={i}
                font={font}
                glyphs={[gliph]}
                opacity={Selector(opacities, (v) => v[i])}
              />
            ))}
          </Group>
          <Group transform={[{ rotate: 0.95 }, { translateY: -450 }]}>
            {text.map((gliph, i) => (
              <Glyphs
                key={i}
                font={font}
                glyphs={[gliph]}
                opacity={Selector(opacities, (v) => v[i])}
              />
            ))}
          </Group>
          <Group transform={[{ rotate: 0.95 }, { translateY: -310 }]}>
            {text.map((gliph, i) => (
              <Glyphs
                key={i}
                font={font}
                glyphs={[gliph]}
                opacity={Selector(opacities, (v) => v[i])}
              />
            ))}
          </Group>
          <Group transform={[{ rotate: 0.95 }, { translateY: -520 }]}>
            {text.map((gliph, i) => (
              <Glyphs
                key={i}
                font={font}
                glyphs={[gliph]}
                opacity={Selector(opacities, (v) => v[i])}
              />
            ))}
          </Group>

          <Group transform={[{ rotate: 0.95 }, { translateY: -590 }]}>
            {text.map((gliph, i) => (
              <Glyphs
                key={i}
                font={font}
                glyphs={[gliph]}
                opacity={Selector(opacities, (v) => v[i])}
              />
            ))}
          </Group>

          <Group
            transform={[
              { rotate: -0.95 },
              { translateY: 25 },
              { translateX: -150 },
            ]}
          >
            {text3.map((gliph, i) => (
              <Glyphs
                key={i}
                font={font}
                glyphs={[gliph]}
                opacity={Selector(opacities, (v) => v[i])}
              />
            ))}
          </Group>

          <Group
            transform={[
              { rotate: -0.95 },
              { translateY: 250 },
              { translateX: -150 },
            ]}
          >
            {text3.map((gliph, i) => (
              <Glyphs
                key={i}
                font={font}
                glyphs={[gliph]}
                opacity={Selector(opacities, (v) => v[i])}
              />
            ))}
          </Group>

          <Group
            transform={[
              { rotate: -0.95 },
              { translateY: 175 },
              { translateX: -150 },
            ]}
          >
            {text3.map((gliph, i) => (
              <Glyphs
                key={i}
                font={font}
                glyphs={[gliph]}
                opacity={Selector(opacities, (v) => v[i])}
              />
            ))}
          </Group>

          <Group
            transform={[
              { rotate: -0.95 },
              { translateY: 100 },
              { translateX: -150 },
            ]}
          >
            {text3.map((gliph, i) => (
              <Glyphs
                key={i}
                font={font}
                glyphs={[gliph]}
                opacity={Selector(opacities, (v) => v[i])}
              />
            ))}
          </Group>
          {/*         
        {text3.map((gliph, i) => <Glyphs
          key={i}
          font={font}
          glyphs={[gliph]}
          opacity={Selector(opacities, (v) => v[i])}
        />)} */}

          {/* <Glyphs
          font={font}
          glyphs={text}
          opacity={opacity}
        /> */}
          <Vertices
            transform={[
              { scale: 2 },
              { translateY: -200 },
              { translateX: -50 },
            ]}
            vertices={vertices}
            colors={colors}
          />
          {/* <Text
          x={0}
          y={fontSize}
          text={lineLetterByLetter.x}
          font={font}
        /> */}
          {/* <Rect x={position} y={100} width={10} height={10} color={"red"} /> */}
        </Group>
      </Canvas>
      {/* <Button title="Toggle" onPress={() => setToggled((p) => !p)} /> */}
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

const line2 = {
  ts: 43.77,
  te: 44.955,
  l: [
    {
      c: "S",
      o: 0,
    },
    {
      c: "t",
      o: 0,
    },
    {
      c: "a",
      o: 0.081,
    },
    {
      c: "n",
      o: 0.129,
    },
    {
      c: "d",
      o: 0.167,
    },
    {
      c: " ",
      o: 0.231,
    },
    {
      c: "a",
      o: 0.341,
    },
    {
      c: " ",
      o: 0.415,
    },
    {
      c: "l",
      o: 0.471,
    },
    {
      c: "i",
      o: 0.512,
    },
    {
      c: "t",
      o: 0.557,
    },
    {
      c: "t",
      o: 0.597,
    },
    {
      c: "l",
      o: 0.646,
    },
    {
      c: "e",
      o: 0.713,
    },
    {
      c: " ",
      o: 0.781,
    },
    {
      c: "t",
      o: 0.831,
    },
    {
      c: "a",
      o: 0.886,
    },
    {
      c: "l",
      o: 0.965,
    },
    {
      c: "l",
      o: 1.035,
    },
    {
      c: "e",
      o: 1.1259,
    },
    {
      c: "r",
      o: 1.185,
    },
  ],
  x: "Stand a little taller",
};

const line3 = {
  ts: 45.85,
  te: 48.205,
  l: [
    {
      c: "D",
      o: 0,
    },
    {
      c: "o",
      o: 0,
    },
    {
      c: "e",
      o: 0.027,
    },
    {
      c: "s",
      o: 0.037,
    },
    {
      c: "n",
      o: 0.05,
    },
    {
      c: "'",
      o: 0.073,
    },
    {
      c: "t",
      o: 0.094,
    },
    {
      c: " ",
      o: 0.124,
    },
    {
      c: "m",
      o: 0.243,
    },
    {
      c: "e",
      o: 0.269,
    },
    {
      c: "a",
      o: 0.303,
    },
    {
      c: "n",
      o: 0.4079,
    },
    {
      c: " ",
      o: 0.447,
    },
    {
      c: "I",
      o: 0.483,
    },
    {
      c: "'",
      o: 0.521,
    },
    {
      c: "m",
      o: 0.559,
    },
    {
      c: " ",
      o: 0.595,
    },
    {
      c: "l",
      o: 0.625,
    },
    {
      c: "o",
      o: 0.652,
    },
    {
      c: "n",
      o: 0.687,
    },
    {
      c: "e",
      o: 0.727,
    },
    {
      c: "l",
      o: 0.792,
    },
    {
      c: "y",
      o: 0.832,
    },
    {
      c: " ",
      o: 0.868,
    },
    {
      c: "w",
      o: 0.914,
    },
    {
      c: "h",
      o: 0.952,
    },
    {
      c: "e",
      o: 0.99,
    },
    {
      c: "n",
      o: 1.056,
    },
    {
      c: " ",
      o: 1.133,
    },
    {
      c: "I",
      o: 1.214,
    },
    {
      c: "'",
      o: 1.256,
    },
    {
      c: "m",
      o: 1.31,
    },
    {
      c: " ",
      o: 1.413,
    },
    {
      c: "a",
      o: 1.493,
    },
    {
      c: "l",
      o: 1.589,
    },
    {
      c: "o",
      o: 1.665,
    },
    {
      c: "n",
      o: 1.671,
    },
    {
      c: "e",
      o: 1.671,
    },
  ],
  x: "Doesn't mean I'm lonely when I'm alone",
};
