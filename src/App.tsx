import LandingPage from "./layout/landingPage";
import React from "react";

function App() {
  return (
    <LandingPage>
      <section className="font-sans font-thin max-w-full w-screen h-screen text-center text-gray-800 grid grid-cols-2">
        <div className="flex flex-col justify-center items-center h-screen w-full max-w-full max-h-full">
          <h1 className="text-8xl max-w-lg mb-14">
            Describe your product or service
          </h1>

          <button className="bg-green-300 bg-opacity-30 text-gray-700 rounded-md w-52 py-4">
            Buy now
          </button>
        </div>
        <div className="img h-screen w-full max-h-full bg-red-100 " />
      </section>
      <section className="bg-pink-100 h-36 flex flex-col justify-center items-center text-4xl font-extralight">
        <p>El regalo perfecto para ese momento especial</p>
      </section>

      <section className="font-sans font-thin max-w-full w-screen h-screen text-center text-gray-800 grid grid-cols-2">
        <div className="img h-screen w-full max-h-full bg-red-100" />
        <div className="flex flex-col justify-center items-center h-screen w-full max-w-full max-h-full">
          <ul className="list-disc text-left text-xl max-w-md border-t-2">
            <li>
              Cupidatat aliqua est ullamco do qui commodo culpa consectetur
              aliquip minim reprehenderit consectetur irure.
            </li>
            <li>
              Ullamco do ullamco consectetur ullamco sunt dolore commodo
              reprehenderit aliqua magna.
            </li>
            <li>
              Ad proident magna aliqua occaecat magna consectetur nisi excepteur
              ipsum sit.
            </li>
            <li>
              Veniam et exercitation nostrud exercitation laborum enim anim
              minim incididunt Lorem culpa culpa amet est.
            </li>
            <li>Magna enim cupidatat adipisicing est officia quis.</li>
          </ul>

          <button className="bg-green-300 bg-opacity-30 text-gray-700 rounded-md w-52 py-4 mt-16 border-gray-300 border">
            Buy now
          </button>
        </div>
      </section>
    </LandingPage>
  );
}

export default App;
