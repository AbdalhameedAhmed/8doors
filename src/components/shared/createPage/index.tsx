import dynamic from "next/dynamic";
const BasicLayout = dynamic(() => import("components/layout/basicLayout"), {
  ssr: false,
});
interface Props {
  title?: string;
  children: React.ReactNode;
  showSiderMenu?: boolean;
  showModal?: boolean;
  handelModalState?: Function;
  showModalButton?: boolean;
}

export function Page({
  title,
  children,
  showSiderMenu = true,
  showModal,
  handelModalState,
  showModalButton = false,
}: Props): JSX.Element {
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
        showModal={showModal}
        showModalButton={showModalButton}
        handelModalState={handelModalState}
      >
        <Content />
      </BasicLayout>
    );
  return <Content />;
}
