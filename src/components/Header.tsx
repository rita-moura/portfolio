import { useEffect, useState } from "react";
import { ModeToggle } from "./theme-toggle";

const Header = () => {
  const [text, setText] = useState("<DEV BACKEND/>");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = ["<DEV BACKEND/>", "<DEV FULLSTACK/>"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const ticker = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gray-900 bg-opacity-50 backdrop-blur-md">
      <div className="text-2xl font-bold text-white">{text}</div>
      <div className="flex items-center space-x-4">
        <nav className="hidden space-x-4 md:flex">
          <a href="#home" className="text-white">
            Home
          </a>
          <a href="#about" className="text-white">
            Sobre
          </a>
          <a href="#skills" className="text-white">
            Tecnologias
          </a>
          <a href="#experience" className="text-white">
            Experiências
          </a>
          <a href="#projects" className="text-white">
            Projetos
          </a>
          <a href="#contact" className="text-white">
            Contato
          </a>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;