import { SortMenuBox, SortButton } from './SortMenu.styled';
import {
  FaSortAlphaUp,
  FaSortAlphaDownAlt,
  FaSortAmountUpAlt,
  FaSortAmountDown,
} from 'react-icons/fa';
import { useContext } from 'react';
import { MyContext } from 'utils/context';

export function SortMenu({ toggleSortMenu, notes, sort, setSort }) {
  const { dispatch } = useContext(MyContext);

  const handleSortByNameUp = () => {
    dispatch({ type: 'sortByNameUp', notes });
    toggleSortMenu();
    setSort('sortByNameUp');
  };

  const handleSortByNameDown = () => {
    dispatch({ type: 'sortByNameDown', notes });
    toggleSortMenu();
    setSort('sortByNameDown');
  };

  const handleSortByCreatedUp = () => {
    dispatch({ type: 'sortByCreatedUp', notes });
    toggleSortMenu();
    setSort('sortByCreatedUp');
  };

  const handleSortByCreatedDown = () => {
    dispatch({ type: 'sortByCreatedDown', notes });
    toggleSortMenu();
    setSort('sortByCreatedDown');
  };

  //   const handleSortByUpdatedUp = () => {
  //     dispatch({ type: 'sortByUpdatedUp', notes });
  //     toggleSortMenu();
  //     setSort('sortByUpdatedUp');
  //   };

  //   const handleSortByUpdatedDown = () => {
  //     dispatch({ type: 'sortByUpdatedDown', notes });
  //     toggleSortMenu();
  //     setSort('sortByUpdatedDown');
  //   };

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

      {/* <SortButton onClick={handleSortByUpdatedUp}>
        By update time
        <FaSortAmountUpAlt />
      </SortButton>

      <SortButton onClick={handleSortByUpdatedDown}>
        By update time
        <FaSortAmountDown />
      </SortButton> */}
    </SortMenuBox>
  );
}
