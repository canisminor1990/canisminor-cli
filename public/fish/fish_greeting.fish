function fish_greeting
	# Setup Theme
  fish_color

	# Logo Row
	cmli --logo canisminor

	# Info Row
	set -l __user $set_color_blue_bright(whoami)'@'(hostname)
	set -l __node_version (node -v)
	set -l __date_now (date '+%D')
	echo $set_color_white '✨ hi ~ '$__user $set_color_black_bright$__date_now $rest_color
	echo
end