import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Table from './Table/Table';
import { User } from '../store/mockHttpClient';
import { spacing } from '../theme/spacing';
import { Text } from 'react-native';
import { colors } from '../theme/colors';
import { strings } from '../constants/strings';

interface UsersTable {
  data: Array<User>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
    paddingVertical: spacing.xs,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: colors.black,
  },
})

const UsersTable: React.FC<UsersTable> = ({ data }) => {
  const [sortedData, setSortedData] = useState<User[]>([]);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const sortByName = () => {
    const sortedByName = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setSortedData(sortedByName);
  };

  const sortByAge = () => {
    const sortedByAge = [...data].sort((a, b) => a.age - b.age);
    setSortedData(sortedByAge);
  };

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.age.toString()}</Text>
    </View>
  );

  const headers = [{title: 'Name', onPress: sortByName}, {title: 'Age', onPress: sortByAge}]

  return <Table data={sortedData ?? data} headers={headers} items={renderItem} emptyString={strings.usersTable.empty}/>
};

export default UsersTable;
