import classNames from 'classnames';
import { SectionHeader } from '../sectionHeader';

type Props = {
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  className?: string;
};

export function Table({ title, subtitle, className = '' }: Props) {
  return (
    <section className={classNames('flex flex-col gap-3', className)}>
      {title?.length && <SectionHeader title={title} subtitle={subtitle} />}
      <table>
        <tbody>
          <tr className='text-secondary text-xs uppercase border border-solid border-blueGray-100 border-l-0 border-r-0 whitespace-nowrap font-bold text-left'>
            <th className='py-3 px-6 align-middle'>Name</th>
            <th className='py-3 px-6 align-middle'>Id</th>
            <th className='py-3 px-6 align-middle'>specialization</th>
          </tr>
          <tr className='bg-secondary text-secondary text-sm whitespace-nowrap font-semibold text-left border border-solid border-blueGray-100 border-l-0 border-r-0 last:border-0'>
            <td className='py-3 px-6 align-middle'>Emil</td>
            <td className='py-3 px-6 align-middle'>1</td>
            <td className='py-3 px-6 align-middle'>General</td>
          </tr>
          <tr className='bg-secondary text-secondary text-sm whitespace-nowrap font-semibold text-left border border-solid border-blueGray-100 border-l-0 border-r-0 last:border-0'>
            <td className='py-3 px-6 align-middle'>Emil</td>
            <td className='py-3 px-6 align-middle'>2</td>
            <td className='py-3 px-6 align-middle'>General</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
