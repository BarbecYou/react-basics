import '../styles/user.card.css';

interface UserCardProps{
    name: string;
    age: number;
    birthDate: Date;
    favoriteDrink: string;
  }
  
  export default function UserCard(props: UserCardProps){
    return <div className="userCard">
      <div className='topRow'>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
      </div>
      <div className='bottomRow'>
        <h3>{props.birthDate.toDateString()}</h3>
        <h3>{props.favoriteDrink}</h3>
      </div>
    </div>;
  }