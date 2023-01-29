import bgDes from "./images/bg-pattern-desktop.svg";
import bgMob from "./images/bg-pattern-mobile.svg";
import arrowIcon from "./images/icon-arrow-down.svg";
import illustrationBox from './images/illustration-box-desktop.svg';
import womanDes from "./images/illustration-woman-online-desktop.svg";
import womanMob from "./images/illustration-woman-online-mobile.svg";

const faq = [
  {
    title: 'How many team members can I invite?',
    content: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan. '
  },
  {
    title: 'What is the maximum file upload size?',
    content: 'No more than 2GB. All files in your account must fit your allotted storage space.'
  },
  {
    title: 'How do I reset my password?',
    content: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
  },
  {
    title: 'Can I cancel my subscription?',
    content: 'Yes! Send us a message and we’ll process your request no questions asked.'
  },
  {
    title: 'Do you provide additional support?',
    content: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
  },
];

function Details({title, content, isOpen, index}) {
  const handleClick = e => {
    document.querySelectorAll(`details`).forEach((ele, i) => {
      ele.open = false;
    });
  }

  return (
    <details onClick={handleClick} id={index} open={isOpen} className="group/item border-b border-b-gray-200 py-4">
      <summary className="flex items-center justify-between cursor-pointer text-zinc-600">
        <span className="hover:text-orange-600 group-open/item:font-bold group-open/item:hover:text-gray-700">{title}</span>
        <span><img className="group-open/item:rotate-180 transition-transform duration-200 ease-in" src={arrowIcon} alt="icon" /></span>
      </summary>
      <p className="text-zinc-500">{content}</p>
    </details>
  )
}
// bg-[url(./images/bg-pattern-desktop.svg)] bg-contain bg-no-repeat bg-left 
function App() {

  return (
    <main className="font-KS w-full min-h-screen bg-gradient-to-b from-violet-600 to-blue-600 flex items-center justify-center">
      <section className={"relative mt-32 mb-16 sm:my-0 sm:flex w-80 sm:w-full md:w-11/12 max-w-3xl rounded-xl bg-white"}>
        <div className="sm:w-1/2 relative h-40 sm:h-auto relative sm:overflow-hidden">
          <picture>
            <source media="(min-width: 640.99px)" srcSet={bgDes} />
            <img className="h-4/5 sm:h-full w-4/5  sm:w-full sm:scale-150 absolute left-1/2 -translate-x-1/2 sm:left-[10px] sm:-top-[55px] sm:bottom-0 sm:translate-0" src={bgMob} alt="bg" />
          </picture>
          <div className="relative w-4/5 sm:w-auto left-[33px] bottom-[110px] sm:-left-[65px] sm:-bottom-[70px]">
            <img className="hidden sm:block" src={womanDes} alt="woman" />
            <img className="sm:hidden" src={womanMob} alt="woman" />
          </div>
        </div>
        <div className="absolute -left-[125px] bottom-[100px]">
          <img className="hidden md:block" src={illustrationBox} alt="box" />
        </div>
        <div className="sm:w-1/2 sm:p-4 md:p-8">
          <h1 className="uppercase text-3xl font-bold p-2 text-center sm:text-left">faq</h1>
          <div className="p-2 pb-8 sm:p-0">
            {faq.map(({title, content}, i) => (
              <Details isOpen={i === 1 ? true : false} index={`a${i}`} key={i} title={title} content={content} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
