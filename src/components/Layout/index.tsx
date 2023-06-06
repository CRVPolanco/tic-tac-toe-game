type Props = { children: JSX.Element | JSX.Element[] }

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {children}
    </div>
  )
}
