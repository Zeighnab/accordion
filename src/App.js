import questions from './data';
import Question from './Question';

const App = () => {
  return (
    <main>
      <div className="container">
        <h3>questions and answer about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
