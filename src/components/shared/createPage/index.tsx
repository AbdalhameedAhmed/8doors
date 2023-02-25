import BasicLayout from 'components/layout/basicLayout';

interface Props {
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
  showSiderMenu: boolean;
}

export function Page({
  title,
  subTitle,
  children,
  showSiderMenu = true,
}: Props): JSX.Element {

  const Content = (): JSX.Element => {
    return (
      <div
        className='page-header flex flex-col px-2.5 h-[calc(100vh-80px)] overflow-scroll w-full mt-[80px] bg-gray-lighter relative'
      >
        <div className='flex jutify-between p-[15px] z-10'>
          <h2 className='text-xl text-white font-medium'>
            {title}
            <small className='block text-white text-[13px] font-normal mt-2 h-fit'>
              {subTitle}
            </small>
          </h2>
        </div>
        <div className='z-10 flex flex-wrap'>{children}</div>
      </div>
    );
  };
  if (showSiderMenu)
    return (
      <BasicLayout>
        <Content />
      </BasicLayout>
    );
  return <Content />;
}
