declare module 'cloudinary-react' {
  import { ComponentType, PropsWithChildren } from 'react'

  export interface CloudinaryContextProps extends PropsWithChildren {
    cloudName: string
  }

  export interface ImageProps extends PropsWithChildren {
    publicId: string
    className?: string
    alt?: string
    secure?: boolean
    transformation?: TransformationType[]
  }

  export interface TransformationType {
    height?: number | string
    width?: number | string
    crop?: 'scale' | 'fit' | 'limit' | 'mfit' | 'fill' | 'lfill' | 'pad' | 'lpad' | 'mpad' | 'crop' | 'thumb'
    gravity?: 'center' | 'face' | 'face:center' | 'faces' | 'faces:center' | 'north' | 'north_east' | 'east' | 'south_east' | 'south' | 'south_west' | 'west' | 'north_west' | 'xy_center'
    quality?: string | number
    fetchFormat?: 'auto' | 'png' | 'jpg' | 'gif' | 'webp'
  }

  export const CloudinaryContext: ComponentType<CloudinaryContextProps>
  export const Image: ComponentType<ImageProps>
  export const Transformation: ComponentType<TransformationType>
}
