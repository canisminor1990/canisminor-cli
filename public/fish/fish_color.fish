function fish_color
	# Setup Theme
	_canisminor_color

	# Syntax Highlighting
	set -U fish_color_normal             $white
	set -U fish_color_command            $red -o
	set -U fish_color_param              $green
	set -U fish_color_keyword            $blue
	set -U fish_color_quote              $yellow
	set -U fish_color_redirection        $red
	set -U fish_color_end                $white
	set -U fish_color_error              --background=$red
	set -U fish_color_gray               $black_bright
	set -U fish_color_selection          --background=$black_bright
	set -U fish_color_search_match       --background=$black_bright
	set -U fish_color_operator           $orange
	set -U fish_color_escape             $blue
	set -U fish_color_autosuggestion     $black_bright
	set -U fish_color_cancel             $red_bright
	set -U fish_color_cd                 $blue
	set -U fish_color_match              $white_bright -o
	set -U fish_color_comment            $black_bright

	# Prompt
	#set -U fish_color_cwd                normal
	#set -U fish_color_user               normal
	#set -U fish_color_host               normal

	# Completion Pager
	set -U fish_pager_color_progress     $black_bright
	set -U fish_pager_color_secondary    $white
	set -U fish_pager_color_prefix       $red
	set -U fish_pager_color_completion   $white
	set -U fish_pager_color_description  $black_bright
end