import React from "react";
import { useRouter } from 'next/router';

import { Button, Page, Section } from 'components/shared';
import { removeDashAndCapitalize } from "utiles"

export default function Doctors() {
  const router = useRouter()
  React.useEffect(() => {
    document.title = removeDashAndCapitalize(router.asPath)
  }, [])
  return (
    <Page showSiderMenu>
      <Section title='Book Appointment' subtitle='Description text here...'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 1</div>
        <div className='flex flex-wrap gap-x-2.5 mt-5'>
          <Button fit>submit</Button>
          <Button fit disabled design='secondary'>cancel</Button>
        </div>
      </Section>

    </Page>
  );
}
