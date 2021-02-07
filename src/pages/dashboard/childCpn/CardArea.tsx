import { PureComponent } from "react";
import SingleCard from './SingleCard';

interface IProps {}
interface ICardProps {
  backgroundColor: string;
  mainNumber: number;
}
interface IState {
  cardDataList: Array<ICardProps>
}

class CardArea extends PureComponent<IProps, IState>{
  public readonly state: Readonly<IState> = {
    cardDataList: [
      {
        backgroundColor: 'gold',
        mainNumber: 1200
      },
      {
        backgroundColor: 'greenyellow',
        mainNumber: 145
      },
      {
        backgroundColor: 'plum',
        mainNumber: 999
      },
      {
        backgroundColor: 'lightcoral',
        mainNumber: 9873
      },
      {
        backgroundColor: 'mediumaquamarine',
        mainNumber: 2321
      },
    ]
  }
  render() {
    return (
      <div className="card-area">
        {
          this.state.cardDataList.map((item, index) => {
            return <SingleCard key={ index } mainNumber={ item.mainNumber } backgroundColor={ item.backgroundColor } />
          })
        }
      </div>
    );
  }
}

export default CardArea;