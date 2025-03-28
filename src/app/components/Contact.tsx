import GithubIcon from "../../../public/svgs/github.svg";
import LinkedInIcon from "../../../public/svgs/linkedin.svg";
import MediumIcon from "../../../public/svgs/medium.svg";
import MailIcon from "../../../public/svgs/mail.svg";
import DocIcon from "../../../public/svgs/description.svg";

function Contact({ darkMode = false }) {
  let iconColor = darkMode ? "icon-dark-mode" : "icon-light-mode";

  return (
    <ul className={`flex flex-row items-center gap-4 ${iconColor}`}>
      <li className="inline-flex items-center">
        <a
          href="https://github.com/rena52107"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="See GitHub Profile"
          className="tooltip tooltip-bottom"
          data-tip="Github"
        >
          <GithubIcon width={60} height={60} className="md:size-9 size-7" />
        </a>
      </li>
      <li className="inline-flex items-center">
        <a
          href="https://www.linkedin.com/in/renasakata/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Rena on LinkedIn"
          className="tooltip tooltip-bottom"
          data-tip="LinkedIn"
        >
          <LinkedInIcon width={60} height={60} className="md:size-9 size-7" />
        </a>
      </li>
      {/* <li className="inline-flex items-center">
        <a
          href="https://medium.com/@rena52107/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read Rena's Medium Blog"
          className="tooltip tooltip-bottom"
          data-tip="Medium"
        >
          <MediumIcon width={60} height={60} className="md:size-9 size-7" />
        </a>
      </li> */}
      <li className="inline-flex items-center">
        <a
          href="mailto:rena.sakata.cn@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email Rena"
          className="tooltip tooltip-bottom"
          data-tip="Send Email"
        >
          <MailIcon width={60} height={60} className="md:size-9 size-7" />
        </a>
      </li>
      <li className="inline-flex items-center">
        <a
          href="https://drive.google.com/file/d/1wg-7RGN_Hkws1vMNQl8b5FIIEoiAggTw/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
          className="tooltip tooltip-bottom"
          data-tip="Resume"
        >
          <DocIcon width={60} height={60} className="md:size-9 size-7" />
        </a>
      </li>
    </ul>
  );
}

export default Contact;
