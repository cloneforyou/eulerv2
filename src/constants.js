// There might be other configuration than pixel shape later...
export const PRODUCTION_QUALITY_CAMERA_CONFIG = {
    "pixel_height": 1440,
    "pixel_width": 2560,
    "frame_rate": 60,
}

export const HIGH_QUALITY_CAMERA_CONFIG = {
    "pixel_height": 1080,
    "pixel_width": 1920,
    "frame_rate": 60,
}

export const MEDIUM_QUALITY_CAMERA_CONFIG = {
    "pixel_height": 720,
    "pixel_width": 1280,
    "frame_rate": 30,
}

export const LOW_QUALITY_CAMERA_CONFIG = {
    "pixel_height": 480,
    "pixel_width": 854,
    "frame_rate": 15,
}

export const DEFAULT_PIXEL_HEIGHT = PRODUCTION_QUALITY_CAMERA_CONFIG["pixel_height"]
export const DEFAULT_PIXEL_WIDTH = PRODUCTION_QUALITY_CAMERA_CONFIG["pixel_width"]
export const DEFAULT_FRAME_RATE = 60

export const DEFAULT_POINT_DENSITY_2D = 25
export const DEFAULT_POINT_DENSITY_1D = 250

export const FRAME_HEIGHT = 8.0
export const FRAME_WIDTH = FRAME_HEIGHT * DEFAULT_PIXEL_WIDTH / DEFAULT_PIXEL_HEIGHT
export const FRAME_Y_RADIUS = FRAME_HEIGHT / 2
export const FRAME_X_RADIUS = FRAME_WIDTH / 2

export const SMALL_BUFF = 0.1
export const MED_SMALL_BUFF = 0.25
export const MED_LARGE_BUFF = 0.5
export const LARGE_BUFF = 1

export const DEFAULT_MOBJECT_TO_EDGE_BUFFER = MED_LARGE_BUFF
export const DEFAULT_MOBJECT_TO_MOBJECT_BUFFER = MED_SMALL_BUFF


// All in seconds
export const DEFAULT_POINTWISE_FUNCTION_RUN_TIME = 3.0
export const DEFAULT_WAIT_TIME = 1.0


export const ORIGIN = [0, 0, 0]
export const UP     = [0, 1, 0]
export const DOWN   = [0, -1, 0]
export const RIGHT  = [1, 0, 0]
export const LEFT   = [-1, 0, 0]
export const IN     = [0, 0, -1]
export const OUT    = [0, 0, 1]
export const X_AXIS = [1, 0, 0]
export const Y_AXIS = [0, 1, 0]
export const Z_AXIS = [0, 0, 1]

// Useful abbreviations for diagonals
export const UL = [-1, 1, 0]
export const UR = [1, 1, 0]
export const DL = [-1, -1, 0]
export const DR = [1, -1, 0]

export const TOP = FRAME_Y_RADIUS * UP
export const BOTTOM = FRAME_Y_RADIUS * DOWN
export const LEFT_SIDE = FRAME_X_RADIUS * LEFT
export const RIGHT_SIDE = FRAME_X_RADIUS * RIGHT

export const PI = 3.141592653589793
export const TAU = 2 * PI
export const DEGREES = TAU / 360

export const DARK_BLUE="#236B8E"
export const DARK_BROWN="#8B4513"
export const LIGHT_BROWN="#CD853F"
export const BLUE_E="#1C758A"
export const BLUE_D="#29ABCA"
export const BLUE_C="#58C4DD"
export const BLUE_B="#9CDCEB"
export const BLUE_A="#C7E9F1"
export const BLUE=BLUE_C
export const TEAL_E="#49A88F"
export const TEAL_D="#55C1A7"
export const TEAL_C="#5CD0B3"
export const TEAL_B="#76DDC0"
export const TEAL_A="#ACEAD7"
export const TEAL=TEAL_C
export const GREEN_E="#699C52"
export const GREEN_D="#77B05D"
export const GREEN_C="#83C167"
export const GREEN_B="#A6CF8C"
export const GREEN_A="#C9E2AE"
export const GREEN=GREEN_C
export const YELLOW_E="#E8C11C"
export const YELLOW_D="#F4D345"
export const YELLOW_C="#FFFF00"
export const YELLOW_B="#FFEA94"
export const YELLOW_A="#FFF1B6"
export const YELLOW=YELLOW_C
export const GOLD_E="#C78D46"
export const GOLD_D="#E1A158"
export const GOLD_C="#F0AC5F"
export const GOLD_B="#F9B775"
export const GOLD_A="#F7C797"
export const GOLD=GOLD_C
export const RED_E="#CF5044"
export const RED_D="#E65A4C"
export const RED_C="#FC6255"
export const RED_B="#FF8080"
export const RED_A="#F7A1A3"
export const RED=RED_C
export const MAROON_E="#94424F"
export const MAROON_D="#A24D61"
export const MAROON_C="#C55F73"
export const MAROON_B="#EC92AB"
export const MAROON_A="#ECABC1"
export const MAROON=MAROON_C
export const PURPLE_E="#644172"
export const PURPLE_D="#715582"
export const PURPLE_C="#9A72AC"
export const PURPLE_B="#B189C6"
export const PURPLE_A="#CAA3E8"
export const PURPLE=PURPLE_C
export const WHITE="#FFFFFF"
export const BLACK="#000000"
export const LIGHT_GRAY="#BBBBBB"
export const LIGHT_GREY="#BBBBBB"
export const GRAY="#888888"
export const GREY="#888888"
export const DARK_GREY="#444444"
export const DARK_GRAY="#444444"
export const GREY_BROWN="#736357"
export const PINK="#D147BD"
export const GREEN_SCREEN="#00FF00"
export const ORANGE="#FF862F"

// MobjectLab
export const SHORT_NAME_MAP = {
  "ReplacementTransform": "RTransform",
};

export const EXAMPLE_CODE =
`from manimlib.imports import *

class SquareToCircle(WebScene):
    def construct(self):
        circle = Circle()
        square = Square()
        square.flip(RIGHT)
        square.rotate(-3 * TAU / 8)
        circle.set_fill(PINK, opacity=0.5)

        self.play(ShowCreation(square))
        self.play(ReplacementTransform(square, circle))
        self.play(FadeOut(circle))


class WriteStuff(WebScene):
    def construct(self):
        example_text = TextMobject(
            "This is a some text",
            tex_to_color_map={"text": YELLOW}
        )
        example_tex = TexMobject(
            "\\sum_{k=1}^\\infty {1 \\over k^2} = {\\pi^2 \\over 6}",
            # "\\int_{-\\infty}^\\infty {e^{x^{-2}}}dx= {\\sqrt{\\pi}}",
        )
        group = VGroup(example_text, example_tex)
        group.arrange(DOWN)
        group.set_width(FRAME_WIDTH - 2 * LARGE_BUFF)

        self.play(Write(example_text))
        self.play(Write(example_tex))
        self.wait()
`;

/*
class WarpSquare(WebScene):
    def construct(self):
        square = Square()
        self.play(ApplyPointwiseFunction(
            lambda point: complex_to_R3(np.exp(R3_to_complex(point))),
            square
        ))
        self.wait()


class GroupExample(WebScene):
    def construct(self):
        c1 = Circle().shift(LEFT)
        s1 = Square().shift(RIGHT)
        g1 = Group(c1, s1)

        c2 = Circle().shift(RIGHT + 2 * DOWN)
        s2 = Square().shift(LEFT + 2 * DOWN)
        r2 = Rectangle(height=4, width=2) \\
               .shift(2 * LEFT + 2 * DOWN)
        g2 = Group(r2, s2, c2)

        self.play(FadeIn(g1))
        self.play(ReplacementTransform(g1, g2))
        self.play(FadeOut(c2))
        self.wait()


class AlignDataExample(WebScene):
  def construct(self):
      c1 = Circle().shift(LEFT)
      s1 = Square().shift(RIGHT)
      g1 = Group(c1, s1)

      c2 = Circle().shift(RIGHT + 2 * DOWN)
      self.play(FadeIn(g1))
      self.play(ReplacementTransform(g1, c2))
*/

export const RELEASE_NOTES =
`Implemented the entire Latex pipeline across MathJax, Manim and Two. The web
Latex implementation circumvents Manim's svg renderer entirely in favor of the
one in two.js. Also implemented a crude forwarding of transformations  (
rotation and scale) from Manim.`;

// Height of a latex a in Manim space.
export const aHeightManim = 0.22565395;
