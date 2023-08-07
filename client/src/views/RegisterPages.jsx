import { registerRequest } from '../api/auth'
import { useForm } from 'react-hook-form'

export default function RegisterPages() {
    const { register, handleSubmit } = useForm()
    const onSubmit = async (values) => {
      console.log(values)
      const res = await registerRequest(values)
      console.log(res)
    }
    const st = 'w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
    const st1 = 'bg-zinc-800 max-w-md p-10 rounded-md'

  return (
    <div className={st1}>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type='text' {...register('userName', { required: true })}  className={st} placeholder='userName'/>
        <input type='email' {...register('email', { required: true })} className={st} placeholder='email'/>
        <input type='password' {...register('password', { required: true })} className={st} placeholder='password'/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
