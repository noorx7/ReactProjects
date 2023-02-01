import Logo from "@/assets/Logo.png"

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="Logo" />
                <p className="my-5">
                Thank you for choosing our gym app to help reach your fitness goals. Our app is designed to provide you with the tools and resources you need to get in shape and lead a healthier lifestyle. Whether you're a seasoned fitness enthusiast or just starting out, our app has something for everyone. We're here to support you every step of the way, so if you have any questions or feedback, don't hesitate to contact us. Get ready to reach your full potential and join the fitness revolution!
                </p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">
                    Links
                </h4>
                <p className="my-5">https://www.linkedin.com/in/noorisl/</p>
                <p className="my-5">https://github.com/noorx7</p>
                <p>Typescript + React</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">
                    Contact Us
                </h4>
                <p className="my-5">nurulislamamin1@gmail.com</p>
                <p className="my-5">(709)-(330)-(6824)</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer