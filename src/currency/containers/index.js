import React from 'react'
import {APIurl} from "../../config";
import Currency from '../components'

const CurrencyContainer = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: 1,
        output: undefined,
        from: 'USD',
        to: 'RUB',
        codes: [],
        isLoading: false,
        error: null,
      };
    }

    convert = () => {
      const {input, from, to} = this.state;
      this.setState({
        isLoading: true,
      });
      fetch(`${APIurl}/convert?amount=${input}&from=${from}&to=${to}`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(response => {

          const {exchangeResult} = response;

          this.setState({
            output: exchangeResult,
            isLoading: false,
          })
        })
        .catch(error => {
          console.log(error);
          this.setState({
            output: 'error',
            isLoading: false,
            error: 'sorry, service not available'
          })
        })
    };
    getCurrencyCodes = () => {
      fetch(`${APIurl}/currencyCodes`)
        .then(response => response.json())
        .then(response => {
          const {codes} = response;
          this.setState({codes})
        })
        .catch(error => {
          this.setState({error: 'sorry, service are vot available'});
        })
    };

    componentWillMount() {
      this.getCurrencyCodes();
      this.convert();
    }

    handleChangeField = (field) => (event) => {

      this.setState({
        [field]: event.target.value,
      }, () => this.convert())
    };

    render() {
      return <WrappedComponent
        handleChangeField={this.handleChangeField}
        {...this.state}
        {...this.props}
      />
    }
  }
};

export default CurrencyContainer(Currency);
