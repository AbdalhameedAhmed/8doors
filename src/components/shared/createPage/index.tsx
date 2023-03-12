import BasicLayout from 'components/layout/basicLayout';

interface Props {
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
  showSiderMenu: boolean;
  showModal: boolean
  handelModalState: Function
  showModalButton: boolean
}

export function Page({
  title,
  subTitle,
  children,
  showSiderMenu = true,
  showModal,
  handelModalState,
  showModalButton = false

}: Props): JSX.Element {

  const Content = (): JSX.Element => {
    return (
      <div
        className='page-header flex flex-col h-[calc(100vh-174px)] overflow-y-auto w-full bg-layout-primary relative'
      >
        {/* <div className='flex jutify-between p-[15px] z-10'>
          <h2 className='text-xl text-white font-medium'>
            {title}
            <small className='block text-white text-[13px] font-normal mt-2 h-fit'>
              {subTitle}
            </small>
          </h2>
        </div> */}
        <div className='z-10 flex flex-wrap'>{children}</div>
      </div>
    );
  };
  if (showSiderMenu)
    return (
      <BasicLayout showModal={showModal} showModalButton={showModalButton} handelModalState={handelModalState} >
        <Content />
      </BasicLayout>
    );
  return <Content />;
}
