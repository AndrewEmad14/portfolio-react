const Button = ({href,download,children}) => {
  return (
    <>
    <a className='
      btn-fill
      flex items-center gap-2 p-4 
      border-2 border-pink-500 rounded-md
      text-white text-2xl
      hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500
      hover:border-transparent
      transition-all duration-300 ease-in-out
      px-12
      f' href={href} {...(download && {download})}>
      <span className="relative z-10">{children}</span>
    </a>
    </>
  )
}

export default Button;