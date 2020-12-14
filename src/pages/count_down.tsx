import React from 'react';

interface Props {
  endDate: string,
  timeout: any
}

interface State {
  now: any
}

let timer: any = null;

class CountDown extends React.Component<Props, State> {
  readonly state: Readonly<State> = {
    now: new Date()
  }

  componentDidMount() {
    timer = setInterval((): void => {
      this.setState({
        now: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(timer);
    timer = null;
  }

  get countDown() {
    return (endDate: string): string => {
      return endDate
    }
  }

  render(): any {
    return (
      <div></div>
    )
  }
}

export default CountDown;