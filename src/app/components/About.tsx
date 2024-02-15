import Image from "next/image";

function About() {
  return (
    <section id="about">
      <div>
        <h2>About</h2>
        <div className="flex flex-row">
          {/* Todo: Change Image size */}
          <Image
            src={"/images/profile.jpeg"}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full"
          />
          <p>
            Hello there, I&apos;m Rena Sakata, a full stack developer based in
            Vancouver. My training in Agile methodologies at Langara College
            equipped me to deliver meaningful solutions in web and mobile app
            development.
            <br />
            <br />
            I&apos;m passionate about implementing cutting-edge, lightweight,
            and intuitively user-friendly solutions. I thrive on crafting tools
            and applications that are accessible to everyone and push the
            boundaries of what&apos;s possible.
            <br />
            <br />
            Besides developing, I enjoy reading, baking, and hiking to explore
            Vancouver&apos;s natural beauty.
          </p>
        </div>
      </div>
      <div>
        <h2>My Skills</h2>
        <div className=" grid md:grid-cols-8 grid-cols-4 md:grid-rows-2 grid-rows-4 gap-4">
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
            alt="HTML5"
            width={60}
            height={60}
          />{" "}
          <Image
            src={"/svgs/logos/icons-typescript.svg"}
            alt="CSS3"
            width={60}
            height={60}
          />
          <Image
            src={"/svgs/logos/icons-react.svg"}
            alt="SASS"
            width={60}
            height={60}
          />
          <Image
            src={"/svgs/logos/icons-nextjs.svg"}
            alt="HTML5"
            width={60}
            height={60}
          />{" "}
          <Image
            src={"/svgs/logos/icons-tailwindcss.svg"}
            alt="CSS3"
            width={60}
            height={60}
          />
          <Image
            src={"/svgs/logos/icons-nodejs.svg"}
            alt="SASS"
            width={60}
            height={60}
          />
          <Image
            src={"/svgs/logos/icons-express.svg"}
            alt="HTML5"
            width={60}
            height={60}
          />{" "}
          <Image
            src={"/svgs/logos/icons-mysql.svg"}
            alt="CSS3"
            width={60}
            height={60}
          />
          <Image
            src={"/svgs/logos/icons-mongodb.svg"}
            alt="SASS"
            width={60}
            height={60}
          />
          <Image
            src={"/svgs/logos/icons-firebase.svg"}
            alt="HTML5"
            width={60}
            height={60}
          />{" "}
          <Image
            src={"/svgs/logos/icons-aws.svg"}
            alt="CSS3"
            width={60}
            height={60}
          />
          <Image
            src={"/svgs/logos/icons-wordpress.svg"}
            alt="SASS"
            width={60}
            height={60}
          />
          <Image
            src={"/svgs/logos/icons-php.svg"}
            alt="SASS"
            width={60}
            height={60}
          />
          <p>and more...</p>
        </div>
      </div>
    </section>
  );
}

export default About;
