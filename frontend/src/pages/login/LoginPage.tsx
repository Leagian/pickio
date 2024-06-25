import { SignupForm } from './components/SignupForm';
import { Logo } from './components/Logo';
import { ModeToggle } from '@/components/ui/mode-toggle';

export const LoginPage = () => {
  return (
    <div className='flex h-screen'>
      <div className='flex-1 flex justify-center items-center border-r border-gray-200'>
        <Logo />
        <ModeToggle />
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <SignupForm />
      </div>
    </div>
  );
};
