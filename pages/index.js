import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { supabase } from '../api'
import { v4 as uuid } from 'uuid';
export default function Home() {
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    setUserId(() => Math.floor(Math.random() * 100001));
  }, []);

  const handleSubmit = async () => {
    if (email) {
      console.log("enter email check,userid:,uuid:",userId,uuid())
      try {
        const { data, error } = await supabase
          .from('email_list')
          .insert([{ user_email:email, user_id: uuid() }]);
        if (error) {
          throw error;
        }
        console.log('Email added:', data);
      } catch (error) {
        console.log('Error adding email:', error.message);
      }
    }
  };
  return (
    <>
<section className="w-full py-6 md:py-12 lg:py-16">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-32 text-center">
      <div className="md:w-1/3 space-y-10">
        <h1 className="text-4xl sm:text-8xl">Your Personal AI Video Partner</h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          120k+ users in 14 days. Something new is brewing...              
        </p>
        <div className="max-w-sm space-y-8 w-full ml-2">
          <Form.Control
                  className="max-w-sm w-full text-sm"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
          />
          <Button size="md" onClick={handleSubmit}>Subscribe</Button>
        </div>
      </div>
      <div className="md:w-2/3">
        <video
          className="rounded-xl w-full aspect-square object-cover md:w-[1000px] md:h-[800px]"
          src="/output.mp4"
          controls
        ></video>
      </div>
    </div>
  </div>
</section>
      {/* <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container flex flex-col items-center justify-center px-4 md:px-6 space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Get your own customized video character</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter the world of personalized video chat. Your AI partner will reflect your style, mood, and
              personality. Whether you want a classic avatar or a cutting-edge digital companion, the choice is yours.
            </p>
          </div>
          <div className="grid max-w-sm gap-4 mx-auto lg:max-w-none lg:grid-cols-3 lg:gap-6">
          <div className="flex flex-col items-center space-y-2">
            <video
              className="rounded-xl w-full aspect-square object-cover"
              height="200"
              width="200"
              src="/output.mp4"
              controls
            ></video>
            <h3 className="text-xl font-bold">Classic</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Timeless style</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <video
              className="rounded-xl w-full aspect-square object-cover"
              height="200"
              width="200"
              src="/output.mp4"
              controls
            ></video>
            <h3 className="text-xl font-bold">Trendy</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Always up to date</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <video
              className="rounded-xl w-full aspect-square object-cover"
              height="200"
              width="200"
              src="/output.mp4"
              controls
            ></video>
            <h3 className="text-xl font-bold">Digital</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">The future is now</p>
          </div>
        </div>
        </div>
      </section> */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center justify-center px-4 md:px-6 space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Make an Appointment</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter your email to make an appointment to experience the future of video chat with your own customized AI
              character.
            </p>
          </div>
          <div className="max-w-sm space-y-4 w-full">
            <Form.Control
                  className="max-w-sm w-full text-sm"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
           <Button size="md" onClick={handleSubmit}>Make an Appointment</Button>
          </div>
        </div>
      </section> */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">

        </div>
      </section>
    </>
  )
}

