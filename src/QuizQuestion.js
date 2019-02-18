import React, { Component } from 'react'

class QuizQuestion extends Component{
    render(){
        return(
            <main>
                <section>
                    <p>{this.props.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <il>{this.props.quiz_question.answer_options[0]}</il>
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion