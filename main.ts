function MediumCubeBuild () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . # .
        . . # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . # .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function loadingScreen () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.clearScreen()
    basic.showString("Loading project. Please hold.")
    basic.pause(5000)
    basic.clearScreen()
    basic.showString("Sizing Cube V2: loaded.")
}
function SmallCubeBuild () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function cubeBuild () {
    BigCubeBuild()
    MediumCubeBuild()
    SmallCubeBuild()
}
function BigCubeBuild () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
loadingScreen()
basic.forever(function () {
    cubeBuild()
})
control.inBackground(function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 4; index++) {
                for (let index = 0; index < 4; index++) {
                    for (let index = 0; index < 4; index++) {
                        for (let index = 0; index < 4; index++) {
                            for (let index = 0; index < 4; index++) {
                                for (let index = 0; index < 4; index++) {
                                    for (let index = 0; index < 4; index++) {
                                        for (let index = 0; index < 4; index++) {
                                            for (let index = 0; index < 4; index++) {
                                                for (let index = 0; index < 4; index++) {
                                                    for (let index = 0; index < 4; index++) {
                                                        for (let index = 0; index < 4; index++) {
                                                            for (let index = 0; index < 4; index++) {
                                                                for (let index = 0; index < 4; index++) {
                                                                    for (let index = 0; index < 4; index++) {
                                                                        for (let index = 0; index < 4; index++) {
                                                                            for (let index = 0; index < 4; index++) {
                                                                                for (let index = 0; index < 4; index++) {
                                                                                    for (let index = 0; index < 4; index++) {
                                                                                        for (let index = 0; index < 4; index++) {
                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                                            for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                                                        for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                                                            for (let index = 0; index < 100; index++) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                music.playMelody("C G E A F D B C5 ", 150)
                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                    for (let index = 0; index < 4; index++) {
                                                                                                                                                                                                                                                                                                                                                    	
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                                for (let index = 0; index < 4; index++) {
                                                                                                                                	
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
