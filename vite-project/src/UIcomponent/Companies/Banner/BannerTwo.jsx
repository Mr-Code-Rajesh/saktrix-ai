import { FaTimes, FaCloud, FaRocket, FaHeartbeat, FaChartLine } from 'react-icons/fa';

function BannerBase({ title, description, btnText, bgFrom, bgTo, Icon }) {
  return (
    <div className={`relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1`} style={{backgroundColor: 'transparent'}}>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        style={{opacity: 0.3}}
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            backgroundImage: `linear-gradient(to right, ${bgFrom}, ${bgTo})`,
            width: '36.0625rem',
            aspectRatio: '577 / 310',
          }}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        style={{opacity: 0.3}}
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            backgroundImage: `linear-gradient(to right, ${bgFrom}, ${bgTo})`,
            width: '36.0625rem',
            aspectRatio: '577 / 310',
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-gray-900 max-w-lg">
          <strong className="font-semibold">{title}</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          {description}
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          {btnText} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <Icon aria-hidden="true" className="size-5 text-gray-900" />
        </button>
      </div>
    </div>
  );
}

export function SaaSBanner() {
  return (
    <BannerBase
      title="CloudSaaS 2023"
      description="Empower your business with our robust SaaS platform. Join our virtual event on August 10 – 12."
      btnText="Learn More"
      bgFrom="#22c55e" // emerald green
      bgTo="#16a34a"
      Icon={FaCloud}
    />
  );
}

export function StartupBanner() {
  return (
    <BannerBase
      title="Startup Launchpad"
      description="Kickstart your journey with our expert-led workshops and networking. Happening September 5 – 7."
      btnText="Register Today"
      bgFrom="#f97316" // orange
      bgTo="#dc2626" // red
      Icon={FaRocket}
    />
  );
}

export function MedicalBanner() {
  return (
    <BannerBase
      title="MedTech Conferences"
      description="Innovations in healthcare technology you can’t miss. Join us November 20 – 22."
      btnText="Get Tickets"
      bgFrom="#3b82f6" // blue
      bgTo="#0ea5e9"
      Icon={FaHeartbeat}
    />
  );
}

export function FintechBanner() {
  return (
    <BannerBase
      title="Fintech Expo"
      description="Explore the future of finance with industry leaders. Scheduled for October 15 – 17."
      btnText="Explore Now"
      bgFrom="#8b5cf6" // violet
      bgTo="#6366f1"
      Icon={FaChartLine}
    />
  );
}


