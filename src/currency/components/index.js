import React  from 'react';
import Select from './CodesSelect'
import Paper from '@material-ui/core/Paper'
import './styles.css'
import Input from './Input'

const Currency = (props) => {
  const {
    handleChangeField,
    from,
    to,
    input,
    output,
    codes
  } = props;


  return (
    <Paper
      className={'wrapper'}>
      <div className='input-form'>
        <Input
          className={'amount'}
          handleOnChange={handleChangeField('input')}
          label={'input'}
          value={input}
        />
        <Select
          value={from}
          className='code-select'
          codes={codes}
          handleOnChange={handleChangeField('from')}
        />
      </div>
      <div className='input-form'>
        <Input
          className={'amount'}
          readOnly
          value={output}
        />
        <Select
          value={to}
          className='code-select'
          codes={codes}
          handleOnChange={handleChangeField('to')}
        />
      </div>

    </Paper>
  )
};

export default Currency