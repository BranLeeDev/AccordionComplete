import QuestionsList from "./components/QuestionsList";

function App(): JSX.Element {
  return (
    <>
      <main className="am:gap-4 relative z-10 grid h-[80%] max-h-[34rem] w-[90%] max-w-[53.75rem] grid-cols-6 grid-rows-6 gap-2 rounded-lg bg-slate-50 py-4 sm:py-12">
        <h1 className="col-start-1 col-end-7 row-start-1 row-end-2 px-4 text-center text-2xl text-indigo-950 sm:col-end-3 sm:row-end-7 md:text-3xl">
          Questions and answers about login
        </h1>
        <QuestionsList />
      </main>
    </>
  );
}

export default App;
