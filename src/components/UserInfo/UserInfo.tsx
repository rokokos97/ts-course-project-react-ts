import styles from './UserInfo.module.scss';

export interface UserInfoProps { 
  icon: React.ReactNode,
  text?: string | null,
  isLink?: boolean,
}

export const UserInfo = ({ icon, isLink, text }: UserInfoProps) => {
  const currentText = text || 'Not Available';
  let currentHref = '';

  if(isLink){
    currentHref = text && text.startsWith('http') ? text : `https//${text}`;
  }

  return (
    <div className={`${styles.userInfo}${text ? '' : `${styles.empty}`}`} >
      {icon}
      <div>
        {isLink && text ? (
          <a
          href={currentHref}
          target='_blank'
          rel='noreferrer'
          className={styles.link}
          >
            {currentText}
          </a> 
        ) : currentText }
      </div>
  </div>
  )
};
