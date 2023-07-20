import { LocalGitHubUser } from 'types';
import styles from './UserInfoBlock.module.scss';
import { UserInfo, UserInfoProps } from 'components/UserInfo/UserInfo';
import { ReactComponent as CompanyIcon} from 'assets/icon-company.svg'
import { ReactComponent as LocationIcon} from 'assets/icon-location.svg'
import { ReactComponent as TwiterIcon} from 'assets/icon-twitter.svg'
import { ReactComponent as BlogIcon} from 'assets/icon-website.svg'

interface UserInfoBlockProps extends Pick<LocalGitHubUser, 'blog'|'company'|'location'|'twitter'> { }

export const UserInfoBlock = ({ blog, company, location, twitter }: UserInfoBlockProps) => {
  const items: UserInfoProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
  },{
    icon: <BlogIcon/>,
    text: blog,
    isLink: true,
  },{
    icon: <TwiterIcon/>,
    text: twitter,
  },{
    icon: <CompanyIcon/>,
    text: company,
  }
  ];

  return (
    <div className={styles.userInfoBlock} >
      {items.map((item, index)=>(
      <UserInfo
       icon={item.icon}
       text={item.text}
       isLink={item.isLink}
       key={index}/>))}
    </div>
)};
