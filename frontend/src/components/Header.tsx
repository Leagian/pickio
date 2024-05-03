import { RiNotificationBadgeLine } from 'react-icons/ri';

export const Header = () => {
  return (
    <>
      <div className='flex justify-around'>
        <h1 className='text-3xl font-bold'>PICKIO</h1>
        <RiNotificationBadgeLine size={28} />
      </div>
    </>
  );
};
