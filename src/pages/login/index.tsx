import { withRouter, RouteComponentProps } from 'react-router-dom';
import LoginForm from './LoginForm';
interface IProps extends RouteComponentProps {}
function Layout(params:IProps) {
  return (
    <div className="login-container">
      <div className="login-form-wrap">
        <LoginForm history={params.history} />
      </div>
    </div>
  );
}

export default withRouter(Layout);