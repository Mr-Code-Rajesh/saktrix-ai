import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function AboutCardFlip() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4 py-20">
      <div className="relative w-[300px] h-[400px] perspective">
        <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden rounded-xl shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center p-6">
            <img
              src="/student-avatar.png"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
            />
            <h3 className="text-xl font-bold">Alex Jordan</h3>
            <p className="text-sm text-white/80">Frontend Developer & Student</p>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-lg p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-semibold mb-2">About Me</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Creative student dev passionate about UI/UX and React. Love building beautiful interfaces and bringing life to the frontend.
              </p>
            </div>
            <div className="mt-6 flex justify-around text-xl text-blue-600 dark:text-blue-400">
              <a href="mailto:alex@example.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://github.com/alex" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/alex" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for 3D flip */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
