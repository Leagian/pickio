import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LoginForm } from './LoginForm';

export const SignupForm = () => {
  return (
    <div className='flex flex-col w-full max-w-sm items-center space-x-2'>
      <div className='text-right mb-32'>
        <LoginForm />
      </div>
      <h1 className='text-2xl font-semibold'>Create an account</h1>
      <p className='text-sm'>Enter your email below to create your account</p>
      <Input type='email' placeholder='name@example.com' />
      <Button type='submit'>Sign In with Email</Button>
      <span className='bg background px-2'>OR CONTINUE WITH GOOGLE</span>
      <p className='text-sm text-center px-8'>
        By clicking continue, you agree to our Terms of Service and Privacy
        Policy.
      </p>
    </div>
  );
};
