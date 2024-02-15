import GithubIcon from "../../../public/assets/svgs/github.svg";
import LinkedInIcon from "../../../public/assets/svgs/linkedin.svg";
import MediumIcon from "../../../public/assets/svgs/medium.svg";
import MailIcon from "../../../public/assets/svgs/mail.svg";
import DocIcon from "../../../public/assets/svgs/description.svg";

function Contact() {
  return (
    <ul className="flex flex-row gap-6">
      <li>
        <a
          href="https://github.com/rena52107"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="See GitHub Profile"
        >
          <GithubIcon width={48} height={48} color="pink" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/renasakata/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Rena on LinkedIn"
        >
          <LinkedInIcon width={48} height={48} color="pink" />
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@rena52107/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read Rena's Medium Blog"
        >
          <MediumIcon width={48} height={48} color="pink" />
        </a>
      </li>
      <li>
        <a
          href="mailto:rena.sakata.cn@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email Rena"
        >
          <MailIcon width={48} height={48} color="pink" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/rena52107"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
        >
          <DocIcon width={48} height={48} color="pink" />
        </a>
      </li>
    </ul>
  );
}

export default Contact;
