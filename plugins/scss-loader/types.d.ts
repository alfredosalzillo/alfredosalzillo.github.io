declare module '*.module.css' {
  type ClassNames = {
    [key: string]: string
  }
  const classNames: ClassNames
  export default classNames
}

declare module '*.module.scss' {
  type ClassNames = {
    [key: string]: string
  }
  const classNames: ClassNames
  export default classNames
}