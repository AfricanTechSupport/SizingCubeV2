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
def loadingScreen():
    basic.show_leds("""
        . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
    """)
    basic.show_leds("""
        . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
    """)
    basic.show_leds("""
        . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
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
loadingScreen()

def on_forever():
    cubeBuild()
basic.forever(on_forever)

def on_in_background():
    for index in range(4):
        for index2 in range(4):
            for index3 in range(4):
                for index4 in range(4):
                    for index5 in range(4):
                        for index6 in range(4):
                            for index7 in range(4):
                                for index8 in range(4):
                                    for index9 in range(4):
                                        for index10 in range(4):
                                            for index11 in range(4):
                                                for index12 in range(4):
                                                    for index13 in range(4):
                                                        for index14 in range(4):
                                                            for index15 in range(4):
                                                                for index16 in range(4):
                                                                    for index17 in range(4):
                                                                        for index18 in range(4):
                                                                            for index19 in range(4):
                                                                                for index20 in range(4):
                                                                                    for index21 in range(4):
                                                                                        for index22 in range(4):
                                                                                            for index23 in range(4):
                                                                                                for index24 in range(4):
                                                                                                    for index25 in range(4):
                                                                                                        for index26 in range(4):
                                                                                                            for index27 in range(4):
                                                                                                                for index28 in range(4):
                                                                                                                    for index29 in range(4):
                                                                                                                        for index30 in range(4):
                                                                                                                            for index31 in range(4):
                                                                                                                                for index32 in range(4):
                                                                                                                                    for index33 in range(4):
                                                                                                                                        for index34 in range(4):
                                                                                                                                            for index35 in range(4):
                                                                                                                                                for index36 in range(4):
                                                                                                                                                    for index37 in range(4):
                                                                                                                                                        for index38 in range(4):
                                                                                                                                                            for index39 in range(4):
                                                                                                                                                                for index40 in range(4):
                                                                                                                                                                    for index41 in range(4):
                                                                                                                                                                        for index42 in range(4):
                                                                                                                                                                            for index43 in range(4):
                                                                                                                                                                                for index44 in range(4):
                                                                                                                                                                                    for index45 in range(4):
                                                                                                                                                                                        for index46 in range(4):
                                                                                                                                                                                            for index47 in range(4):
                                                                                                                                                                                                for index48 in range(4):
                                                                                                                                                                                                    for index49 in range(4):
                                                                                                                                                                                                        for index50 in range(4):
                                                                                                                                                                                                            for index51 in range(4):
                                                                                                                                                                                                                for index52 in range(4):
                                                                                                                                                                                                                    for index53 in range(4):
                                                                                                                                                                                                                        for index54 in range(4):
                                                                                                                                                                                                                            for index55 in range(4):
                                                                                                                                                                                                                                for index56 in range(4):
                                                                                                                                                                                                                                    for index57 in range(4):
                                                                                                                                                                                                                                        for index58 in range(4):
                                                                                                                                                                                                                                            for index59 in range(4):
                                                                                                                                                                                                                                                for index60 in range(4):
                                                                                                                                                                                                                                                    for index61 in range(4):
                                                                                                                                                                                                                                                        for index62 in range(4):
                                                                                                                                                                                                                                                            for index63 in range(4):
                                                                                                                                                                                                                                                                for index64 in range(4):
                                                                                                                                                                                                                                                                    for index65 in range(4):
                                                                                                                                                                                                                                                                        for index66 in range(4):
                                                                                                                                                                                                                                                                            for index67 in range(4):
                                                                                                                                                                                                                                                                                for index68 in range(4):
                                                                                                                                                                                                                                                                                    for index69 in range(4):
                                                                                                                                                                                                                                                                                        for index70 in range(4):
                                                                                                                                                                                                                                                                                            for index71 in range(4):
                                                                                                                                                                                                                                                                                                for index72 in range(4):
                                                                                                                                                                                                                                                                                                    for index73 in range(4):
                                                                                                                                                                                                                                                                                                        for index74 in range(4):
                                                                                                                                                                                                                                                                                                            for index75 in range(4):
                                                                                                                                                                                                                                                                                                                for index76 in range(4):
                                                                                                                                                                                                                                                                                                                    for index77 in range(4):
                                                                                                                                                                                                                                                                                                                        for index78 in range(4):
                                                                                                                                                                                                                                                                                                                            for index79 in range(4):
                                                                                                                                                                                                                                                                                                                                for index80 in range(4):
                                                                                                                                                                                                                                                                                                                                    for index81 in range(4):
                                                                                                                                                                                                                                                                                                                                        for index82 in range(4):
                                                                                                                                                                                                                                                                                                                                            for index83 in range(4):
                                                                                                                                                                                                                                                                                                                                                for index84 in range(4):
                                                                                                                                                                                                                                                                                                                                                    for index85 in range(4):
                                                                                                                                                                                                                                                                                                                                                        for index86 in range(4):
                                                                                                                                                                                                                                                                                                                                                            for index87 in range(4):
                                                                                                                                                                                                                                                                                                                                                                for index88 in range(4):
                                                                                                                                                                                                                                                                                                                                                                    for index89 in range(4):
                                                                                                                                                                                                                                                                                                                                                                        for index90 in range(4):
                                                                                                                                                                                                                                                                                                                                                                            for index91 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                for index92 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                    for index93 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                        for index94 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                            for index95 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                                for index96 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                                    for index97 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                                        for index98 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                                            for index99 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                                                for index100 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                                                    for index101 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                                                        for index102 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                                                            for index103 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                                                                for index104 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                                                                    for index105 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                                                                        for index106 in range(4):
                                                                                                                                                                                                                                                                                                                                                                                                                                            for index107 in range(100):
                                                                                                                                                                                                                                                                                                                                                                                                                                                music.play_melody("C G E A F D B C5 ", 150)
                                                                                                                                                                                                                                                                                                                                                    for index108 in range(4):
                                                                                                                                                                                                                                                                                                                                                        pass
                                                                                                                                for index109 in range(4):
                                                                                                                                    pass
control.in_background(on_in_background)
