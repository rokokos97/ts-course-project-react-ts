import { LocalGitHubUser } from 'types';
import styles from './UserStatistic.module.scss';

export interface UserStatisticProps extends Pick<LocalGitHubUser, 'repos'|'followers'|'following'> { }

export const UserStatistic = ({ repos, followers, following }: UserStatisticProps) => (
  <div className={styles.userStatistic} >
    <div className={styles.info}>
      <div className={styles.infoTitle}>Repos</div>
      <div className={styles.infoNumber}>{repos}</div>
    </div>
    <div className={styles.info}>
      <div className={styles.infoTitle}>Followers</div>
      <div className={styles.infoNumber}>{followers}</div>
    </div>
    <div className={styles.info}>
      <div className={styles.infoTitle}>Following</div>
      <div className={styles.infoNumber}>{following}</div>
    </div>
  </div>
);
