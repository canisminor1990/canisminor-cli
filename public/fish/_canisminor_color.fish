function _canisminor_color
 
 # Color Token
 set -g white                            A1A09A
 set -g white_bright                     EDEDEC
 set -g black                            353431
 set -g black_bright                     51504B
 set -g red                              E5484D
 set -g red_bright                       FF6369
 set -g orange                           FFB224
 set -g orange_bright                    FFCB47
 set -g yellow                           F5D90A
 set -g yellow_bright                    FFEF5C
 set -g green                            99D52A
 set -g green_bright                     C4F042
 set -g cyan                             68DDFD
 set -g cyan_bright                      8AE8FF
 set -g blue                             0091FF
 set -g blue_bright                      52A9FF
 set -g magenta                          AB4ABA
 set -g magenta_bright                   D864D8
 
 # Set Color
 set -g set_color_white                  (set_color $white)
 set -g set_color_white_bright           (set_color $white_bright)
 set -g set_color_black                  (set_color $black)
 set -g set_color_black_bright           (set_color $black_bright)
 set -g set_color_red                    (set_color $red)
 set -g set_color_red_bright             (set_color $red_bright)
 set -g set_color_orange                 (set_color $orange)
 set -g set_color_orange_bright          (set_color $orange_bright)
 set -g set_color_yellow                 (set_color $yellow)
 set -g set_color_yellow_bright          (set_color $yellow_bright)
 set -g set_color_green                  (set_color $green)
 set -g set_color_green_bright           (set_color $green_bright)
 set -g set_color_cyan                   (set_color $cyan)
 set -g set_color_cyan_bright            (set_color $cyan_bright)
 set -g set_color_blue                   (set_color $blue)
 set -g set_color_blue_bright            (set_color $blue_bright)
 set -g set_color_magenta                (set_color $magenta)
 set -g set_color_magenta_bright         (set_color $magenta_bright)
 set -g reset_color                      (set_color normal)
end