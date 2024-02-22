import Button from "@/components/Button"
import Textbox from "@/components/Textbox"

export default function Login(){
    return (
        <div className="m-auto form-container border-gray-400 border-2 p-4 rounded text-center w-[30%]">
            <p className="text-3xl mb-4 font-bold ">Login</p>

            <Textbox
                placeholder='user/email address'
                type='text'
                name='user'
                className='w-full rounded'
              />

            <Textbox
                placeholder='Password'
                type='password'
                name='password'
                className='w-full rounded'
              />

            <div className="flex">
                <Textbox
                    placeholder='Password'
                    type='checkbox'
                    name='password'
                    label='Password'
                    className='w-[50%] items-start rounded'
                />

                <span className="">Forgot Password</span>
            </div>

            <Button
                 
            />
        </div>
    )
}