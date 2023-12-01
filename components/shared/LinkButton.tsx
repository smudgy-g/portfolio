export interface ButtonProps {
  children: React.ReactNode
  href: string
  classesWrapper?: string
}
export default function LinkButton ({children, href, classesWrapper=""}: ButtonProps) {
  return (
    <div className={classesWrapper}>
      <a
        href={href} 
        rel="noreferer noopener"
        className="btn relative inline-flex items-center justify-start py-2 px-7 border overflow-hidden transition-all bg-none group"
      >
        <span className="w-0 h-full bg-accent absolute left-0 ease-out duration-250 transition-all group-hover:w-full group-active:w-full -z-1"></span>
        <span className="w-full text-accent transition-colors duration-300 ease-in-out group-hover:text-deep-blue z-10">
          {children}
      </span>
    </a>
  </div>
  )
}

