import Image from "next/image";

function About() {
  return (
    <div className="wrapper md:py-40 py-32 md:px-0 px-4">
      <section
        id="about"
        className="flex flex-col md:mx-auto md:max-w-130 gap-20"
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <h2 className="md:text-heading2 text-heading3 md:font-bold font-medium">
            About
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="size-72 relative shrink-0">
              <Image
                src={"/images/profile.jpg"}
                alt="Profile Picture"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                className="rounded-full"
              />
            </div>
            <p className="w-full md:text-body1">
              Hello there, I&apos;m Rena Sakata, a full stack developer based in
              Vancouver. My training in Agile methodologies at Langara College
              equipped me to deliver meaningful solutions in web and mobile app
              development.
              <br />
              <br />
              I&apos;m passionate about implementing cutting-edge, lightweight,
              and intuitively user-friendly solutions. I thrive on crafting
              tools and applications that are accessible to everyone and push
              the boundaries of what&apos;s possible.
              <br />
              <br />
              Besides developing, I enjoy reading, baking, and hiking to explore
              Vancouver&apos;s natural beauty.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <h2 className="md:text-heading2 text-heading3 md:font-bold font-medium">
            My Skills
          </h2>
          <div className="grid md:grid-cols-8 grid-cols-4 md:grid-rows-2 grid-rows-4 gap-4 w-fit">
            <Image
              src={"/svgs/logos/icons-html5.svg"}
              alt="HTML5"
              width={60}
              height={60}
            />{" "}
            <Image
              src={"/svgs/logos/icons-css3.svg"}
              alt="CSS3"
              width={60}
              height={60}
            />
            <Image
              src={"/svgs/logos/icons-sass.svg"}
              alt="SASS"
              width={60}
              height={60}
            />
            <Image
              src={"/svgs/logos/icons-javascript.svg"}
              alt="JavaScript"
              width={60}
              height={60}
            />{" "}
            <Image
              src={"/svgs/logos/icons-typescript.svg"}
              alt="TypeScript"
              width={60}
              height={60}
            />
            <Image
              src={"/svgs/logos/icons-react.svg"}
              alt="React"
              width={60}
              height={60}
            />
            <Image
              src={"/svgs/logos/icons-nextjs.svg"}
              alt="Next.js"
              width={60}
              height={60}
            />{" "}
            <Image
              src={"/svgs/logos/icons-tailwindcss.svg"}
              alt="Tailwind CSS"
              width={60}
              height={60}
            />
            <Image
              src={"/svgs/logos/icons-nodejs.svg"}
              alt="Node.js"
              width={60}
              height={60}
            />
            <Image
              src={"/svgs/logos/icons-express.svg"}
              alt="Express"
              width={60}
              height={60}
            />{" "}
            <Image
              src={"/svgs/logos/icons-mysql.svg"}
              alt="MySQL"
              width={60}
              height={60}
            />
            <Image
              src={"/svgs/logos/icons-mongodb.svg"}
              alt="MongoDB"
              width={60}
              height={60}
            />
            <Image
              src={"/svgs/logos/icons-firebase.svg"}
              alt="Firebase"
              width={60}
              height={60}
            />{" "}
            <Image
              src={"/svgs/logos/icons-aws.svg"}
              alt="AWS"
              width={60}
              height={60}
            />
            <Image
              src={"/svgs/logos/icons-wordpress.svg"}
              alt="WordPress"
              width={60}
              height={60}
            />
            <Image
              src={"/svgs/logos/icons-php.svg"}
              alt="PHP"
              width={60}
              height={60}
            />
          </div>
          <p className="md:text-body1">and more...</p>
        </div>
      </section>
    </div>
  );
}

export default About;
