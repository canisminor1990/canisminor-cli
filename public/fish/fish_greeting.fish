function __add_spacing -a item length
	for i in (seq 1 $length)
  	echo -n $item
  end
end

function fish_greeting
	# Setup Theme
  fish_color

  # Gradient Color
  set -l g_0 (set_color E855B3)
  set -l g_1 (set_color D258C9)
  set -l g_2 (set_color BB5ADE)
  set -l g_3 (set_color B785DC)
  set -l g_4 (set_color 8787DD)
  set -l g_5 (set_color 5388FF)
  set -l g_6 (set_color 3BB1FF)
  set -l g_7 (set_color 00B2FF)
  set -l g_8 (set_color 3BB1FF)
  set -l g_9 (set_color 00DAFF)
  set -l g_10 (set_color 6ADAFF)
  set -l g_11 (set_color 6ADAD8)
  set -l g_12 (set_color 6ADAAC)
  set -l g_13 (set_color A4D8AB)
  set -l g_14 (set_color A4D87D)
  set -l g_15 (set_color A4D848)
  set -l g_16 (set_color D7D745)
  set -l g_17 (set_color D7D700)
  set -l g_18 (set_color FFD541)
  set -l g_19 (set_color FFAB4C)
  set -l g_20 (set_color FF7E83)

  # Terminal Size
	if test (math $COLUMNS % 2) = 0
	  set __body_width (math $COLUMNS - 3)
	else
	  set __body_width (math $COLUMNS - 2)
	end
	set -l __logo_width 39
	set -l __logo_padding (math (math $__body_width - $__logo_width) / 2)

	# Logo Row
	set -l row_top "$set_color_black╭"(__add_spacing "─" $__body_width)"╮$rest_color"
	set -l row_mid "$set_color_black│"(__add_spacing " " $__body_width)"│$rest_color"
	set -l row_btm "$set_color_black╰"(__add_spacing "─" $__body_width)"╯$rest_color"

	set -l logo_1 "$g_0█▀$g_1▀ ▄$g_2▀$g_3█ $g_4█$g_5▄$g_6 $g_7█ $g_8█ $g_9█▀$g_10▀ $g_11█▀$g_12▄$g_13▀$g_14█ $g_15█$g_16 █▄$g_17 █ $g_18█▀$g_19█ █$g_20▀█$rest_color"
	set -l logo_2 "$g_0█▄$g_1▄ █$g_2▀$g_3█ $g_4█$g_5 $g_6▀$g_7█ $g_8█ $g_9▄▄$g_10█ $g_11█ $g_12▀$g_13 $g_14█ $g_15█$g_16 █ $g_17▀█ $g_18█▄$g_19█ █$g_20▀▄$rest_color"

	set -l logo_spacing (__add_spacing " " $__logo_padding)

	clear



	echo "$row_top"
	echo "$row_mid"
	echo "$set_color_black│$rest_color$logo_spacing$logo_1$logo_spacing$set_color_black│$rest_color"
	echo "$set_color_black│$rest_color$logo_spacing$logo_2$logo_spacing$set_color_black│$rest_color"
	echo "$row_mid"
	echo "$row_btm"

	# Info Row
	set -l __user $set_color_blue_bright(whoami)'@'(hostname)
	set -l __node_version (node -v)
	set -l __date_now (date '+%D')
	echo $set_color_white '✨ hi ~ '$__user $set_color_black_bright$__date_now $rest_color
	echo
end