import BasicLayout from "components/layout/basicLayout"
interface pageProps {
  navbarTitle?: string;
  children: React.ReactNode;
  showSiderMenu?: boolean;
  showModal?: boolean;
  handelModalState?: Function;
  showModalButton?: boolean;
}

export function Page({
  navbarTitle,
  children,
  showSiderMenu = true,
  showModal,
  handelModalState,
  showModalButton = false,
}: pageProps): JSX.Element {

  const Content = (): JSX.Element => {
    return (
      <div className="page-header flex flex-col h-[calc(100vh-146px)] overflow-y-auto w-full bg-layout-primary">
        <div className="flex flex-wrap">{children}</div>
      </div>
    );
  };

  if (showSiderMenu)

    return (
      <BasicLayout
        navbarTitle={navbarTitle}
        showModal={showModal}
        showModalButton={showModalButton}
        handelModalState={handelModalState}
      >
        <Content />
      </BasicLayout>
    );

  return <Content />;
}
