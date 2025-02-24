
interface CloudinaryImageProps {
  publicId: string
  className?: string
  alt?: string
  width?: number
  height?: number
}

const cloudName = import.meta.env.VITE_CLOUD_NAME

export function CloudinaryImage({ publicId, className, alt, width, height }: CloudinaryImageProps) {
  const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/c_fill,g_face${width ? `,w_${width}` : ''}${height ? `,h_${height}` : ''}/f_auto,q_auto/${publicId}`

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
    />
  )
}
