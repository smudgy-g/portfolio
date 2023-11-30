export interface ButtonProps {
  content: string
  href: string
}
export default function LinkButton ({content, href}: ButtonProps) {
  return (
    <a
      href={href} 
      rel="noreferer noopener"
      className="btn relative inline-flex items-center justify-start py-2 px-3 border overflow-hidden transition-all bg-none group"
    >
      <span className="w-0 h-full bg-light-green absolute left-0 ease-out duration-250 transition-all group-hover:w-full group-active:w-full -z-1"></span>
      <span className="w-full text-cream transition-colors duration-300 ease-in-out group-hover:text-blue z-10">
        {content}
    </span>
  </a>
  )
}

