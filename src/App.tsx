import React from "react";
import LandingPage from "./layout/landingPage";
import MiddleBanner from "./components/MiddleBanner";

const App: React.FC = (): JSX.Element => {
  return (
    <LandingPage>
      <div className="grid grid-cols-1">
        <section className="font-sans font-thin max-w-full min-w-screen lg:min-h-screen text-center text-gray-800 grid grid-cols-2">
          <div className="flex flex-col justify-center items-center lg:h-screen w-full max-w-full max-h-full lg:col-span-1 col-span-2">
            <h1 className="lg:text-8xl text-6xl max-w-lg lg:mb-14">
              Describe your product or service
            </h1>

            <button className="bg-green-300 bg-opacity-30 text-gray-700 rounded-md w-52 py-4 lg:visible invisible">
              Buy now
            </button>
          </div>
          <div className="lg:col-span-1 col-span-2 lg:h-screen h-56 w-screen max-w-full bg-pink-100"></div>
          <div className="flex flex-col justify-center items-center w-screen col-span-2 lg:invisible visible py-10">
            <button className="bg-green-300 bg-opacity-30 text-gray-700 rounded-md w-52 py-4 ">
              Buy now
            </button>
          </div>
        </section>

        <MiddleBanner />

        <section className="font-sans font-thin max-w-full w-screen h-screen text-center text-gray-800 grid md:grid-cols-2">
          <div className="img h-screen w-full max-h-full bg-red-100" />
          <div className="flex flex-col justify-center items-center h-screen w-full max-w-full max-h-full py-10">
            <ul className="list-disc text-left text-xl max-w-md">
              <li>
                Cupidatat aliqua est ullamco do qui commodo culpa consectetur
                aliquip minim reprehenderit consectetur irure.
              </li>
              <li>
                Ullamco do ullamco consectetur ullamco sunt dolore commodo
                reprehenderit aliqua magna.
              </li>
              <li>
                Ad proident magna aliqua occaecat magna consectetur nisi
                excepteur ipsum sit.
              </li>
              <li>
                Veniam et exercitation nostrud exercitation laborum enim anim
                minim incididunt Lorem culpa culpa amet est.
              </li>
              <li>Magna enim cupidatat adipisicing est officia quis.</li>
            </ul>

            <button className="bg-green-300 bg-opacity-30 text-gray-700 rounded-md w-52 py-4 mt-16 border-gray-400 border-b">
              Buy now
            </button>
          </div>
        </section>
      </div>
    </LandingPage>
  );
};

export default App;
