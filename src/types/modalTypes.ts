export type modaltypes = {
  openModal: boolean
  changeModalState: Function
  title: string
  children?: React.ReactNode
  onModalClose?:Function
}