import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { api } from '../../utils/api';

const MainJurnal = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://152.42.224.77/jurnal/');
      setData(response.data.data);
    } catch (error) {
      console.error("An error occurred while fetching data:", error.message);
    }
  };

  const deleteJurnal = async (id) => {
    await axios.delete(`${api}/jurnal/${id}`);
    console.log("berhasil hapus data ")
    fetchData()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Jurnal List</Text> 
      <TouchableOpacity onPress={() => {
        navigation.navigate("CreateJurnal")
      }}>
        <Text>create</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.item}>
            <Text style={styles.title}>Nama Akun COA: {item.nama_akun_coa}</Text>
            <Text style={styles.subtitle}>Tanggal Transaksi: {item.tanggal_transaksi}</Text>
            <Text style={styles.subtitle}>Jenis Jurnal: {item.nama_jenis_jurnal}</Text>
            <TouchableOpacity onPress={() => deleteJurnal(item.id)} className="p-4 bg-blue-900">
              <Text>hapiuis</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
});

export default MainJurnal;
