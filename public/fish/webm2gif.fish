function webm2gif -a filename size
    set fps 30
    set scale 720

    if test "$filename" = ''
        echo "🥺 请输入要转换的 webm 文件"
    else

        if test "$size" != ''
            set scale $size
        end
        
        set inputFile $filename
        set outputFile (string replace ".webm" ".gif" $filename)
        echo "🚧 开始编译 $inputFile"
        ffmpeg -c:v libvpx-vp9 -i $inputFile -vf "fps=$fps,scale=$scale:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 $outputFile -y
        echo "✅ 编译成功 $outputFile"
        open .
    end
end