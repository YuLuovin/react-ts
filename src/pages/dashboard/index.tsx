import CardArea from './childCpn/CardArea';
import LineChart from './childCpn/LineChart';
import './style.less';


interface IProps {}
export default function Dashboard(props: IProps) {
  return (
    <div className="dashboard-container">
      <CardArea/>
      <LineChart/>
    </div>
  );
}