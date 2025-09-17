import {FaGithub, FaLinkedin} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" 
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://github.com/SkimaniKings">
          <FaGithub size={20} />
        </a>
        <a href="www.linkedin.com/in/simon-kimani-b78963196">
          <FaLinkedin size={20} />
        </a>
       
      </div>
    </div>
  );
};

export default FollowOn;