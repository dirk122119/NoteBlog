import Image from "next/image"
import {urlForImage} from "@/sanity/lib/image"
import { useTheme } from '@mui/material/styles';

const myPortableText = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }:any) => <h1 style={{fontSize:"6rem",fontWeight:"300",lineHeight:1.167,letterSpacing:"-0.01562em"}}>{children}</h1>,
    h2: ({ children }:any) => <h2 style={{fontSize:"3.75rem",fontWeight:"300",lineHeight:1.2,letterSpacing:"-0.00833em"}}>{children}</h2>,
    h3: ({ children }:any) => <h3 style={{fontSize:"3rem",fontWeight:"400",lineHeight:1.167,letterSpacing:"0em"}}>{children}</h3>,
    h4: ({ children }:any) => <h4 style={{fontSize:"2.125rem",fontWeight:"400",lineHeight:1.235,letterSpacing:"0.0735em"}}>{children}</h4>,
    h5: ({ children }:any) => <h5 style={{fontSize:"1.5rem",fontWeight:"400",lineHeight:1.334,letterSpacing:"0em"}}>{children}</h5>,
    h6: ({ children }:any) => <h6 style={{fontSize:"1.25rem",fontWeight:"500",lineHeight:1.6,letterSpacing:"0.0075em"}}>{children}</h6>,
    normal: ({ children }:any) => <p style={{fontSize:"1.5rem",fontWeight:"400",lineHeight:1.334,letterSpacing:"0em"}}>{children}</p>,
    blockquote: ({ children }:any) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({ children }:any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}:any) => <ul style={{fontSize:"1.5rem",fontWeight:"400",lineHeight:1.334,letterSpacing:"0em"}}>{children}</ul>,
    number: ({children}:any) => <ol style={{fontSize:"1.5rem",fontWeight:"400",lineHeight:1.334,letterSpacing:"0em"}}>{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children}:any) => <ol style={{fontSize:"1rem",fontWeight:"400",lineHeight:1.334,letterSpacing:"0em"}}>{children}</ol>,
  },
  listItem: {
    bullet: ({children}:any) => <li style={{listStyleType: 'disclosure-closed',fontSize:"1.5rem",fontWeight:"400",lineHeight:1.334,letterSpacing:"0em"}}>{children}</li>,
    number: ({children}:any) => <li style={{listStyleType: 'decimal',fontSize:"1.5rem",fontWeight:"400",lineHeight:1.334,letterSpacing:"0em"}}>{children}</li>,
  },
  types: {
    image: ({ value }:any) => <img src={urlForImage(value).url()} alt="image" style={{maxWidth:"100%"}} />,
    callToAction: ({ value, isInline }:any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }:any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} style={{fontSize:"1.5rem",fontWeight:"400",lineHeight:1.334,letterSpacing:"0em"}}>
          {children}
        </a>
      )
    },
    em: ({ children }:any) => <em className="text-gray-600 font-semibold">{children}</em>,
  },
}

export default myPortableText;