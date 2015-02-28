$imageId = 'ami-830f51b3'
$provision = 'provision'

if ARGV[0] == 'up'
  hash = `../shared/hash-provisioning-scripts`
  cachedImageId = `#{ENV['OPS']}/infrastructure/aws/image-by-name hash-#{hash}`

  if cachedImageId != ''
    $imageId = cachedImageId
    $provision = 'provision-quick'
  end
end
