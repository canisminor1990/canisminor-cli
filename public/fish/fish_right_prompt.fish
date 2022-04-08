function fish_right_prompt

	if test (fish_vcs_prompt)
		# Setup Theme
	  _canisminor_color
		echo -n $reset_color
		set_color $black
	  echo -n ""
	  set_color $white --background $black
		echo $__git_status
	  echo -n ' '
	  echo -n $reset_color
	  set_color $black
	  echo -n ""
	  echo -n $reset_color
	end
end
