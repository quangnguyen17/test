import { Component } from "react"

interface IProps {}
interface IState {
  hasError: boolean
  errorMessage?: string | undefined
  stack?: string | undefined
}

export class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: {}) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: { stack: any; message: any; fileName: any; lineNumber: any }) {
    return {
      hasError: true,
      stack: error.stack,
      errorMessage: error.message,
      fileName: error.fileName,
      lineNumber: error.lineNumber,
    }
  }

  componentDidCatch(error: any, info: any) {
    console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <h2>{this.state.errorMessage}</h2>
          {this.state.stack}
        </div>
      )
    }
    return this.props.children
  }
}
