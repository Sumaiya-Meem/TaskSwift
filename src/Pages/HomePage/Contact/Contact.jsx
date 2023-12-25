import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";

const Contact = () => {
    return (
        <div>
            <Card className="">
                <h1 className="text-center text-2xl font-semibold text-black mt-16">Let's Talk</h1>
                <form className="flex flex-col gap-4 mt-3 w-full ">
                    <div className="flex flex-col md:flex-row gap-2 ">
                        <div className="flex-1">
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your Name" />
                            </div>
                            <TextInput id="email1" type="text" placeholder="name" required />
                        </div>
                        <div className="flex-1">
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                        </div>
                    </div>
                   <div>
                   <div className="flex ">
                   <div className="flex-1">
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Subject" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="Your Subject" required />
                    </div>
                    <div className="flex-1">

                    </div>
                   </div>
                    
                   </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Your message" />
                        </div>
                        <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
                    </div>
                    <div className="flex justify-center ">
                        <Button className="rounded-2xl bg-[#0085ad]">Send Message</Button>
                    </div>
                </form>
            </Card>

        </div>
    );
};

export default Contact;