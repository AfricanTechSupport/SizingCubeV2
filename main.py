def MediumCubeBuild():
    basic.show_leds("""
        . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # # .
                . # . # .
                . # # # .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # # .
                . . . # .
                . # # # .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # # .
                . . . # .
                . . # # .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # # .
                . . . # .
                . . . # .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # # .
                . . . # .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # # .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
def loadingScreen():
    basic.show_leds("""
        # # # # #
                # . . . #
                # . # . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
    """)
    basic.show_leds("""
        # # # # #
                # . . . #
                # . # . #
                # . . . #
                # # # # #
    """)
    basic.clear_screen()
    basic.show_string("Loading project. Please hold.")
    basic.pause(5000)
    basic.clear_screen()
    basic.show_string("Sizing Cube V2: loaded.")
def SmallCubeBuild():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
def melodyPlay():
    for index in range(100):
        music.play_melody("C D E D C D E F ", 150)
def cubeBuild():
    BigCubeBuild()
    MediumCubeBuild()
    SmallCubeBuild()
def BigCubeBuild():
    basic.show_leds("""
        # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        # # # . #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        # # . . #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        # . . . #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        . . . . #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        . . . . #
                . . . . #
                # . . . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        . . . . #
                . . . . #
                . . . . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        . . . . #
                . . . . #
                . . . . #
                . . . . #
                # # # # #
    """)
    basic.show_leds("""
        . . . . #
                . . . . #
                . . . . #
                . . . . #
                . # # # #
    """)
    basic.show_leds("""
        . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . # # #
    """)
    basic.show_leds("""
        . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . . # #
    """)
    basic.show_leds("""
        . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
    """)
    basic.show_leds("""
        . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . . . .
    """)
    basic.show_leds("""
        . . . . #
                . . . . #
                . . . . #
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . #
                . . . . #
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
loadingScreen()

def on_forever():
    melodyPlay()
    cubeBuild()
basic.forever(on_forever)
