function __fish_basename -d 'basically basename, but faster'
  string replace -r '^.*/' '' -- $argv
end

function __fish_dirname -d 'basically dirname, but faster'
  string replace -r '/[^/]+/?$' '/' -- $argv
end

function fish_prompt --description 'Write out the prompt'


  # State
  set -l __last_status $status
	set -l __prompt_pwd (prompt_pwd  --full-length-dirs=64)
	set -l __dirname (__fish_dirname $__prompt_pwd)
  set -l __basename  (__fish_basename $__prompt_pwd)

	# Setup Theme
  _canisminor_color

	# Git Setting
  set -g __fish_git_prompt_show_informative_status true
  set -g __fish_git_prompt_showupstream true
  set -g __fish_git_prompt_describe_style contains
	set -g __fish_git_prompt_char_stateseparator ','
  set -g __fish_git_prompt_char_cleanstate "$set_color_green ✔"
  set -g __fish_git_prompt_char_conflictedstate "$set_color_red ✖"
  set -g __fish_git_prompt_char_dirtystate "$set_color_orange ±"
  set -g __fish_git_prompt_char_stagedstate "$set_color_blue_bright ⊙"
  set -g __fish_git_prompt_char_untrackedfiles "$set_color_white ※"

	# Git
	if test (fish_vcs_prompt)
		set -g __git (string replace -r -a '\(|\)' '' -- (fish_vcs_prompt))
		set -g __git_arr (string split ',' $__git)
		set -g __git_branch $__git_arr[1]
		set -g __git_status $__git_arr[2]

		if test (string match -r -a '\✔' $__git_status)
			if test (string match -r -a '\↑|\↓|\<|\>' $__git_branch)
        set -g __git_color_bg $yellow
      else
        set -g __git_color_bg $green_bright
      end
		else
			if test (string match -r -a '\#|\✖' $__git_status)
        set -g __git_color_bg $red_bright
      else
        set -g __git_color_bg $blue_bright
      end
		end
	end

  # PWD
  set_color $black
  echo -n '╭─'
  set_color $white --background $black
  echo -n ' '

  if test ! $__dirname = "~"
    echo -n $__dirname
  end

  set_color $white_bright
  echo -n $__basename
  echo -n ' '
  echo -n $reset_color

  if test (fish_vcs_prompt)
    set_color $black --background=$__git_color_bg
    echo -n \uE0BC
  else
    set_color $black
    echo -n ''
  end
  echo -n $reset_color

  # GIT
  if test (fish_vcs_prompt)
    set_color $black --background=$__git_color_bg
    echo -n ' '
    echo -n \uE725
    echo -n $__git_branch
    echo -n ' '
    echo -n $reset_color
    set_color $__git_color_bg
    echo -n ''
    echo -n $reset_color
  end

  # New Line
  echo

	# Second Line
  set_color $black
  echo -n "╰─"

	if test $__last_status = 0
		set_color $blue_bright
	else
		set_color $red
	end

	echo -n "➤ "
  echo -n $reset_color

end
