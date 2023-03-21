import { SortMenuBox, SortButton } from './SortMenu.styled';
import {
  FaSortAlphaUp,
  FaSortAlphaDownAlt,
  FaSortAmountUpAlt,
  FaSortAmountDown,
} from 'react-icons/fa';

export function SortMenu({ toggleSortMenu, sort, setSort }) {
  const handleSortByNameUp = () => {
    toggleSortMenu();
    setSort('sortByNameUp');
  };

  const handleSortByNameDown = () => {
    toggleSortMenu();
    setSort('sortByNameDown');
  };

  const handleSortByCreatedUp = () => {
    toggleSortMenu();
    setSort('sortByCreatedUp');
  };

  const handleSortByCreatedDown = () => {
    toggleSortMenu();
    setSort('sortByCreatedDown');
  };

  const handleSortByUpdatedUp = () => {
    toggleSortMenu();
    setSort('sortByUpdatedUp');
  };

  const handleSortByUpdatedDown = () => {
    toggleSortMenu();
    setSort('sortByUpdatedDown');
  };

  return (
    <SortMenuBox>
      <SortButton
        onClick={handleSortByNameUp}
        disabled={sort === 'sortByNameUp'}
      >
        By name
        <FaSortAlphaUp />
      </SortButton>

      <SortButton
        onClick={handleSortByNameDown}
        disabled={sort === 'sortByNameDown'}
      >
        By name
        <FaSortAlphaDownAlt />
      </SortButton>

      <SortButton
        onClick={handleSortByCreatedUp}
        disabled={sort === 'sortByCreatedUp'}
      >
        By create time
        <FaSortAmountUpAlt />
      </SortButton>

      <SortButton
        onClick={handleSortByCreatedDown}
        disabled={sort === 'sortByCreatedDown'}
      >
        By create time
        <FaSortAmountDown />
      </SortButton>

      <SortButton
        onClick={handleSortByUpdatedUp}
        disabled={sort === 'sortByUpdatedUp'}
      >
        By update time
        <FaSortAmountUpAlt />
      </SortButton>

      <SortButton
        onClick={handleSortByUpdatedDown}
        disabled={sort === 'sortByUpdatedDown'}
      >
        By update time
        <FaSortAmountDown />
      </SortButton>
    </SortMenuBox>
  );
}
