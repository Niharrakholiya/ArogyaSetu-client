declare module 'cloudinary-react' {
  import { Component } from 'react';

  export interface CloudinaryContextProps {
    cloudName: string;
    children: React.ReactNode;
  }

  export interface ImageProps {
    publicId: string;
    className?: string;
    children?: React.ReactNode;
  }

  export interface TransformationProps {
    height?: string | number;
    width?: string | number;
    crop?: string;
    gravity?: string;
    quality?: string;
    fetchFormat?: string;
  }

  export class CloudinaryContext extends Component<CloudinaryContextProps> {}
  export class Image extends Component<ImageProps> {}
  export class Transformation extends Component<TransformationProps> {}
}
