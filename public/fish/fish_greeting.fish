function fish_greeting
	# Setup Theme
  fish_color

	# Logo Row
	set __greeting_title "canisminor"
	if test $greeting_title
		set __greeting_title $greeting_title
	end

	clear
	cmli --logo $__greeting_title

	# Info Row
	set -l __user $set_color_blue_bright(whoami)'@'(hostname)
	set -l __node_version (node -v)
	set -l __date_now (date '+%D')
	echo $set_color_white '✨ hi ~ '$__user $set_color_black_bright$__date_now $rest_color
	echo
end