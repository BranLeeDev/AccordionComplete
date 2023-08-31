import QuestionsList from "./components/QuestionsList";

function App(): JSX.Element {
  return (
    <>
      <main className="am:gap-4 relative grid h-[80%] max-h-[34rem] w-[90%] grid-cols-6 grid-rows-6 gap-2 rounded-lg bg-slate-50 py-4">
        <div className="absolute"></div>
        <h1 className="col-start-1 col-end-7 row-start-1 row-end-2 px-4 text-center text-2xl text-indigo-950">
          Questions and answers about login
        </h1>
        <QuestionsList />
        <div className="absolute"></div>
      </main>
    </>
  );
}

export default App;
