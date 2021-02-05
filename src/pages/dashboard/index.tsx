import CardArea from './childCpn/CardArea';


interface IProps {}
export default function Dashboard(props: IProps) {
  return (
    <div className="dashboard-container">
      <CardArea/>
    </div>
  );
}