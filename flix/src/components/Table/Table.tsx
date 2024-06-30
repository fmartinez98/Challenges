import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { styles } from './Table.styles';

type Header = { title: string; onPress: any };
interface Table {
  data: Array<any>;
  headers: Array<Header>;
  items: any;
  emptyString: string,
}

const Table: React.FC<Table> = ({ data, headers, items, emptyString }) => {
  if (data?.length > 0) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {headers?.map((header, index) => {
            return (
              <Text style={styles.headerCell} onPress={header.onPress} key={index}>
                {header.title}
              </Text>
            )
          })}
        </View>
        <FlatList
          data={data}
          renderItem={items}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

  if (data?.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>{emptyString}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" />
    </View>
  );
};

export default Table;
