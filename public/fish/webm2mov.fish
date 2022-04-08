function webm2mov -a filename size
    set fps 30
    set scale 720

    if test "$filename" = ''
        echo "🥺 请输入要转换的 webm 文件"
    else

        if test "$size" != ''
            set scale $size
        end
        
        set inputFile $filename
        set outputFile (string replace ".webm" ".mov" $filename)
        echo "🚧 开始编译 $inputFile"
        ffmpeg -c:v libvpx-vp9 -i $inputFile -c:v prores_ks -alpha_bits 8 -r $fps -vf scale=-2:$scale -bits_per_mb 512 $outputFile -y
        echo "✅ 编译成功 $outputFile"
        open .
    end
end