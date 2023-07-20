import { LocalGitHubUser } from 'types';
import styles from './UserTitle.module.scss';

interface UserTitleProps extends Pick<LocalGitHubUser, 'name' | 'login' | 'created'> { }

const localData = new Intl.DateTimeFormat('en-GB',{
  day:'numeric',
  month:'short',
  year:'numeric',
})
  
export const UserTitle = ({ name, login, created}: UserTitleProps) => {
  const joinDate = localData.format(new Date(created))
    return (
      <div className={styles.userTitle} >
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinDate}</span>
    </div>
    )
  };
