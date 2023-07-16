import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';

export default function App() {
  const [usersData, setUsersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const infoObject = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const data = await infoObject.json();
    setUsersData([...data]);
  };

  return (
    <div>
      <Input usersData={usersData} setFilteredData={setFilteredData} />

      {filteredData.length ? (
        <UsersList usersData={filteredData} />
      ) : usersData.length ? (
        <UsersList usersData={usersData} />
      ) : (
        'Fetching..!!'
      )}
    </div>
  );
}

const Input = (props) => {
  const [searchVal, setSearchVal] = useState('');

  const { usersData, setFilteredData } = props;

  const onChange = (e) => {
    let searchedValue = e.target.value;
    const userData = [...usersData];

    if (searchedValue.length) {
      const filteredUsers = userData.filter((user, index) => {
        return user.title.toLowerCase().includes(searchedValue.toLowerCase());
      });

      setFilteredData([...filteredUsers]);
    } else {
      setFilteredData([...usersData]);
    }
    setSearchVal(searchedValue);
  };

  return <input type="text" value={searchVal} onChange={onChange} />;
};
