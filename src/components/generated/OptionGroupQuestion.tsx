import React from 'react'
import { Field } from 'react-final-form'
import { withStyles } from '@material-ui/core/styles';

type OptionGroupProps = {
 question: Question
}

//DL TODO refactor out primitive types
type Question = {
  placeholder?: string,
  text: string,
  key: string,
  answers: Answer[]
}

type Answer = {
  value: string,
  text: string
}

const OptionGroup: React.FunctionComponent<OptionGroupProps> = ({ question }) => (
  <div className="row">
    <label>{question.text}</label>
    <div>
      {question.answers &&
        question.answers.map(
          (answer, index) =>
            answer.value &&
            answer.text && (
              <label key={index}>
                <Field
                  name={question.key}
                  value={answer.value}
                  component="input"
                  type="radio"
                />

                {answer.text}
              </label>
            )
        )}
    </div>
  </div>
)

const styles: any = {
  row: {
    display: 'flex',
    flexFlow: 'row nowrap',
    label: {
      width: '150px',
      marginRight: '15px'
    },
    div: {
      label: {
        display: 'block',
        margin: '5px 0',
        input: {
          marginRight: '10px'
        }
      }
    }
  }
}

export default withStyles(styles)(OptionGroup);
