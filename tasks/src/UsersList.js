import React from 'react';

const UsersList = (props) => {
  const { usersData: data } = props;
  
  return (<ol className="user">
    {data.map((user, index) => {
      const userId = user?.id ?? `userId-${index}`;
      const userTitle = user?.title ?? `title-${index}`;
      return (
        <>
          <li className="user-detail" key={userId}>
            <span className="user-detail__title">{userTitle}</span>
          </li>
        <br/>
        </>
      );
    })}
  </ol>);
};

export default UsersList;
