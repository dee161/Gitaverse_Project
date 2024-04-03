import React from 'react';
import './FAQ.css'
import { questions } from './faqdata';
import Question from './Question';

function FAQ() {
  return (
    <div className='container-faq'>
      <h2 className="heading-faq">How can we help you?</h2>
      <section className='faq'>
        {questions.map(item => (
          <Question key={item.id} question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  )
}

export default FAQ;
