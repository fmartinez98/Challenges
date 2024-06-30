import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import { User } from '../../store/mockHttpClient';
import Header from '../../components/Header';
import { styles } from './Home.styles';
import {
  checkAndUpdateUsers,
  clearStorage,
} from '../../storage/storage';
import { colors } from '../../theme/colors';
import { strings } from '../../constants/strings';
import UsersTable from '../../components/UsersTable';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await checkAndUpdateUsers(setUsers);
  }

  return (
    <View style={styles.container}>
      <Header title={strings.home.header} />
      <UsersTable data={users} />
      <Button
        title={users?.length ? strings.home.refetchButton : strings.home.fetchButton}
        color={colors.green}
        onPress={fetchUsers}
      />
      <Button title={strings.home.clearUsersBotton} onPress={() => setUsers([])} />
      <Button
        title={strings.home.clearStorageButton}
        color={colors.red}
        onPress={clearStorage}
      />
    </View>
  );
};

export default Home;
