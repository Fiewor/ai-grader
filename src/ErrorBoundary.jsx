import React from "react";
import { Button } from "@carbon/react";
import withNavigation from "./hocs";
import './_error.scss'

class ErrorBoundary extends React.Component {
    state = { error: false };

    static getDerivedStateFromError(error) {
      return { error: true };
    }
  
    componentDidCatch(error, info) {
      console.log(error, info);
    }

  render() {
    if (this.state.error) {
        return (
            <div className="container">
                <h1 className="error-text">Oops! Something broke.</h1>
                <Button onClick={() => this.props.navigate('/,', {replace:true})}>Go Home</Button>
            </div>
        )
      }
      return this.props.children;
  }
}

export default withNavigation(ErrorBoundary);
