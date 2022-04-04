import './Section.css';

function Section(score) {
    return (
        <section className="section">
            <h1>Level {score.score} </h1>
        </section>
    );
}

export default Section;