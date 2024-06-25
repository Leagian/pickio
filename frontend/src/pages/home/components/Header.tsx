import { Link } from 'react-router-dom';
import { RiNotificationBadgeLine } from 'react-icons/ri';
import { ModeToggle } from '@/components/ui/mode-toggle';

export const Header = () => {
  return (
    <>
      <div className='flex justify-around'>
        <ModeToggle />
        <Link to='/'>
          <h1 className='text-3xl font-bold'>PICKIO</h1>
        </Link>
        <RiNotificationBadgeLine size={28} />
      </div>
    </>
  );
};
