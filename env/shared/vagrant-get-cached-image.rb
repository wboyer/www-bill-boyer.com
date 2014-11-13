$imageId = 'ami-986bffa8'

if ARGV[0] == 'up'
  hash = `../shared/hash-provisioning-scripts`
  cachedImageId = `#{ENV['OPS']}/infrastructure/aws/image-by-name hash-#{hash}`

  if cachedImageId != ''
    $imageId = cachedImageId
  else
    $provision = 'provision'
  end
end
