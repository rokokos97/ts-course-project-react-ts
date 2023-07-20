import { UserStatistic } from 'components/UserStatistic';
import styles from './UserCard.module.scss';
import { LocalGitHubUser } from 'types';
import { UserTitle } from 'components/UserTitle';

interface UserCardProps extends LocalGitHubUser { }

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard} >
    <img src={props.avatar} alt={props.name} className={styles.avatar} />
    <UserTitle 
      created={props.created}
      name={props.name}
      login={props.login}
      />
    <p className={`${styles.bio}${styles.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio}
      </p>
    <UserStatistic
      repos={props.repos}
      followers={props.followers}
      following={props.following}
       />
  </div>
);
