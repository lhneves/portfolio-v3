import { cn } from '@/lib/cn';

import { ContactForm } from './ContactForm';

import { Button, Card, CardBody, Divider, Spacer } from '@nextui-org/react';
import Link from 'next/link';

export const Contact = () => {
  return (
    <section className="w-full py-20 h-vh lg:h-[calc(90svh_-_6rem)]">
      <div className="w-full px-10 max-w-6xl mx-auto">
        <div
          className={cn(
            'flex flex-col gap-8',
            'lg:grid lg:grid-cols-12 lg:items-center lg:justify-cente',
          )}
        >
          <div className="flex flex-col gap-8 max-w-xl h-full sm:col-span-5">
            <h2 className="text-violet-blue-gradient font-bold text-3xl lg:text-4xl">
              Send me a message!
            </h2>
            <p>
              I&apos;m always open to new connections and conversations. I&apos;ll answer your your
              message as soon as possible, be it for:
            </p>
            <ul>
              <li>🚀 Promote your business</li>
              <li>💬 Exchange knowledge</li>
              <li>👨🏻‍💻 Freelanceo</li>
            </ul>
          </div>

          <div className="sm:col-span-7">
            <div className="p-1 violet-blue-gradient rounded-xl">
              <Card radius="sm">
                <CardBody className="flex flex-col gap-4">
                  <h3 className="text-violet-blue-gradient font-bold text-xl">Get in touch!</h3>

                  <ContactForm />

                  <div className="flex items-center">
                    <Divider className="max-w-[calc(50%_-_2rem)]" />
                    <Spacer x={4} />
                    ou
                    <Spacer x={4} />
                    <Divider className="max-w-[calc(50%_-_2rem)]" />
                  </div>

                  <Button
                    as={Link}
                    size="sm"
                    variant="shadow"
                    className="bg-green-500 text-white lg:h-10 lg:px-4 lg:text-small"
                    href="https://wa.me/5511972535126?text=I want to work on a project with you"
                  >
                    Chat on WhatsApp
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
