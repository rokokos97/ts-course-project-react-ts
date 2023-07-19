import { useRef } from 'react';
import styles from './Search.module.scss';
import { ReactComponent as SearchIcon} from 'assets/icon-search.svg'
import { Button } from 'components/Button';

interface SearchProps { 
  onSubmit: (text:string)=> void,
  hasError: boolean,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = (event:React.FormEvent) => {}
  return (
    <form onSubmit={handleSubmit} ref={searchRef}>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon/>
        </label>
        <input
          type='text'
          className={styles.textField}
          id='search'
          name='userName'
          placeholder='Search gitHub user...'
        />
        {hasError && (
          <div className={styles.error}>
            No result
          </div>
        )}
        <Button>Search</Button>
      </div> 
  </form>
  )

};
